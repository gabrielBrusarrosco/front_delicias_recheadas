import React from "react";
import { NavLink } from "react-router-dom";
import { Package, Users } from "lucide-react";
import Logo from "../Logo/Logo"; // Reutilizando seu Logo
import "./Sidebar.scss";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo-container">
        {/* Usando o componente Logo que você já tem */}
        <Logo /> 
      </div>
      <nav className="sidebar-nav">
        <NavLink to="/dashboard/produtos" className="sidebar-link">
          <Package size={20} />
          <span>Produtos</span>
        </NavLink>
        <NavLink to="/dashboard/clientes" className="sidebar-link">
          <Users size={20} />
          <span>Clientes</span>
        </NavLink>
      </nav>
    </aside>
  );
}