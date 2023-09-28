import { useParams, useNavigate } from "react-router-dom";
import "./orderConfirmation.css";
import axios from "axios";

const ConfirmationPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const handleProceedToPayment = async () => {
    try {
      const orderTicket = {
        id,
      };

      const response = await axios.post(
        "http://localhost:8080/order/creationorder",
        orderTicket
      );

      if (response.status === 201) {
        navigate.push(`/OrderPayment/${response.data.id}`);

        console.error("Erreur lors de la création de la commande.");
      }
    } catch (error) {
      console.error("Erreur lors de la création de la commande :", error);
    }
  };

  return (
    <>
      <div className="main">
        <div className="orderTitle">
          <h1> Récapitulatif de la commande :</h1>
        </div>
        <div className="orderContent">
          <p>Vous souhaitez acheter le ticket #{id}</p>
          <button className="button" onClick={handleProceedToPayment}>
            Passez à l'étape du paiement
          </button>
        </div>
      </div>
    </>
  );
};

export default ConfirmationPage;
