import React from "react";
import "./loginForm.css";

function LoginForm({ schemeName, schemeLink, onCancel }) {
  const GOOGLE_FORM_URL =
    "https://docs.google.com/forms/d/e/1FAIpQLSfCfYU72fBINc5ARP8oLZvZZam2mNm4hw7QoW7u9HkJ8Cv9RQ/formResponse";

  // Unique iframe name
  const iframeName = "hidden_iframe";

  const handleSubmit = () => {
    // Delay redirect by 2 seconds after form submits
    setTimeout(() => {
      window.location.href = schemeLink;
    }, 2000);
  };

  return (
    <>
      {/* Hidden iframe to submit the form without leaving the page */}
      <iframe
        name={iframeName}
        style={{ display: "none" }}
        title="hidden_iframe"
      ></iframe>

      <div className="login-form-overlay">
        <div className="login-form-container">
          <h6>Register to Play for: {schemeName}</h6>
          <form
            action={GOOGLE_FORM_URL}
            method="POST"
            target={iframeName} // submit into hidden iframe
            onSubmit={handleSubmit}
          >
            {/* Hidden field for scheme name */}
            <input type="hidden" name="entry.1853539393" value={schemeName} />

            <label>
              Name:
              <input
                name="entry.1392925479"
                type="text"
                placeholder="Enter your Name"
                required
              />
            </label>

            <label>
              Mobile Number:
              <input
                name="entry.156727568"
                type="tel"
                pattern="[6-9][0-9]{9}"
                placeholder="10-digit mobile"
                required
              />
            </label>

            <div className="form-buttons">
              <button type="submit">Submit</button>
              <button type="button" onClick={onCancel}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default LoginForm;
