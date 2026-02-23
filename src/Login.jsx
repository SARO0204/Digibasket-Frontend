import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        alert("Login Successful");
        window.location.href = "/";   // home page
      } else {
        alert(data.message);
      }
    } catch (error) {
      alert("Server error");
      console.error(error);
    }
  };

  return (
    <div className="login_background">
      <img
        src="/src/assets/login-background.avif"
        alt=""
        style={{ position: "relative" }}
      />

      <div className="login_box">
        <h2>Welcome To DigiBasket</h2>

        <input
          placeholder="Enter Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <br />
        <br />
        <br />

        <input
          type="password"
          placeholder="Enter Your Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <br />
        <br />

        <button onClick={handleLogin}>LOGIN</button>

        <br />
        <br />

        <a href="/register">New to Digibasket? Create an account</a>

        <img
          src="/src/assets/Digibasket Logo.webp"
          alt=""
          style={{ position: "relative" }}
        />
        <h3 style={{ position: "relative" }}>DIGIBASKET</h3>
      </div>
    </div>
  );
}

export default Login;