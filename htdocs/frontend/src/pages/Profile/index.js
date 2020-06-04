/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-alert */
import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiPower, FiTrash2, FiEdit2 } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';

import logoImg from '../../assets/logo.svg';

export default function Profile() {
  const [incidents, setIncidents] = useState([]);
  const ongId = localStorage.getItem('ongId');
  const ongName = localStorage.getItem('ongName');
  const history = useHistory();

  function handleLogout() {
    localStorage.clear();

    history.push('/');
  }

  function handleEditIncident(id) {
    history.push(`/incidents/edit/${id}`);
  }

  async function handleDeleteIncident(id) {
    try {
      await api.delete(`/incidents/${id}`, {
        headers: {
          Authorization: ongId,
        },
      });

      setIncidents(incidents.filter((incident) => incident.id !== id));
    } catch (err) {
      alert('Erro ao deletar caso, tente novamente.');
    }
  }

  useEffect(() => {
    if (!ongName) {
      handleLogout();
    }

    api
      .get('/profiles', {
        headers: {
          Authorization: ongId,
        },
      })
      .then((response) => {
        setIncidents(response.data);
      });
  }, [ongId, ongName]);

  return (
    <div className="profile-container">
      <header>
        <img src={logoImg} alt="Be The Hero" />
        <span>
          Bem vindo(a),{' '}
          <Link to="/ongs/edit" className="strong-link">
            {ongName}
          </Link>
        </span>

        <Link to="/incidents/new" className="animation animation-effect-1">
          Cadastrar novo caso
        </Link>

        <button type="button" onClick={() => handleLogout()}>
          <FiPower size={18} color="#E02041" />
        </button>
      </header>

      <h1>Casos cadastrados</h1>

      <ul>
        {incidents.map((incident) => (
          <li key={incident.id}>
            <strong>CASO:</strong>
            <p>{incident.title}</p>

            <strong>DESCRIÇÂO:</strong>
            <p>{incident.description}</p>

            <strong>VALOR:</strong>
            <p>
              {Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              }).format(incident.value)}
            </p>

            <div className="profile-group-buttons">
              <button onClick={() => handleEditIncident(incident.id)} type="button">
                <FiEdit2 size={20} color="#7159c1" />
              </button>

              <button onClick={() => handleDeleteIncident(incident.id)} type="button">
                <FiTrash2 size={20} color="#E02041" />
              </button>
            </div>
          </li>
        ))}
      </ul>

      <footer>Copyright Sysdomotic.cc 2020.</footer>
    </div>
  );
}
