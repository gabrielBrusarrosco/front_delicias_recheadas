import React from "react";
import "./AuthInput.scss";

export default function AuthInput({
  type,
  placeholder,
  value,
  onChange,
  icon: Icon,
  onIconClick,
}) {
  return (
    <div className="auth-input-wrapper">
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="auth-input-field"
      />

      {Icon && (
        <button
          type="button"
          className="auth-input-icon-button"
          onClick={onIconClick}
        >
          <Icon size={20} />
        </button>
      )}
    </div>
  );
}
