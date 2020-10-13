import React from 'react';
import { FiArrowRight } from "react-icons/fi";
import { Link } from 'react-router-dom';

import "../styles/pages/landing.css";
import logoImg from "../images/Logo.svg";

const Landing = () => {
  return (
    <div id="page-landing">
      <div className="content-wrapper">
        <img src={logoImg} alt="Happy Logo" />
        
        <main>
          <h1>Leve felicidade para o mundo</h1>
          <p>Visite orfanatos e mude a vida das crianças.logoImg</p>
        </main>

        <div className="location">
          <strong>São Paulo</strong>
          <span>Santa Catarina</span>
        </div>

        <Link to="/app" className="enter-app">
          <FiArrowRight size={26} color="rgba(0,0,0,0.6" />
        </Link>
      </div>
    </div>
  );
}

export default Landing;
