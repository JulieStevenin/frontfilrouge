import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "./adDetails.css";

function AdDetails() {
  const { adId } = useParams();
  const [adData, setAdData] = useState({});
  const [tickets, setTickets] = useState([]);
  const [selectedTicketId, setSelectedTicketId] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8080/ad/${adId}`)
      .then((response) => response.json())
      .then((data) => {
        setAdData(data);
      })
      .catch((error) => {
        console.error(
          "Erreur lors de la récupération des données de l'annonce:",
          error
        );
      });

    fetch(`http://localhost:8080/tickets/byad/${adId}`)
      .then((response) => response.json())
      .then((ticketsData) => {
        setTickets(ticketsData);
      })
      .catch((error) => {
        console.error(
          "Erreur lors de la récupération des données des tickets:",
          error
        );
      });
  }, [adId]);

  const backgroundStyle = {
    backgroundImage: `url(${adData.photo})`,
    backgroundSize: "20%",
    backgroundPosition: "center",
  };

  return (
    <div className="mainAd" style={backgroundStyle}>
      <div className="Ad">
        <h1 className="titleAd">{adData.name} </h1>
        <img className="photoAd" src={adData.photo} alt={adData.name} />
        <p className="seller">
          Vendeur : {adData.fname} {adData.lname}{" "}
        </p>
        <p>{adData.eventDate}</p>
        <p>Nombre de billets : {adData.ticketQuantity}</p>
        {tickets.map((ticket) => (
          <div key={ticket.id}>
            <p className="priceAd">Prix : {ticket.price} €</p>
            <p>
              {" "}
              DESCRIPTION : {ticket.description} // ID Ticket : {ticket.id}
            </p>
          </div>
        ))}
        {tickets.length > 0 && (
          <Link to={`/commande/${tickets[0].id}`}>
            {" "}
            <div className="buttonAdDetails">Commander</div>{" "}
          </Link>
        )}
      </div>
    </div>
  );
}

export default AdDetails;
