import './topbar.css'
import {Link} from 'react-router-dom' 

function Topbar(){
return(

<div className="header">
<Link to="/" activeClassName="active">  <div className="logo">KORO</div></Link>
    <input className ="searchHeader" placeholder="Recherchez par date ou événement" type="search"/>
    <div className="buttonUser">
    <Link to="/Inscription" activeClassName="active"> <p className="inscription">Inscription</p></Link>
    <p className="connexion">connexion</p>
    </div>
</div>

);
}

export default Topbar;