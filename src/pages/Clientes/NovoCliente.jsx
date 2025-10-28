import React, { useState } from "react";
import AuthInput from "../../components/AuthInput/AuthInput";
import AuthButton from "../../components/AuthButton/AuthButton";
import DashboardSelect from "../../components/DashboardSelect/DashboardSelect";
import "./NovoCliente.scss"; // Importa o SCSS

export default function NovoCliente() {
  const [formData, setFormData] = useState({
    nome: "",
    celular: "",
    email: "",
    curso: "",
    termo: "1",
    periodo: "Noturno",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Novo Cliente:", formData);
    alert("Novo cliente cadastrado! Veja o console.");
    // Aqui você faria a chamada de API
  };

  return (
    <div className="novo-cliente-page">
      <div className="form-page-header">
        <h1>Cadastrar Cliente</h1>
        <p>Preencha os dados para registrar um novo cliente.</p>
      </div>

      <form className="form-container" onSubmit={handleSubmit}>
        <div className="form-grid">
          {/* Reutilizando AuthInput */}
          <AuthInput
            label="Nome Completo"
            name="nome"
            type="text"
            placeholder="Nome completo do cliente"
            value={formData.nome}
            onChange={handleChange}
          />
          <AuthInput
            label="Celular"
            name="celular"
            type="tel"
            placeholder="(18) 99999-9999"
            value={formData.celular}
            onChange={handleChange}
          />
          <AuthInput
            label="Email"
            name="email"
            type="email"
            placeholder="cliente@email.com"
            value={formData.email}
            onChange={handleChange}
          />
          <AuthInput
            label="Curso"
            name="curso"
            type="text"
            placeholder="Engenharia de Software"
            value={formData.curso}
            onChange={handleChange}
          />
          
          {/* Usando o novo DashboardSelect */}
          <DashboardSelect
            label="Termo"
            name="termo"
            value={formData.termo}
            onChange={handleChange}
          >
            {[...Array(10).keys()].map((i) => (
              <option key={i + 1} value={i + 1}>
                {i + 1}º Termo
              </option>
            ))}
          </DashboardSelect>

          <DashboardSelect
            label="Período"
            name="periodo"
            value={formData.periodo}
            onChange={handleChange}
          >
            <option value="Matutino">Matutino</option>
            <option value="Vespertino">Vespertino</option>
            <option value="Noturno">Noturno</option>
          </DashboardSelect>
        </div>

        <div className="form-actions">
          {/* Reutilizando AuthButton */}
          <AuthButton type="submit">Salvar Cliente</AuthButton>
        </div>
      </form>
    </div>
  );
}