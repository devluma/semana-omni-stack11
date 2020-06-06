/* eslint-disable no-alert */
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';

import logoImg from '../../assets/logo.svg';
import heroesImg from '../../assets/heroes.png';

export default function Logon() {
  const [id, setId] = useState('');
  const [email, setEmail] = useState('');
  const history = useHistory();

  async function handleLogin(e) {
    e.preventDefault();

    try {
      const response = await api.post('/auth', { id, email });

      localStorage.setItem('ongId', id);
      localStorage.setItem('ongName', response.data.name);

      history.push('/profiles');
    } catch (err) {
      alert('Falha no login, tente novamente.');
    }
  }

  return (
    <div className="logon-container">
      <section className="form">
        <img src={logoImg} alt="Be The Hero" className="logo-img" />
        <form onSubmit={handleLogin} autoComplete="none">
          <h1>Faça seu logon</h1>

          <input
            type="text"
            className="animation animation-effect-input"
            placeholder="Sua ID"
            value={id}
            onChange={(e) => setId(e.target.value)}
            autoComplete="none"
            required="required"
          />
          <input
            type="email"
            className="animation animation-effect-input"
            placeholder="Seu E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="none"
            required="required"
          />
          <button type="submit" className="animation animation-effect-button">
            Entrar
          </button>

          <Link to="/register" className="link-href">
            <FiLogIn size={16} color="#E02041" />
            Não tenho cadastro
          </Link>
        </form>
      </section>
      <img src={heroesImg} alt="Heroes" className="heroes-img" />
    </div>
  );
}
