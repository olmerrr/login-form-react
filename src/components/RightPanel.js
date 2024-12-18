import React from "react";

import InputField from "./InputField";
import Checkbox from "./Checkbox";

function RightPanel() {
  return (
    <div className="right-panel">
      <div className="locale-switcher">
        <button className="locale-button">EN</button>
      </div>

      <div className="form-container">
        <h1>
          Create an account<span className="dot">.</span>
        </h1>
        <p>
          Already have an account? <a href="/" className="sign-in">Sign in</a>
        </p>

        <form className="form">
          <InputField label="User ID" type="text" icon="👤" />
          <InputField label="Password" type="password" icon="🔒" hint="8 characters minimum" />
          <InputField label="Account Name" type="text" icon="📝" hint="Visible nickname for your profile" />

          <InputField
            label="Email"
            type="email"
            icon="✉️"
            button={<button className="resend-button">Resend (60s)</button>}
          />

          <InputField label="Verification Code" type="text" icon="🔑" />

          <div className="checkboxes">
            <Checkbox
              label="I read the Terms of Service and I agree to the terms."
              linkText="Terms of Service"
              linkHref="/"
            />
            <Checkbox
              label="I read the Privacy Policy and I agree to the terms."
              linkText="Privacy Policy"
              linkHref="/"
            />
            <Checkbox label="I would like to receive promotional emails." optional />
          </div>

          <button className="create-account">Create Account</button>
        </form>

        <div className="bottom-links">
          <span>📞 Have Promo Code?</span>
          <span> Contact Support</span>
        </div>
      </div>
    </div>
  )
}

export default RightPanel;
