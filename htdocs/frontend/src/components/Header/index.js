import React from 'react';

export default function Header({ title, counter }) {
  return (
    <header>
      <h1>{title}</h1>
      <span>Contador: {counter}</span>
    </header>
  );
}
