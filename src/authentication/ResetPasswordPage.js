// ResetPasswordPage.js
import React from "react";
import { Link } from "react-router-dom";
import { LuUser } from "react-icons/lu";
import { GrHide } from "react-icons/gr";

const ResetPasswordPage = () => {
  return (
    <div className="reset-password-container">
      <p
        style={{
          textAlign: "center",
          fontSize: "24px",
          fontWeight: "600",
          lineHeight: "36px",
          color: "#282828",
        }}
      >
        Reset your Password
      </p>
      <form>
        {/* <label htmlFor="username">Username:</label> */}
        <div
          className="input-container"
          style={{
            margin: "50px 0",
          }}
        >
          <span className="icon">
            <LuUser />
          </span>
          <input
            placeholder="
            Enter a new password"
            type="password"
            id="username"
            autoComplete="off"
            required
          />
          <span className="icon-1">
            <GrHide />
          </span>
        </div>

        <div className="input-container">
          <span className="icon">
            <LuUser />
          </span>
          <input
            placeholder="
            Confirm new password"
            type="password"
            id="username"
            autoComplete="off"
            required
          />
          <span className="icon-1">
            <GrHide />
          </span>
        </div>

        <Link to="/reset-password-success">
          <button
            type="submit"
            style={{
              margin: "50px 0px 0px 0px",
            }}
          >
            Continue
          </button>
        </Link>
      </form>
      {/* <form>
        <label>New Password:</label>
        <input type="password" placeholder="Enter your new password" />

        <label>Confirm Password:</label>
        <input type="password" placeholder="Confirm your new password" />

        <button type="submit">Submit</button>
      </form> */}
    </div>
  );
};

export default ResetPasswordPage;
