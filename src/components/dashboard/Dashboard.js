import { useState } from 'react';
import './dashboard.css'
import { Icon } from '@iconify/react';
import axios from 'axios';


function Dashboard(){

    const[profil, setProfil] =useState(true);
    const[achats, setAchats] =useState(false);
    const[ventes, setVentes] =useState(false);
    const[annonces, setAnnonces] =useState(false);


    function show(name) {
        setProfil(name === 'profil');
        setAchats(name === 'achats');
        setVentes(name === 'ventes');
        setAnnonces(name === 'annonces');
      }
    

      const [adData, setAdData] = useState({
        name: '',
        document: '',
        // Ajoutez d'autres champs de l'annonce ici
      });
    
      const [ticketData, setTicketData] = useState({
        description: '',
        ticketStatus: false,
        price: 0.0,
        // Ajoutez d'autres champs du ticket ici
      });
    
      const addTicket = () => {
        // Ajouter le ticket aux données de l'annonce
        setAdData({
          ...adData,
          tickets: [...(adData.tickets || []), { ...ticketData }],
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
          // Envoi de la requête POST au backend
          await axios.post('localhost:8080/Api/createAd', adData);
          // Réinitialiser les données du formulaire après la soumission réussie
          setAdData({
            name: '',
            document: '',
            // Réinitialisez les autres champs de l'annonce ici
          });
          setTicketData({
            description: '',
            ticketStatus: false,
            price: 0.0,
            // Réinitialisez les champs du ticket ici
          });
        } catch (error) {
          console.error('Erreur lors de la création de l\'annonce', error);
        }
      };
    

    return(

<div className="mainDB">
<div className="menuDB">
<div className="catDash" onClick={() => show('profil')}><Icon icon="system-uicons:home" color="#d62451" width="5vh"/>Profil</div>
<div className="catDash" onClick={() => show('achats')}><Icon icon="system-uicons:ticket" color="#d62451" width="5vh"/>Achats</div>
<div className="catDash" onClick={() => show('ventes')}><Icon icon="system-uicons:thread" color="#d62451" width="5vh"/>Ventes</div>
<div className="catDash" onClick={() => show('annonces')}><Icon icon="system-uicons:newspaper" color="#d62451" width="5vh"/>Annonces</div>
</div>

<div className="space">
{profil && <div className='onglet'>
<div className="textSec">Profil</div>
</div>}
{achats && <div className='onglet'>
<div className="textSec">Achats</div>
</div>}
{ventes && <div className='onglet'>
<div className="textSec">Ventes</div>
</div>}
{annonces && <div className='onglet'>
<div className="textSec">
    
    
<h1>Créer une annonce</h1>
      <form>
        <div>
          <label>Nom de l'annonce:</label>
          <input
            type="text"
            name="name"
            value={adData.name}
            onChange={(e) => setAdData({ ...adData, name: e.target.value })}
          />
        </div>
        {/* Ajoutez d'autres champs de l'annonce ici */}
        <div>
          <label>Description du ticket:</label>
          <input
            type="text"
            name="description"
            value={ticketData.description}
            onChange={(e) =>
              setTicketData({ ...ticketData, description: e.target.value })
            }
          />
        </div>
        {/* Ajoutez d'autres champs du ticket ici */}
        <button type="button" onClick={addTicket}>
          Ajouter un ticket
        </button>
        <button type="button" onClick={submitForm}>
          Créer l'annonce
        </button>
      </form>
      <div>
        <h2>Tickets ajoutés:</h2>
        <ul>
          {adData.tickets &&
            adData.tickets.map((ticket, index) => (
              <li key={index}>{ticket.description}</li>
            ))}
        </ul>
      </div>
    
    
    </div>
</div>}
</div>
</div>

    );
}

export default Dashboard