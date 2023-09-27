import { useState } from 'react';
import './dashboard.css';
import { Icon } from '@iconify/react';
import { useEffect } from 'react';
import './update.css';
import AdDetails from './AdDetails';
function Dashboard() {
  const [profil, setProfil] = useState(true);
  const [achats, setAchats] = useState(false);
  const [ventes, setVentes] = useState(false);
  const [annonces, setAnnonces] = useState(false);
  const [selectedAd, setSelectedAd] = useState(null);
  const [isUpdateMode, setUpdateMode] = useState(false);
  const [adDetails, setAdDetails] = useState(null);
  const [updatedAd, setUpdatedAd] = useState({
    id: '',
    name: '',
    eventDate: '',
    category: '',
    city: '',
    tickets: [],
  });
  function show(name) {
    setProfil(name === 'profil');
    setAchats(name === 'achats');
    setVentes(name === 'ventes');
    setAnnonces(name === 'annonces');
  }

  



  const handleUpdateSubmit = () => {
 
    setUpdateMode(false); // Désactiver le mode de mise à jour
  };


  const [adData, setAdData] = useState({
    name: '',
    eventDate: '',
    category: '', 
    City: '',
    tickets: [], 
  });

  const [ticketData, setTicketData] = useState({
    description: '',
    ticketStatus: false,
    price: 0.0,
  });

  const [addStatus, setAddStatus] = useState('');

  const addTicket = () => {

    setAdData({
      ...adData,
      tickets: [...adData.tickets, { ...ticketData }],
    });
    setTicketData({
      description: '',
      ticketStatus: false,
      price:'',
    });
  };

  const [userData, setUserData] = useState({
    fname: '',
    lname: '',
    mail: ''
  });

  const submitForm = async () => {
    try {
      const authToken = localStorage.getItem('authToken');
      const response = await fetch('http://localhost:8080/ad/createdAd', {
        method: 'POST',
        headers: {
       'Authorization': `Bearer ${authToken}`,
       'Content-Type': 'application/json'
        },
  
        body: JSON.stringify(adData),

      });

      if (response.ok) {
        setAdData({
          name: '',
          lname:'',
          fname:'',
          eventDate: '',
          category: '',
          city: '',
          photo:'',
          tickets: []
        });
        setTicketData({
          description: '',
          ticketStatus: false,
          price: '',
        });
        setAddStatus('Votre annonce est publiée');
      } else {
        console.error('Erreur lors de la création de l\'annonce');
      }
    } catch (error) {
      console.error('Erreur lors de la création de l\'annonce', error);
    }
  };
  const authToken = localStorage.getItem('authToken');
  const headers = {
    'Authorization': `Bearer ${authToken}`,
  
  };
  
  useEffect(() => {
    fetch('http://localhost:8080/user/data', { headers })
      .then(response => response.json())
      .then(data => {
        setUserData({
          fname: data.fname,
          lname: data.lname,
          mail: data.mail
        });
      })
      .catch(error => {
   
      });
  }, []); 

  const [salesAds, setSalesAds] = useState([]);

  useEffect(() => {

    fetch('http://localhost:8080/ad/all', { headers })
      .then((response) => response.json())
      .then((data) => {
        setSalesAds(data);
      })
      .catch((error) => {
        console.error('Erreur lors de la récupération des annonces de vente:', error);
      });
  }, []);

  const handleDeleteAd = (adId) => {
    fetch(`http://localhost:8080/ad/${adId}`, {
      method: 'DELETE',
      headers,
    })
      .then(response => {
        if (response.ok) {
     
          const updatedAds = salesAds.filter(ad => ad.id !== adId);
          setSalesAds(updatedAds);
        } else {
          console.error('Erreur lors de la suppression de l\'annonce');
        }
      })
      .catch(error => {
        console.error('Erreur lors de la suppression de l\'annonce:', error);
      });
  }
  const openUpdateModal = (ad) => {
    setSelectedAd(ad);
    setUpdateMode(true);
  };

  
  const closeUpdateModal = () => {
    setSelectedAd(null);
    setUpdateMode(false);
  };

  

  const [updatedAdData, setUpdatedAdData] = useState({
    id: '',
    name: '',
    eventDate: '',
    category: '',
    city: '',
    tickets: [],
  });


  const [selectedAdDetails, setSelectedAdDetails] = useState(null);
 
  const handleSubmitUpdate = async () => {
    try {
      const authToken = localStorage.getItem('authToken');
      const response = await fetch(`http://localhost:8080/ad/${selectedAd.id}`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${authToken}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedAd)
      });

      if (response.ok) {
     
        setUpdateMode(false);
      } else {
        console.error('Erreur lors de la mise à jour de l\'annonce');
      }
    } catch (error) {
      console.error('Erreur lors de la mise à jour de l\'annonce', error);
    }
  };
  const handleAdClick = (ad) => {
    setSelectedAd(ad);
    setUpdateMode(false); 
  };

  const handleUpdateAd = () => {
    setUpdateMode(true); 

  
    if (selectedAd) {
      setUpdatedAd({
        id: selectedAd.id,
        name: selectedAd.name,
        eventDate: selectedAd.eventDate,
        category: selectedAd.category,
        city: selectedAd.city,
        tickets: selectedAd.tickets,
        
      });
    }
  };

  const showAdDetails = (ad) => {
    setSelectedAdDetails(ad);
  };
  
  const closeAdDetails = () => {
    setSelectedAdDetails(null);
    setUpdateMode(false);
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
            <div className="dataProfil">{userData.lname}</div>
            <div className="dataProfil">{userData.fname}</div>
            <div className="dataProfil">{userData.mail}</div>
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
    <div className="cardUpdate">
      {salesAds.map((ad) => (
        <div className="Vente" key={ad.id}>
          <div className="pictureCard">
            <img src={ad.photo} alt={ad.name} className="imgCard" />
          </div>
          <div className="textCard">
            {ad.name}
            <p className="infoCard">Vendeur : {ad.fname}</p>
            <div className="button-container">
              <button onClick={() => handleDeleteAd(ad.id)} className="btn btn-danger supp">
                Supprimer
              </button>
              <button onClick={() => showAdDetails(ad)} className="btn btn-primary supp">
                Détails
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
)}

{selectedAdDetails && (
  <div className="modal">
    <div className="modal-content">
      <span className="close" onClick={closeAdDetails}>&times;</span>
     
      {isUpdateMode ? (
        <div className="Model">
          <form className="formAnn">
            <input className="inputAnn"
              type="text"
              value={selectedAdDetails?.name || ''}
              onChange={(e) => setSelectedAdDetails({ ...selectedAdDetails, name: e.target.value })}
            />
              <input  className="inputAnn"
              type="text"
              value={selectedAdDetails?.city || ''}
              onChange={(e) => setSelectedAdDetails({ ...selectedAdDetails, city: e.target.value })}
            />
                    <input  className="inputAnn"
              type="text"
              value={selectedAdDetails?.category || ''}
              onChange={(e) => setSelectedAdDetails({ ...selectedAdDetails, category: e.target.value })}
            />
                  <input  className="inputAnn"
              type="text"
              value={selectedAdDetails?.photo || ''}
              onChange={(e) => setSelectedAdDetails({ ...selectedAdDetails, photo: e.target.value })}
            />
                  <input  className="inputAnn"
              type="date"
              value={selectedAdDetails?.eventDate || ''}
              onChange={(e) => setSelectedAdDetails({ ...selectedAdDetails, eventDate: e.target.value })}
            />
                
                  <button  className="submitAnn" onClick={handleSubmitUpdate}>Enregistrer</button>
                  </form>
        </div>
      ) : (
        <div>
          <AdDetails ad={selectedAdDetails} />
          <button   className="submitAnn" onClick={handleUpdateAd} >
            Modifier
          </button>
        </div>
      )}
      <button  className="submitAnn1" onClick={closeAdDetails} >
        Retour
      </button>
    </div>
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
              {addStatus && <p className='done'>{addStatus}</p>}
            </div>
          </div>
        )}
        <img src="musician2.png" className="imgAccount" />
      
      </div>
    </div>
  );
}

export default Dashboard;
