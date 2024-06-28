import './App.css';
import Calculadora from './componentes/Calculadora';
import React, { useState, useEffect } from 'react';

export default function App() {
  const [expressao, setExpressao] = useState('')
  useEffect(() => {
    const handleKeyPress = (event) => {
      const { key } = event;
      if (/[0-9]/.test(key)) {
        setExpressao((prev) => prev + key);
      } else if (['/', '*', '-', '+'].includes(key)) {
        setExpressao((prev) => prev + key);
      } else if (key === 'Enter') {
        try {
          const resultado = eval(expressao);
          setExpressao(resultado.toString());
        } catch (e) {
          setExpressao('Err');
        }
      } else if (key === 'Escape') {
        setExpressao('');
      }
    };
    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [expressao]);
  return (
    <>
      <Calculadora expressao={expressao} setExpressao={setExpressao}></Calculadora>
    </>
  );
}

