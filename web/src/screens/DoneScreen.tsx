import React from "react";
import "../styles/pages/done.css";
import bgDone from "../images/done-bg.png";
import { Link } from 'react-router-dom';

const DoneScreen = () => {
  return (
    <div id="done-container">
      <div className="done-wrapper">
        <div className="content">
          <h1 className="done-title">Ebaaa!</h1>
          <p className="done-text">
            O cadastro deu certo e foi enviado ao administrador para ser
            aprovado. Agora é só esperar :)
          </p>
          <Link to="/app" className="go-app">
            Voltar para o mapa
          </Link>
        </div>
        <div className="image">
          <img src={bgDone} alt="bgDone" />
        </div>
      </div>
    </div>
  );
};

export default DoneScreen;
