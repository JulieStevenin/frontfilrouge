import './topbar.css'


import { Link, useNavigate } from 'react-router-dom';

function TopbarCo() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Supprimer le authToken du localStorage
    localStorage.removeItem("authToken");
    
    // Rediriger vers la page d'accueil
    navigate("/");
  };

  return (
    <div className="header">
      <Link to="/">
        <img src="logo.jpg" className='logo'/>
      </Link>
      <input className ="searchHeader" placeholder="Recherchez par catégorie, artiste ou lieu" type="search"/>
      <div className="buttonUser">
      <Link to="/Account"> <p className="inscription">Compte</p></Link>
        <p className="deconnexion" onClick={handleLogout}>Déconnexion</p>
      </div>
    </div>
  );
}

export default TopbarCo;


