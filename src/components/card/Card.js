import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./card.css";

function Card() {
  const [ads, setAds] = useState([]);
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/ad/all/false/false", {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Erreur HTTP! Statut: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setAds(data);
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des données:", error);
      });
  }, []);

  return (
    <div className="bg">
      <div className="mainCard">
        <h1 className="TitreAPI">Les billets en vente</h1>

        <div className="cardAll">
          {ads.map((ad) => (
            <Link to={`/ad/${ad.id}`} key={ad.id} className="card">
              <div className="card" key={ad.id}>
                <div className="pictureCard">
                  <img src={ad.photo} alt={ad.name} className="imgCard" />
                </div>
                <div className="textCard">
                  {ad.name}
                  <p className="infoCard"> Vendeur : {ad.fname}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Card;
