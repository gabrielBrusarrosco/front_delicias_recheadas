import AuthCarousel from "../../components/AuthCarousel/AuthCarousel.jsx";
import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import Logo from "../../components/Logo/Logo.jsx";
import AuthInput from "../../components/AuthInput/AuthInput.jsx";
import { Link } from "react-router-dom";
import AuthButton from "../../components/AuthButton/AuthButton.jsx";
import "./Login.scss";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log("Dados de login:", { email, password });
    alert("Login submetido! Verifique o console para os dados.");
  };

  return (
    <div className="login-page">
      <div className="login-left">
        <div className="login-form-wrapper">
          <Logo />
          <h1 className="login-title">Acesse sua conta</h1>

          <form className="login-form" onSubmit={handleLoginSubmit}>
            <AuthInput
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <AuthInput
              type={showPassword ? "text" : "password"}
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              icon={showPassword ? EyeOff : Eye}
              onIconClick={toggleShowPassword}
            />

            <a href="#" className="forgot-password-link">
              Esqueci minha senha
            </a>

            <div className="button-group">
              <AuthButton type="submit">Entrar</AuthButton>

              <Link to="/cadastro">
                <AuthButton>Cadastrar</AuthButton>
              </Link>
            </div>
          </form>
        </div>
      </div>
      <div className="login-right">
        <AuthCarousel />
      </div>
    </div>
  );
}
