import React from "react";

function InputField({ label, type, icon, hint, button }) {
  return (
    <div className="input-field">
      <label>{label}</label>
      <div className="input-wrapper">
        <input type={type} />
        {icon && <span className="icon">{icon}</span>}
        {button && <div className="button-container">{button}</div>}
      </div>
      {hint && <small>{hint}</small>}
    </div>
  );
}

export default InputField;
