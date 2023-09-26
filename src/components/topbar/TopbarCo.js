import './topbar.css'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function TopbarCo() {
  const navigate = useNavigate();

  const handleLogout = () => {

    localStorage.removeItem("authToken");
    
    navigate("/");
  };

  const [eventName, setEventName] = useState('');
  const [eventDate, setEventDate] = useState('');

  const handleSearch = async () => {
      try {
          const response = await fetch(`http://localhost:8080/ad/searchAd?name=${eventName}&date=${eventDate}`);
          
          if (!response.ok) {
              throw new Error('Réponse du réseau non ok.');
          }
  
          const data = await response.json();
  
          console.log('Résultat de la recherche:', data);
  
      } catch (error) {
          console.error('Il y a eu un problème avec l\'opération fetch:', error.message);
      }
  }

  return (
<div className="header">
            <Link to="/"> <img src="logo.jpg" className='logo' /></Link>
            <div className='searchContainer'>
                <div>
            <input 
    value={eventName}
    onChange={(e) => setEventName(e.target.value)}
    className="searchHeaderName" 
    placeholder="Recherchez par nom d'évènement" 
    type="text" 
/>
</div>
<div className='betweenSearchBars'>ou</div>
<div>
<input 
    value={eventDate}
    onChange={(e) => setEventDate(e.target.value)}
    className="searchHeaderDate" 
    placeholder="Date (AAAA-MM-JJ)" 
    type="text" 
/>
</div>
            <button onClick={handleSearch} className="searchButton">Rechercher</button>
            </div>
            <div className="buttonUser">
                <Link to="/Account"> <p className="inscription">Compte</p></Link>
                <Link to="/" onClick={handleLogout}> <p className="deconnexion">deconnexion</p></Link>
            </div>
        </div>
  );
}

export default TopbarCo;
