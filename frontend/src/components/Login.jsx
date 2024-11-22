import React, { useState } from "react";

export default function Login() {
  const isUserLogged = localStorage.getItem("isUserLogged");
  if (isUserLogged === "true") window.location.href = "/user";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(
      (user) => user.email === email && user.password === password
    );

    if (user) {
      localStorage.setItem("isUserLogged", true);
      localStorage.setItem("currentUser", JSON.stringify(user));
      window.location.href = "/";
    } else {
      setErrorMessage("Invalid email or password");
    }
  };

  const styles = {
    container: {
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#121212",
    },
    form: {
      backdropFilter: "blur(10px)",
      backgroundColor: "#121212",
      padding: "25px",
      borderRadius: "15px",
      width: "350px",
      color: "#121212",
      background: 'linear-gradient(135deg, #111, #444)',
    },
    title: {
      fontSize: "2.5rem",
      fontWeight: "bold",
      marginBottom: "20px",
      color: "#00adb5",
      textAlign: "center",
      textShadow: "2px 2px 8px rgba(0, 0, 0, 0.7)",
    },
    subtitle: {
      textAlign: "center",
      fontSize: "1.1rem",
      color: "#d1d5db",
      marginBottom: "25px",
    },
    input: {
      width: "100%",
      padding: "12px",
      margin: "12px 0",
      borderRadius: "8px",
      border: "1px solid #00adb5",
      backgroundColor: "#333",
      color: "#ffffff",
    },
    passwordToggle: {
      position: "absolute",
      right: "15px",
      top: "13px",
      cursor: "pointer",
      color: "#00adb5",
    },
    buttonContainer: {
      display: "flex",
      justifyContent: "center",
      marginTop: "30px",
    },
    button: {
      position: "relative",
      padding: "12px 25px",
      fontSize: "1rem",
      fontWeight: "bold",
      borderRadius: "8px",
      border: "none",
      backgroundColor: "#00adb5",
      color: "#1c1c1e",
      cursor: "pointer",
      transition: "all 0.3s ease",
    },
    signup: {
      textAlign: "center",
      marginTop: "15px",
      color: "#d1d5db",
    },
    signupLink: {
      color: "#00adb5",
      fontWeight: "bold",
      textDecoration: "underline",
      cursor: "pointer",
    },
    error: {
      color: "red",
      textAlign: "center",
      marginBottom: "15px",
    },
  };

  return (
    <div style={styles.container}>
      <p style={styles.title}>Welcome Back!</p>
      <form onSubmit={handleLogin} style={styles.form}>
        <div style={styles.subtitle}>Login to access your account</div>
        {errorMessage && <div style={styles.error}>{errorMessage}</div>}
        <input
          type="email"
          value={email}
          placeholder="Enter your email"
          style={styles.input}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <div style={{ position: "relative" }}>
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            placeholder="Enter password"
            style={styles.input}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <span
            onClick={() => setShowPassword(!showPassword)}
            style={styles.passwordToggle}
          >
            {showPassword ? "Hide" : "Show"}
          </span>
        </div>
        <div style={styles.buttonContainer}>
          <button type="submit" style={styles.button}>
            Login
          </button>
        </div>
        <div style={styles.signup}>
          <span>Not a member? </span>
          <a href="/Signup" style={styles.signupLink}>
            Signup Here
          </a>
        </div>
      </form>
    </div>
  );
}
