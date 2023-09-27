import React, { useState } from 'react';
import axios from 'axios';


const OrderPayment = () => {
  const [cardCode, setCardCode] = useState('');
  const [securityCode, setSecurityCode] = useState('');
  const [cardDate, setCardDate] = useState('');

  const handleCardCodeChange = (e) => {
    setCardCode(e.target.value);
  };

  const handleSecurityCodeChange = (e) => {
    setSecurityCode(e.target.value);
  };

  const handleCardDateChange = (e) => {
    setCardDate(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const paymentData = {
        cardCode,
        securityCode,
        cardDate,
    }
    try {
        const response = await axios.post('http://localhost:8080/order/{id}/validation', paymentData);
  
        console.log('Réponse de l\'API :', response.data);
  
      } catch (error) {
        console.error('Erreur lors de l\'appel à l\'API :', error);
      }
    };

  

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Numéro de carte bancaire </label>
        <input
          type="text"
          value={cardCode}
          onChange={handleCardCodeChange}
          placeholder="XXXX XXXX XXXX XXXX"
        />
      </div>
      <div>
        <label>Code de sécurité (CVV)</label>
        <input
          type="text"
          value={securityCode}
          onChange={handleSecurityCodeChange}
          placeholder="XXX"
        />
      </div>
      <div>
        <label>Date de validité </label>
        <input
          type="text"
          value={cardDate}
          onChange={handleCardDateChange}
          placeholder="MM/YY"
        />
      </div>
      <button type="submit">Valider le paiement</button>
    </form>
  );
};

export default OrderPayment;
