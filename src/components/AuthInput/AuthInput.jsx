import React from "react";
import "./AuthInput.scss";

export default function AuthInput({
  label, 
  name,  
  type,
  placeholder,
  value,
  onChange,
  icon: Icon,
  onIconClick,
}) {
  const inputId = name || placeholder; 

  return (
    <div className="auth-input-group"> 
      {label && 
        <label className="auth-input-label" htmlFor={inputId}>
          {label}
        </label>
      }
      <div className="auth-input-wrapper">
        <input
          id={inputId}
          name={name} 
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
    </div>
  );
}