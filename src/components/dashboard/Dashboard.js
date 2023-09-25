import { useState } from 'react';
import './dashboard.css'
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
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
{annonces && (
          <div className="onglet">
            {/*<div className="textSec">Annonces</div>*/}
            <Link to="/list">
              <button className="textSec">Annonces</button>
            </Link>
            <Link to="/annonce">
              <button className="textSec">Ajouter une Annonce</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Dashboard;






