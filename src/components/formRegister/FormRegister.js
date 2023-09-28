import React, { useState } from "react";
import "./forms.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function FormRegister() {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    mail: "",
    password: "",
  });

  const [registrationStatus, setRegistrationStatus] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const jsonData = JSON.stringify(formData);

    fetch("http://localhost:8080/user/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: jsonData,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erreur lors de la requête");
        }

        return response.text();
      })
      .then((statusText) => {
        setRegistrationStatus("inscription réussie");
      })
      .catch((error) => {
        console.error("Erreur :", error);

        setRegistrationStatus("Erreur lors de l'inscription");
      });
  };

  return (
    <>
      <div>
        <form className="formRegister" onSubmit={handleSubmit}>
          <input
            type="text"
            className="inputRegister"
            name="fname"
            placeholder="Prénom"
            value={formData.fname}
            onChange={handleInputChange}
          />
          <input
            type="text"
            className="inputRegister"
            name="lname"
            placeholder="Nom"
            value={formData.lname}
            onChange={handleInputChange}
          />
          <input
            type="text"
            className="inputRegister"
            name="mail"
            placeholder="E-mail"
            value={formData.mail}
            onChange={handleInputChange}
          />
          <input
            type="password"
            className="inputRegister"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleInputChange}
          />
          <input type="submit" className="submitRegister" value="S'inscrire" />
        </form>

        {registrationStatus && <p className="done">{registrationStatus}</p>}
      </div>
      <p>
        Déjà inscrit ? Vous pouvez maintenant vous{" "}
        <Link to="/login">connecter ici</Link>.
      </p>
    </>
  );
}

export default FormRegister;
