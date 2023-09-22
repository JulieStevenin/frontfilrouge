<<<<<<< HEAD
import './topbar.css'
import {Link} from 'react-router-dom' 

function Topbar(){
return(

<div className="header">
<Link to="/" >  <div className="logo">KORO</div></Link>
    <input className ="searchHeader" placeholder="Recherchez par date ou événement" type="search"/>
    <div className="buttonUser">
    <Link to="/Inscription" activeClassName="active"> <p className="inscription">Inscription</p></Link>
    <p className="connexion">connexion</p>
    </div>
</div>

);
}

=======
import './topbar.css'
import {Link} from 'react-router-dom' 

function Topbar(){
return(

<div className="header">
<Link to="/"> <img src="logo.jpg" className='logo'/></Link>
    <input className ="searchHeader" placeholder="Recherchez par catégorie, artiste ou lieu" type="search"/>
    <div className="buttonUser">
    <Link to="/Inscription"> <p className="inscription">Inscription</p></Link>
    <p className="connexion">connexion</p>
    </div>
</div>

);
}

>>>>>>> 6da814ecc8b7afc6e29e5a076536e2fad55d840e
export default Topbar;