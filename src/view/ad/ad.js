import React, { useState } from 'react';
import axios from 'axios';
import './addAd.css'

const Ad = () => {
  const [formData, setFormData] = useState({
    name: '',
    eventDate: '',
    category: '',
    city: '',
    ticketQuantity: 0, 
  });
  const [tickets, setTickets] = useState([]);
  const [showModal, setShowModal] = useState(false);


  
  const [ticketCount, setTicketCount] = useState(0); 
  const [ticketFormData, setTicketFormData] = useState({
    description: '',
    ticketStatus: false,
    price: 0,
  });
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleTicketChange = (e) => {
    const { name, value } = e.target;
    setTicketFormData({ ...ticketFormData, [name]: name === 'ticketStatus' ? e.target.checked : value });
  };

  const addTicket = () => {
    if (ticketCount < formData.ticketQuantity) { 
      const newTicket = {
        description: '',
        ticketStatus: false,
        price: formData.unitPrice, 
      };
      setTickets([...tickets, newTicket]);
      setTicketCount(ticketCount + 1); 
    }
  };

  
  const removeTicket = (index) => {
    const updatedTickets = [...tickets];
    updatedTickets.splice(index, 1);
    setTickets(updatedTickets);
    setTicketCount(ticketCount - 1); // Décrémente le nombre de tickets ajoutés
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const adData = {
      name: formData.name,
      eventDate: formData.eventDate,
      category: formData.category,
      city: formData.city,
      tickets: formData.tickets,
      ticketQuantity: formData.ticketQuantity,
    };
    console.log('Données de l\'annonce à envoyer :', adData);

    try {
      const response = await axios.post('http://localhost:8080/ad/create', adData);
      console.log('Annonce créée avec succès !');
      setFormData({
        name: '',
        eventDate: '',
        category: '',
        city: '',
        tickets:'',
        ticketQuantity: 0, 
        unitPrice: 0, 
      });
      setTickets([]);
    } catch (error) {
      console.error("Erreur lors de la création de l'annonce :", error);
    }
  };
 
  return (

        <div className="mainRegister">
    <div className="textRegister">
    <h2 className="titleRegister">Partagez toute la culture </h2>
    <p className="subRegister">Ajoutez vos annonces et accédez aux meilleurs événements grâce à notre communauté d'acheteurs et de revendeurs.</p>
  
    </div>
      <form className="formRegister"  onSubmit={handleSubmit}>
       
          <input className="inputRegister" type="text" name="name" value={formData.name} onChange={handleChange} placeholder="nom de l'annonce" required />
  
   
          <input className="inputRegister" type="date"  name="eventDate" value={formData.eventDate} onChange={handleChange} placeholder="date de l'evenement" required />
       
          <input  className="inputRegister" type="text" name="category" value={formData.category} placeholder="categorie de l'evenement" onChange={handleChange} />

          <input className="inputRegister"  type="text" name="city" placeholder="ville de l'anonnce" value={formData.city} onChange={handleChange} />
          <input className="inputRegister"  type="text" name="price" placeholder="prix unitaire" value={ticketFormData.price} onChange={handleTicketChange} />
          {/* <input className="inputRegister"  type="text" name="ticketQuantity" placeholder="nombre des tickets" value={formData.ticketQuantity} onChange={handleChange} />
       <button className ="add" type="button" onClick={() => setShowModal(true)}>
          Ajouter un ticket
        </button>*/}
        <input
          className="inputRegister"
          type="text"
          name="ticketQuantity"
          placeholder="nombre de tickets"
          value={formData.ticketQuantity}
          onChange={handleChange}
        />
        <button className="add" type="button" onClick={addTicket}>
          Ajouter un ticket
        </button>
        <div className="ticketRecap">
          <h2>Récapitulatif des Tickets</h2>
          <p>Nombre de Tickets ajoutés : {ticketCount}</p>
          <table>
            <thead>
              <tr>
              <th>id</th>
                <th>Prix</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {tickets.map((ticket, index) => (
                <tr key={index}>
                  <td>{ticket.id}</td>
                 {/* <td>{ticket.ticketStatus ? 'Actif' : 'Inactif'}</td>*/}
                  <td>{ticket.price}</td>
                  <td>
                    <button className="delete-button" type="button" onClick={() => removeTicket(index)}>
                      Supprimer
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
 {/*<button className="add" type="button" onClick={() => setShowModal(true}>
          Ajouter un ticket
 </button>*/}

      
       {showModal && (
          <div className="modal">
            <div className="modal-content">
              <h2 >Ajouter un ticket</h2>
              <textarea className="inputTicket" type="text" placeholder="Description du ticket" name="description" value={ticketFormData.description} onChange={handleTicketChange} />
              <input className="inputTicket" type="text" placeholder="Prix du ticket" name="price" value={ticketFormData.price} onChange={handleTicketChange} />
              <button  className ="add" type="button" onClick={addTicket}>
                Ajouter ce ticket
              </button>
              <button  className ="delete-button" type="button" onClick={() => setShowModal(false)}>
                Fermer
              </button>
            </div>
          </div>
        )}
        <table>
          <thead>
            <tr>
              <th>Description</th>
              <th>Statut</th>
              <th>Prix</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {tickets.map((ticket, index) => (
              <tr key={index}>
                <td>{ticket.description}</td>
                <td>{ticket.ticketStatus ? 'Actif' : 'Inactif'}</td>
                <td>{ticket.price}</td>
                <td>
                  <button  className ="delete-button" type="button" onClick={() => removeTicket(index)}>
                    Supprimer
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
            </table>
        <table>
          {/* ... Tableau des tickets ... */}
        </table>
        <input type="submit" className="submitRegister" ></input>
      </form>
    </div>
   
  );
};

export default Ad;
