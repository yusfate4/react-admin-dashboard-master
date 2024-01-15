// ResetPasswordPage.js
import React from "react";
import { Link } from "react-router-dom";
import { IoShieldCheckmarkOutline } from "react-icons/io5";

const ResetPasswordPageSuccess = () => {
  return (
    <div className="reset-password-container">
      <IoShieldCheckmarkOutline
        style={{
          textAlign: "center",
          color: "#000000",
          width: "166px",
          height: "166px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "auto",
          //  height: '100vh'
        }}
      />

      <p
        style={{
          textAlign: "center",
          fontSize: "26px",
          fontWeight: "600",
          lineHeight: "36px",
          color: "#282828",
          margin: "30px 0",
        }}
      >
        Successful password reset!
      </p>
      <p
        style={{
          textAlign: "center",
          fontSize: "20px",
          color: "#282828",
          width: "466px",
          height: "60px",
        }}
      >
        You can now use your new pass word to log in to your account
      </p>

      <Link to="/login">
        <button>Login</button>
      </Link>
    </div>
  );
};

export default ResetPasswordPageSuccess;
