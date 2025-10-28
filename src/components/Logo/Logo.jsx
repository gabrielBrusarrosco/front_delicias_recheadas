import React from "react";
import "./Logo.scss";

export default function Logo() {
  return (
    <div className="logo-container">
      <div className="logo-icon-wrapper">
        <span className="logo-initials">DR</span>
      </div>
      <span className="logo-text">
        Delícias <span className="logo-text-highlight">Recheadas</span>
      </span>
    </div>
  );
}
