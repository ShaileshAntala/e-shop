import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logIn } from "../../app/features/auth/authSlice";
import styles from "./Login.module.css";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (userEmail === "admin@gmail.com" && userPassword === "Abcd@1234") {
      dispatch(logIn());
      navigate("/dashboard");
      setUserEmail("");
      setUserPassword("");
    } else {
      alert("Wrong email or password combination");
    }
  };

  return (
    <div className={styles.App}>
      <img src="./logo.png" className="logo" alt="Business view - Reports" />
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.input_group}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
            name="email"
            placeholder="Enter your email adress"
            required
          />
        </div>
        <div className={styles.input_group}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            value={userPassword}
            onChange={(e) => setUserPassword(e.target.value)}
            name="password"
            required
          />
        </div>
        <button className={styles.primary}>Login</button>
      </form>
    </div>
  );
};

export default Login;
