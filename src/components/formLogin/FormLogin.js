import { useState } from "react";
import "./formLogin.css";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    mail: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [token, setToken] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/auth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Erreur lors de la requête");
      }

      const authToken = await response.text();

      setToken(authToken);
      localStorage.setItem("authToken", authToken);

      navigate("/Account");
    } catch (error) {
      setError("Identifiants incorrects");
      console.error("Erreur :", error);
    }
  };

  return (
    <div className="login-container">
      <form className="formLogin" onSubmit={handleSubmit}>
        <input
          type="text"
          className="inputLogin"
          name="mail"
          placeholder="E-mail"
          value={formData.mail}
          onChange={handleInputChange}
        />
        <input
          type="password"
          className="inputLogin"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleInputChange}
        />
        <input type="submit" className="submitLogin" value="Connexion" />
      </form>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
}

export default LoginForm;
