import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

function UpdateAd() {
  const { adId } = useParams();
  const [adDetails, setAdDetails] = useState({
    name: "",
    eventDate: "",
    city: "",
    category: "",
    photo: "",
  });
  const [adData, setAdData] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    fetch(`http://localhost:8080/ad/${adId}`)
      .then((response) => response.json())
      .then((data) => {
        setAdDetails(data);
      })
      .catch((error) => {
        console.error(
          "Erreur lors de la récupération des données de l'annonce:",
          error
        );
      });
  }, [adId]);

  const handleUpdate = () => {
    fetch(`http://localhost:8080/ad/${adId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(adDetails),
    })
      .then((response) => {
        if (response.ok) {
          window.location.href = "/ventes"; // Remplacez '/ventes' par l'URL de l'annonce précédente
        } else {
          console.error("Erreur lors de la mise à jour de l'annonce");
        }
      })
      .catch((error) => {
        console.error("Erreur lors de la mise à jour de l'annonce:", error);
      });
  };
  if (!adData) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <h1>Modifier l'annonce</h1>
      <form>
        <label>Titre :</label>
        <input
          type="text"
          value={adDetails.name}
          onChange={(e) => setAdDetails({ ...adDetails, name: e.target.value })}
        />
        <label>Date de l'événement :</label>
        <input
          type="text"
          value={adDetails.eventDate}
          onChange={(e) =>
            setAdDetails({ ...adDetails, eventDate: e.target.value })
          }
        />
        <label>Ville :</label>
        <input
          type="text"
          value={adDetails.city}
          onChange={(e) => setAdDetails({ ...adDetails, city: e.target.value })}
        />
        <label>Catégorie :</label>
        <input
          type="text"
          value={adDetails.category}
          onChange={(e) =>
            setAdDetails({ ...adDetails, category: e.target.value })
          }
        />
        <label>Photo :</label>
        <input
          type="text"
          value={adDetails.photo}
          onChange={(e) =>
            setAdDetails({ ...adDetails, photo: e.target.value })
          }
        />
        <button onClick={handleUpdate}>Enregistrer</button>
        <Link to={`/update/${adId}`}>Retour aux détails de l'annonce</Link>
      </form>
    </div>
  );
}

export default UpdateAd;
