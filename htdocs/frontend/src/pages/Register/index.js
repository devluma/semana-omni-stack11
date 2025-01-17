/* eslint-disable no-alert */
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';

import logoImg from '../../assets/logo.svg';

import Footer from '../../components/Footer';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [city, setCity] = useState('');
  const [uf, setUf] = useState('');
  const history = useHistory();

  async function handleRegister(e) {
    e.preventDefault();

    const data = {
      name,
      email,
      whatsapp,
      city,
      uf,
    };

    try {
      const response = await api.post('/ongs', data);

      alert(`Seu ID de acesso: ${response.data.id}`);

      history.push('/');
    } catch (err) {
      alert('Erro no cadastro, tente novamente');
    }
  }

  return (
    <div className="register-container">
      <div className="content">
        <section className="content-section">
          <img src={logoImg} alt="Be The Hero" className="logo-img" />
          <h1>Cadastro</h1>
          <p>
            Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua
            ONG.
          </p>

          <Link to="/" className="link-href">
            <FiArrowLeft size={16} color="#E02041" />
            Já tenho cadastro
          </Link>
        </section>

        <form onSubmit={handleRegister} autoComplete="none">
          <input
            type="text"
            className="animation animation-effect-input register-name"
            placeholder="Nome da ONG"
            title="Este campo é obrigatório!"
            value={name}
            onChange={(e) => setName(e.target.value)}
            autoComplete="none"
            required="required"
          />
          <input
            type="email"
            className="animation animation-effect-input register-email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="none"
            required="required"
          />
          <input
            type="text"
            className="animation animation-effect-input register-whatsapp"
            placeholder="Whatsapp da ONG"
            value={whatsapp}
            onChange={(e) => setWhatsapp(e.target.value)}
            autoComplete="none"
            required="required"
          />

          <div className="input-group">
            <input
              type="text"
              className="animation animation-effect-input register-city"
              placeholder="Cidade"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              autoComplete="none"
              required="required"
            />
            <input
              type="text"
              className="animation animation-effect-input register-uf"
              placeholder="UF"
              style={{ width: 80 }}
              value={uf}
              onChange={(e) => setUf(e.target.value)}
              autoComplete="none"
              required="required"
            />
          </div>

          <button type="submit" className="animation animation-effect-button">
            Cadastrar
          </button>
        </form>
      </div>

      <Footer />
    </div>
  );
}
