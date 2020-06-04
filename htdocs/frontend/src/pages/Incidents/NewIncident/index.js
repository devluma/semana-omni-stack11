/* eslint-disable no-alert */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../../services/api';

import '../styles.css';

import logoImg from '../../../assets/logo.svg';

export default function NewIncident() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');
  const ongId = localStorage.getItem('ongId');
  const ongName = localStorage.getItem('ongName');
  const history = useHistory();

  async function handleNewIncident(e) {
    e.preventDefault();

    const data = {
      title,
      description,
      value,
    };

    try {
      await api.post('/incidents', data, {
        headers: {
          Authorization: ongId,
        },
      });

      history.push('/profiles');
    } catch (err) {
      alert('Erro ao cadastrar caso, tente novamente.');
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
          <h1>Cadastrar novo caso</h1>
          <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>

          <Link to="/profiles" className="link-href">
            <FiArrowLeft size={16} color="#E02041" />
            Voltar para home
          </Link>
        </section>

        <form onSubmit={handleNewIncident}>
          <input
            type="text"
            className="incidents-title"
            placeholder="Titulo do caso"
            required="required"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            className="incidents-description"
            placeholder="Descrição do caso"
            required="required"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            type="text"
            className="incidents-value"
            placeholder="valor em reais"
            required="required"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />

          <button type="submit" className="button">
            Cadastrar
          </button>
        </form>
      </div>

      <footer>Copyright Sysdomotic.cc 2020.</footer>
    </div>
  );
}
