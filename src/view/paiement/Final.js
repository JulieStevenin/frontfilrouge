import './final.css';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Final() {
  const { id } = useParams(); 
  const [cardNumber, setCardNumber] = useState("");
  const [isValidated, setIsValidated] = useState(false);
  const [order, setOrder] = useState(null);

  useEffect(() => {

    const getOrderUrl = `http://localhost:8080/order/byticket/${id}`;


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

    fetch(`http://localhost:8080/order/validatesimple/${order.id}`, {
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
              <p className='PriceTotal'>Prix total : {order.totalPrice} €</p>
              <form className='formbuy'>
                <h2>Saisissez votre numéro de carte de crédit</h2>
                <input
                className='CredCard'
                  type="text"
                  id="cardNumber"
                  value={cardNumber}
                  onChange={handleCardNumberChange}
                placeholder='numéro de carte bleu'/>
                <div className='buy' onClick={handleValidateOrder}>
              Commander
                </div>
              </form>
              <img className='logoBuy' src="https://www.reussir-mon-ecommerce.fr/wp-content/uploads/2016/03/paypal-1.png"/>
            </div>
          ) : (
            <p>Chargement en cours...</p>
          )}
        </div>
      )}
    </div>
  );
}

export default Final;
