import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./authentication/Login";
import ForgotPasswordPage from "./authentication/ForgotPasswordPage";
import ResetPasswordPage from "./authentication/ResetPasswordPage";
import ResetPasswordPageSuccess from "./authentication/ResetPasswordPageSuccess";

function App() {
  return (
    <main className="App">
      <Router>
        {/* <Login /> */}
        <Routes>
        <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route path="/reset-password" element={<ResetPasswordPage />} />
          <Route path="/reset-password-success" element={<ResetPasswordPageSuccess />} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
