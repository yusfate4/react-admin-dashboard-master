import React from "react";
import { Link } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
// import AuthContext from "../context/AuthProvider";
// import { FaUser } from "react-icons/fa";
import { LuUser } from "react-icons/lu";
import { GrHide } from "react-icons/gr";

const Login = () => {
  // const { setAuth } = useContext(AuthContext);
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user, pwd);
    setUser("");
    setPwd("");
    setSuccess(true);
  };

  return (
    <>
      {success ? (
        <section>
          <h1>You are logged in!</h1>
          <br />
          <p>
            <a href="#">Go to Home</a>
          </p>
        </section>
      ) : (
        <section>
          <p
            ref={errRef}
            className={errMsg ? "errmsg" : "offscreen"}
            aria-live="assertive"
          >
            {errMsg}
          </p>
          <h1>Sign In</h1>
          <form onSubmit={handleSubmit}>
            {/* <label htmlFor="username">Username:</label> */}
            <div className="input-container">
              <span className="icon">
                <LuUser />
              </span>
              <input
                placeholder="Email"
                type="text"
                id="username"
                ref={userRef}
                autoComplete="off"
                onChange={(e) => setUser(e.target.value)}
                value={user}
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
                type="password"
                placeholder="Password"
                id="password"
                onChange={(e) => setPwd(e.target.value)}
                value={pwd}
                required
              />
              <span className="icon-1">
                <GrHide />
              </span>
            </div>
            <button>Log in</button>
          </form>
          <p className="forgot">
            Forgot password?
            <span className="line">
              <Link to="/forgot-password">Click here</Link>
            </span>
          </p>

          {/* <p>
            <Link to="/forgot-password">Forgot Password?</Link>
          </p> */}
        </section>
      )}
    </>
  );
};

export default Login;
