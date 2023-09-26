import { useEffect, useState } from 'react';
import './card.css'

function Card() {
    const [ads, setAds] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/ad/all', {
            method: 'GET',
            headers: {
                'Accept': 'application/json', 
            },
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(`Erreur HTTP! Statut: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            setAds(data);
        })
        .catch(error => {
            console.error('Erreur lors de la récupération des données:', error);
        });
    }, []);
    

    return (
        <div className="bg">
            <div className="mainCard">
                <h1 className='TitreAPI'>Les billets en vente</h1>

                <div className='cardAll'>
                    {ads.map((ad) => (
                        <div className="card" key={ad.id}>
                            <div className='pictureCard'>
                                <img src={ad.photo} alt={ad.name} className='imgCard' />
                            </div>
                            <div className="textCard">
                            {ad.name}
                                <p className='infoCard'>Vendeur : </p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="buttonCard">En voir plus</div>
            </div>
        </div>
    );
}

export default Card;
