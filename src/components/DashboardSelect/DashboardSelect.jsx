import React from "react";
import "./DashboardSelect.scss";

export default function DashboardSelect({
  label,
  value,
  onChange,
  name,
  children,
}) {
  return (
    <div className="select-group">
      {label && (
        <label className="select-label" htmlFor={name}>
          {label}
        </label>
      )}
      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className="select-field"
      >
        {children}
      </select>
    </div>
  );
}