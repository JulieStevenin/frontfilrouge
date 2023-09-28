
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; 
import './update.css';

function AdSells() {
  const [ad, setAd] = useState([]);
  const [ticket, setTickets] = useState([]);

  const authToken = localStorage.getItem('authToken');
  const headers = {
    'Authorization': `Bearer ${authToken}`,
  };

  useEffect(() => {
    fetch(`http://localhost:8080/ad/account/sell`, { headers })
      .then((response) => response.json())
      .then((data) => {
        setAd(data);
        
        const adIds = data.map(ad => ad.id);


 
        fetch(`http://localhost:8080/tickets/byad/1`)
          .then(response => response.json())

          .then(data => {
            setTickets(data);
          })
          .catch(error => {
            console.error('Erreur lors de la récupération des données des tickets:', error);
          });
      })
      .catch((error) => {
        console.error('Erreur lors de la récupération des détails de l\'annonce:', error);
      });
  }, []);

  return (
    <>
      <h2>Vos annonces vendues</h2>
      {ad.map((ad) => (
        <div className="formDetails" key={ad.id}>
          <p className="inputDetails">{ad.name}</p>
          <p className="inputDetails">{ad.category}</p>
          {ticket.map((ticket) => <p key={ticket.id}> Billet : {ticket.price} € Nombre {ad.ticketQuantity}</p>)}
          <img src={ad.photo} className='imgDetailSell' alt={`Image de ${ad.name}`} />
        </div>
      ))}
    </>
  );
}

export default AdSells;
