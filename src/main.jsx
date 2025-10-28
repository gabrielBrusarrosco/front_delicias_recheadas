import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.scss";

// Layouts
import AuthLayout from "./layouts/AuthLayout/AuthLayout.jsx";
import DashboardLayout from "./layouts/DashboardLayout/DashboardLayout.jsx"; // Novo

// Páginas de Autenticação
import Login from "./pages/Login/Login.jsx";
import Cadastro from "./pages/Cadastro/Cadastro.jsx";

// Páginas do Dashboard (Novas)
import Produto from "./pages/Produtos/Produto.jsx";
import NovoProduto from "./pages/Produtos/NovoProduto.jsx";
import Cliente from "./pages/Clientes/Cliente.jsx";
import NovoCliente from "./pages/Clientes/NovoCliente.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Rotas de Autenticação */}
        <Route path="/" element={<AuthLayout />}>
          <Route index element={<Login />} />
          <Route path="login" element={<Login />} />
          <Route path="cadastro" element={<Cadastro />} />
        </Route>

        {/* Rotas do Dashboard */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Produto />} /> 
          <Route path="produtos" element={<Produto />} />
          <Route path="produtos/novo" element={<NovoProduto />} />
          <Route path="clientes" element={<Cliente />} />
          <Route path="clientes/novo" element={<NovoCliente />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);