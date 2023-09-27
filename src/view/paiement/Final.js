import './final.css';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Paiement() {
  const { id } = useParams(); 
  const [cardNumber, setCardNumber] = useState("");
  const [isValidated, setIsValidated] = useState(false);
  const [order, setOrder] = useState(null);

  useEffect(() => {

    const getOrderUrl = `http://localhost:8080/order/${id}`;


    fetch(getOrderUrl)
      .then(response => response.json())
      .then(orderData => {
        setOrder(orderData);
      })
      .catch(error => {
        console.error('Erreur lors de la requête GET :', error);
      });
  }, [id]);

  const handleCardNumberChange = (e) => {
    setCardNumber(e.target.value);
  };

  const handleValidateOrder = () => {

    fetch(`http://localhost:8080/order/validatesimple/${id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ cardCode: cardNumber })
    })
    .then(response => {
      if (response.ok) {

        setIsValidated(true);
        console.log('La requête POST a réussi.');
      } else {

        console.error('La requête POST a échoué.');
      }
    })
    .catch(error => {
      console.error('Erreur lors de la requête POST :', error);
    });
  };

  return (
    <div>
      {isValidated ? (
        <p>L'OrderTicket a été validé avec succès!</p>
      ) : (
        <div className='mainBloc'>
          {order ? (
            <div className='CommandeBloc'>
              <p>Prix total : {order.totalPrice}</p>
              <form>
                <input
                  type="text"
                  id="cardNumber"
                  value={cardNumber}
                  onChange={handleCardNumberChange}
                placeholder='numéro de carte bleu'/>
                <button type="button" onClick={handleValidateOrder}>
              Commander
                </button>
              </form>
            </div>
          ) : (
            <p>Chargement en cours...</p>
          )}
        </div>
      )}
    </div>
  );
}

export default Paiement;
