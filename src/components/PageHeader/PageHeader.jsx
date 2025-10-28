import React from "react";
import { Link } from "react-router-dom";
import AuthButton from "../AuthButton/AuthButton"; // Reutilizando seu botão
import "./PageHeader.scss";

export default function PageHeader({ title, subtitle, buttonText, buttonTo }) {
  return (
    <div className="page-header">
      <div className="page-header-info">
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
      <div className="page-header-actions">
        <Link to={buttonTo}>
          {/* Reutilizando seu AuthButton */}
          <AuthButton type="button">{buttonText}</AuthButton>
        </Link>
      </div>
    </div>
  );
}