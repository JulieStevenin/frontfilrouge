import { useState } from 'react';
import './dashboard.css';
import { Icon } from '@iconify/react';

function Dashboard() {
  const [profil, setProfil] = useState(true);
  const [achats, setAchats] = useState(false);
  const [ventes, setVentes] = useState(false);
  const [annonces, setAnnonces] = useState(false);

  function show(name) {
    setProfil(name === 'profil');
    setAchats(name === 'achats');
    setVentes(name === 'ventes');
    setAnnonces(name === 'annonces');
  }

  const [adData, setAdData] = useState({
    name: '',
    eventDate: '',
    category: '', // Changed "Category" to "category"
    City: '',
    tickets: [], // Initialize tickets as an empty array
  });

  const [ticketData, setTicketData] = useState({
    description: '',
    ticketStatus: false,
    price: 0.0,
  });

  const addTicket = () => {
    // Ajouter le ticket aux données de l'annonce
    setAdData({
      ...adData,
      tickets: [...adData.tickets, { ...ticketData }],
    });
    // Réinitialiser les champs du ticket après l'ajout
    setTicketData({
      description: '',
      ticketStatus: false,
      price: 0.0,
    });
  };

  const submitForm = async () => {
    try {
      const response = await fetch('http://localhost:8080/ad/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(adData),
      });

      if (response.ok) {
        setAdData({
          name: '',
          eventDate: '',
          category: '',
          city: '',
          photo:'',
          tickets: [],
        });
        setTicketData({
          description: '',
          ticketStatus: false,
          price: '',
        });
      } else {
        console.error('Erreur lors de la création de l\'annonce');
      }
    } catch (error) {
      console.error('Erreur lors de la création de l\'annonce', error);
    }
  };


  return (
    <div className="mainDB">
      <div className="menuDB">
        <div className="catDash" onClick={() => show('profil')}>
          <Icon icon="system-uicons:home" color="#d62451" width="5vh" />
          Profil
        </div>
        <div className="catDash" onClick={() => show('achats')}>
          <Icon icon="system-uicons:ticket" color="#d62451" width="5vh" />
          Achats
        </div>
        <div className="catDash" onClick={() => show('ventes')}>
          <Icon icon="system-uicons:thread" color="#d62451" width="5vh" />
          Ventes
        </div>
        <div className="catDash" onClick={() => show('annonces')}>
          <Icon icon="system-uicons:newspaper" color="#d62451" width="5vh" />
          Annonces
        </div>
      </div>

      <div className="space">
        {profil && (
          <div className="onglet">
            <div className="textSec">Profil</div>
          </div>
        )}
        {achats && (
          <div className="onglet">
            <div className="textSec">Achats</div>
          </div>
        )}
        {ventes && (
          <div className="onglet">
            <div className="textSec">Ventes</div>
          </div>
        )}
        {annonces && (
          <div className="onglet">
            <div className="textSec">Annonce</div>
            <div className="addAd">
              <h1>Créer une annonce</h1>
              <form className="formAd">
                <input
                  type="text"
                  name="name"
                  value={adData.name}
                  onChange={(e) => setAdData({ ...adData, name: e.target.value })}
                  placeholder="Nom de l'annonce"
                  className="field"
                />
                      <input
                  type="text"
                  name="city"
                  value={adData.city}
                  onChange={(e) => setAdData({ ...adData, city: e.target.value })}
                  placeholder="lieu"
                  className="field"
                />

                  <input
                  type="text"
                  name="photo"
                  value={adData.photo}
                  onChange={(e) => setAdData({ ...adData, photo: e.target.value })}
                  placeholder="Mettez l'url d'une image de l'événement"
                  className="field"
                />
                        <input
                  type="text"
                  name="price"
                  value={ticketData.price}
                  onChange={(e) =>setTicketData({ ...ticketData, price: e.target.value })}
                  placeholder="prix"
                  className="field"
                />
                <input
                  type="date"
                  name="eventDate"
                  value={adData.eventDate}
                  onChange={(e) =>
                    setAdData({ ...adData, eventDate: e.target.value })
                  }
                  placeholder="Date de l'événement"
                  className="field"
                />
                <select
                  name="category"
                  value={adData.category}
                  onChange={(e) =>
                    setAdData({ ...adData, category: e.target.value })
                  }
                >
                  <option value="festival">Festival</option>
                  <option value="concert">Concert</option>
                  <option value="spectacle">Spectacle</option>
                  <option value="théâtre">Théâtre</option>
                </select>
                <input
                  type="text"
                  name="description"
                  value={ticketData.description}
                  onChange={(e) =>
                    setTicketData({ ...ticketData, description: e.target.value })
                  }
                  placeholder="Description du billet (exemple : place A21 premier rang)"
                  className="field"
                />
                <button type="button" onClick={addTicket} className="buttonAd">
                  Ajouter un ticket
                </button>
                <button type="button" onClick={submitForm} className="buttonAd">
                  Créer l'annonce
                </button>
              </form>
              <h2>Tickets ajoutés:</h2>
              <ul>
                {adData.tickets &&
                  adData.tickets.map((ticket, index) => (
                    <li key={index}>{ticket.description}</li>
                  ))}
              </ul>
            </div>
          </div>
        )}
        <img src="musician2.png" className="imgAccount" />
      </div>
    </div>
  );
}

export default Dashboard;