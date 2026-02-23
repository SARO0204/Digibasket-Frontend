import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/api/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );

      const data = await res.json();

      if (res.ok) {
        alert("Login Successful");
        window.location.href = "/";
      } else {
        alert(data.message || "Login failed");
      }
    } catch (error) {
      console.error(error);
      alert("Server error");
    }
  };

  return (
    <div className="login_background">
      <img
        src="/login-background.avif"
        alt="Login background"
        className="login_bg_img"
      />

      <div className="login_box">
        <h2>Welcome To DigiBasket</h2>

        <input
          type="email"
          placeholder="Enter Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <br /><br />

        <input
          type="password"
          placeholder="Enter Your Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <br /><br />

        <button onClick={handleLogin}>LOGIN</button>

        <br /><br />

        <a href="/register">New to Digibasket? Create an account</a>

        <br /><br />
        <img
          src="/digibasket-logo.webp"
          alt="DigiBasket Logo"
          className="login_logo"
        />

        <h3>DIGIBASKET</h3>
      </div>
    </div>
  );
}

export default Login;