import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './adDetails.css';

function AdDetails() {
  const { adId } = useParams();
  const [adData, setAdData] = useState({});
  const [tickets, setTickets] = useState([]);
  const [selectedTicketId, setSelectedTicketId] = useState(null);

  useEffect(() => {
    // Récupération des données de l'annonce
    fetch(`http://localhost:8080/ad/${adId}`)
      .then(response => response.json())
      .then(data => {
        setAdData(data);
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des données de l\'annonce:', error);
      });

    // Récupération des tickets pour cette annonce
    fetch(`http://localhost:8080/tickets/byad/${adId}`)
      .then(response => response.json())
      .then(ticketsData => {
        setTickets(ticketsData);
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des données des tickets:', error);
      });
  }, [adId]);

  return (
    <div className="mainAd">
      <div className="Ad">
        <h1 className='titleAd'>{adData.name}</h1>
        <img className='photoAd' src={adData.photo} alt={adData.name} />
        <p className='seller'>Vendeur : {adData.fname} {adData.lname} {adData.seller}</p>
        <p>Nombre de billets : {adData.ticketQuantity}</p>
        {tickets.map(ticket => (
            <div key={ticket.id}>
              <p>Prix : {ticket.price}</p>
              <p>Description : {ticket.description}</p>
              </div>
          ))}
        {tickets.length > 0 && (
          <Link to={`/commande/${tickets[0].id}`}>Commander</Link>
        )}
      </div>
    </div>
  );
}

export default AdDetails;







