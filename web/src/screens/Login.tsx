import React from 'react';
// import { FiArrowRight } from "react-icons/fi";
// import { Link } from 'react-router-dom';

import "../styles/pages/login.css";
import logoImg from "../images/logo-login.png";

const Login = () => {
  return (
   <div id="login-container">
      <div className="login-img">
        <img src={logoImg} alt="Logo Happy" />
        <p>Rio do Sul </p>
        <p>Santa Catarina</p>
      </div>
      <div className="login-form">
        <h1>Fazer login</h1>
        <form>
          <div className="control-group">
            <label htmlFor="email">E-mail</label>
            <input type="text" name="email" />
          </div>
          <div className="control-group">
            <label htmlFor="password">Senha</label>
            <input type="text" name="email" />         
          </div>
           <div className="control-group">
            <label htmlFor="remeenber">Senha</label>
            <input type="checkbox" name="remeenber" />
          </div>
           <div className="control-group">
            <input type="submit" value="Entrar" className="btn-submit" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
