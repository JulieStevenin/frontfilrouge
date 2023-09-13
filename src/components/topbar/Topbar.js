import './topbar.css'
import {Link} from 'react-router-dom' 

function Topbar(){
return(

<div className="header">
    <div className="logo"> Projet Fil Rouge</div>
    <input className ="searchHeader" placeholder="Recherchez par date ou événement" type="search"/>
    <div className="buttonUser">
    <p className="inscription"><Link to="/Inscription" activeClassName="active">Inscription</Link></p>
    <p className="connexion">connexion</p>
    </div>
</div>

);
}

export default Topbar;