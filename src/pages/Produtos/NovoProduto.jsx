import React, { useState } from "react";
import AuthInput from "../../components/AuthInput/AuthInput";
import AuthButton from "../../components/AuthButton/AuthButton";
import DashboardSelect from "../../components/DashboardSelect/DashboardSelect";
import { Percent } from "lucide-react";
import "./NovoProduto.scss"; // Importa o SCSS

export default function NovoProduto() {
  const [formData, setFormData] = useState({
    nome: "",
    categoria: "Salgados",
    precoCompra: "",
    margemLucro: "",
    quantidade: "",
    estoqueMinimo: "",
    imagem: null,
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      setFormData((prev) => ({ ...prev, [name]: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Novo Produto:", formData);
    alert("Novo produto cadastrado! Veja o console.");
  };

  return (
    <div className="novo-produto-page">
      <div className="form-page-header">
        <h1>Cadastrar Produto</h1>
        <p>Preencha os dados para registrar um novo produto no catálogo.</p>
      </div>

      <form className="form-container" onSubmit={handleSubmit}>
        <div className="form-grid">
          {/* Nome e Categoria na primeira linha */}
          <div className="form-span-all">
            <AuthInput
              label="Nome do Produto"
              name="nome"
              type="text"
              placeholder="Ex: Coxinha de Frango"
              value={formData.nome}
              onChange={handleChange}
            />
          </div>

          <DashboardSelect
            label="Categoria"
            name="categoria"
            value={formData.categoria}
            onChange={handleChange}
          >
            {/* Categorias baseadas no seu screenshot image_9a4455.png */}
            <option value="Salgados">Salgados</option>
            <option value="Doces">Doces</option>
            <option value="Bebidas">Bebidas</option>
            <option value="Outros">Outros</option>
          </DashboardSelect>

          <AuthInput
            label="Preço de Compra (R$)"
            name="precoCompra"
            type="number"
            placeholder="2.50"
            value={formData.precoCompra}
            onChange={handleChange}
          />
          <AuthInput
            label="Margem de Lucro (%)"
            name="margemLucro"
            type="number"
            placeholder="60"
            value={formData.margemLucro}
            onChange={handleChange}
            icon={Percent} // O AuthInput suporta um ícone
          />
          <AuthInput
            label="Quantidade em Estoque"
            name="quantidade"
            type="number"
            placeholder="50"
            value={formData.quantidade}
            onChange={handleChange}
          />
          <AuthInput
            label="Estoque Mínimo"
            name="estoqueMinimo"
            type="number"
            placeholder="10"
            value={formData.estoqueMinimo}
            onChange={handleChange}
          />
          <AuthInput
            label="Imagem do Produto"
            name="imagem"
            type="file"
            onChange={handleChange}
          />
        </div>

        <div className="form-actions">
          <AuthButton type="submit">Salvar Produto</AuthButton>
        </div>
      </form>
    </div>
  );
}