/* eslint-disable no-alert */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../../services/api';

import '../styles.css';

import logoImg from '../../../assets/logo.svg';

export default function EditIncident() {
  const [id, setId] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');
  const ongId = localStorage.getItem('ongId');
  const ongName = localStorage.getItem('ongName');
  const history = useHistory();

  async function handleEditIncident(e) {
    e.preventDefault();

    const data = {
      id,
      title,
      description,
      value,
    };

    try {
      await api.post(`/incidents/${id}`, data, {
        headers: {
          Authorization: ongId,
        },
      });

      history.push('/profiles');
    } catch (err) {
      alert('Erro ao editar o caso, tente novamente.');
    }
  }

  useEffect(() => {
    if (!ongName) {
      history.push('/');
    }
  });

  return (
    <div className="incidents-container">
      <div className="content">
        <section className="content-section">
          <img src={logoImg} alt="Be The Hero" className="logo-img" />
          <h1>
            Editar o caso <span>DELTA ALFA</span>
          </h1>
          <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>

          <Link to="/profiles" className="link-href">
            <FiArrowLeft size={16} color="#E02041" />
            Voltar para home
          </Link>
        </section>

        <form onSubmit={handleEditIncident}>
          <input
            type="text"
            className="animation animation-effect-input incidents-title"
            placeholder="Titulo do caso"
            required="required"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            className="animation animation-effect-input incidents-description"
            placeholder="Descrição do caso"
            required="required"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            type="text"
            className="animation animation-effect-input incidents-value"
            placeholder="Valor em reais"
            required="required"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />

          <button type="submit" className="animation animation-effect-button">
            Atualizar
          </button>
        </form>
      </div>

      <footer>Copyright Sysdomotic.cc 2020.</footer>
    </div>
  );
}
