/* eslint-disable no-alert */
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';

import logoImg from '../../assets/logo.svg';

import Footer from '../../components/Footer';

export default function EditOng() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [city, setCity] = useState('');
  const [uf, setUf] = useState('');
  const history = useHistory();

  async function handleEditOng(e) {
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
      alert('Erro ao atualiza os dados, tente novamente');
    }
  }

  return (
    <div className="edit-ong-container">
      <div className="content">
        <section className="content-section">
          <img src={logoImg} alt="Be The Hero" className="logo-img" />
          <h1>Editar ONG</h1>
          <p>Atualize os dados da ONG e ajude pessoas a encontrarem os casos da sua ONG.</p>

          <Link to="/profiles" className="link-href">
            <FiArrowLeft size={16} color="#E02041" />
            Voltar para home
          </Link>
        </section>

        <form onSubmit={handleEditOng} autoComplete="none">
          <input
            type="text"
            className="animation animation-effect-input edit-ong-name"
            placeholder="Nome da ONG"
            title="Este campo é obrigatório!"
            value={name}
            onChange={(e) => setName(e.target.value)}
            autoComplete="none"
            required="required"
          />
          <input
            type="email"
            className="animation animation-effect-input edit-ong-email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="none"
            required="required"
          />
          <input
            type="text"
            className="animation animation-effect-input edit-ong-whatsapp"
            placeholder="Whatsapp da ONG"
            value={whatsapp}
            onChange={(e) => setWhatsapp(e.target.value)}
            autoComplete="none"
            required="required"
          />

          <div className="input-group">
            <input
              type="text"
              className="animation animation-effect-input edit-ong-city"
              placeholder="Cidade"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              autoComplete="none"
              required="required"
            />
            <input
              type="text"
              className="animation animation-effect-input edit-ong-uf"
              placeholder="UF"
              style={{ width: 80 }}
              value={uf}
              onChange={(e) => setUf(e.target.value)}
              autoComplete="none"
              required="required"
            />
          </div>

          <button type="submit" className="animation animation-effect-button">
            Atualizar
          </button>
        </form>
      </div>

      <Footer />
    </div>
  );
}
