import './topbar.css'
import {Link} from 'react-router-dom' 

function Topbar(){
return(

<div className="header">
<Link to="/"> <img src="logo.jpg" className='logo'/></Link>
    <input className ="searchHeader" placeholder="Recherchez par catégorie, artiste ou lieu" type="search"/>
    <div className="buttonUser">
    <Link to="/Register"> <p className="inscription">Inscription</p></Link>
    <Link to="/Login"> <p className="connexion">connexion</p></Link>
    </div>
</div>

);
}

export default Topbar;