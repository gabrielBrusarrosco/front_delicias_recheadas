import React from "react";
import "./AuthButton.scss";

export default function AuthButton({ children, type = "button", onClick }) {
  return (
    <button type={type} onClick={onClick} className="auth-button">
      {children}
    </button>
  );
}
