
import React, { useEffect, useState } from 'react'; 
import { useParams, useNavigate } from 'react-router-dom'
import './orderConfirmation.css'
import axios from 'axios';

const OrderConfirmation = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const [ticket, setTicket] = useState(null);

  useEffect(() => {
    const fetchTicket = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/tickets/${id}`);
        if (response.status === 200) {
          setTicket(response.data);
        }
      } catch (error) {
        console.error('Erreur lors de la récupération du ticket :', error);
      }
    };
    
    fetchTicket();
  }, [id]);

  const handleProceedToPayment = async () => {
    if (!ticket) return;

    try {
      const orderTicket = {
        tickets: [ticket], 
        // Ajouter ici totalPrice, buyer, seller, etc.
        // par exemple : totalPrice: ticket.price
      };

      const response = await axios.post('http://localhost:8080/order/creationorder', orderTicket);

      if (response.status === 201) {
        navigate(`/OrderPayment/${response.data.id}`);
      } else {
        console.error('Erreur lors de la création de la commande.');
      }
    } catch (error) {
      console.error('Erreur lors de la création de la commande :', error);
    }
  };

  return (
    <>
      <div className="main">
        <div className="orderTitle">
          <h1>Récapitulatif de la commande :</h1>
        </div>
        <div className="orderContent">
          {ticket ? (
            <>
              <p>Vous souhaitez acheter le ticket #{ticket.id}</p>
              {/* Ajouter détails ici sur prix eet vendeur */}
              <button className="goToPayment" onClick={handleProceedToPayment}>
                Passez à l'étape du paiement
              </button>
            </>
          ) : (
            <p>Chargement du ticket...</p>
          )}
        </div>
      </div>
    </>
  );
};
export default OrderConfirmation;
