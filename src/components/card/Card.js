import { useEffect, useState } from 'react';
import './card.css'


function Card (){

    const[users,setUsers] = useState([]);    
    
    useEffect(()=>{ 
        
    fetch('https://randomuser.me/api/?results=6') 
    .then(response => response.json()) 
    .then(json => json.results)
    .then(users => {
        setUsers(users);
     });

},[]);



      
return(
<>
<div className="mainCard">
<h1 className='TitreAPI'>Les billets en vente</h1>


<div className='cardAll'>
{users.map((user)=>(<div className="card"><div className='pictureCard'><img src={user.picture.medium}  className='imgCard'></img></div> <div className="textCard"> Artiste : {user.gender}<p className='infoCard'> Vendeur : {user.name.first}</p></div></div>))}
</div>
<div className="buttonCard">En voir plus</div>
</div>
</>
);
}

export default Card;