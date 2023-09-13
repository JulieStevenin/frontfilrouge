import { useEffect, useState } from 'react';
import './card.css'


function Card (){

    const[users,setUsers] = useState([]);    
    
    useEffect(()=>{ 
        
    fetch('https://randomuser.me/api/?results=5') 
    .then(response => response.json()) 
    .then(json => json.results)
    .then(users => {
        setUsers(users);
     });

},[]);



      
return(
<>
<h1 className='TitreAPI'>Test API TUTO USER</h1>


<div className='cardAll'>
{users.map((user)=>(<div className="card"><img src={user.picture.medium}  className='imgCard'></img><p className='infoCard'>Billet vendu par {user.name.first}:</p> Artiste : {user.gender}</div>))}
</div>

</>
);
}

export default Card;