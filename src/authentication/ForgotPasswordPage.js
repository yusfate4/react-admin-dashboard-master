import React, { useState } from "react";
import { Link } from "react-router-dom";
import { LuUser } from "react-icons/lu";
import { GrHide } from "react-icons/gr";

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setIsValidEmail(true); // Reset validation when the user types
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple email validation, you can enhance it as needed
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailRegex.test(email);

    if (isValid) {
      // If the email is valid, navigate to the reset password page
      window.location.href = "/reset-password";
    } else {
      // If the email is not valid, set isValidEmail to false
      setIsValidEmail(false);
    }
  };

  return (
    <div className="forgot-password-container" style={{ textAlign: "center" }}>
      <img
        alt="profile-user"
        width="168px"
        height="94.08px"
        src={`../../assets/logo-1.png`}
        style={{
          margin: "auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      />
      <p
        style={{
          width: "488.03px",
          textAlign: "left",
          margin: "50px 0",
        }}
      >
        Enter the email address associated with your account, and we’ll send you
        a link to reset your password
      </p>
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <span className="icon">
            <LuUser />
          </span>
          <input
            placeholder="Email"
            type="text"
            id="forgotpwd"
            autoComplete="off"
            required
            value={email}
            onChange={handleEmailChange}
            className={!isValidEmail ? "invalid-input" : ""}
          />
          <span className="icon-1">
            <GrHide />
          </span>
        </div>

        {!isValidEmail && (
          <p style={{ color: "red", margin: "5px 0" }}>
            Please enter a valid email address.
          </p>
        )}

        <Link to="/reset-password">
          <button
            type="submit"
            style={{
              margin: "20px 0px 0px 0px",
            }}
          >
            Continue
          </button>
        </Link>
      </form>
    </div>
  );
};

export default ForgotPasswordPage;
