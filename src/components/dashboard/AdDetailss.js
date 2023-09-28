
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; 
import './update.css';
function AdDetails() {
  const { adId } = useParams(); 
  const [ad, setAd] = useState(null);

  useEffect(() => {

    fetch(`http://localhost:8080/ad/${adId}`)
      .then((response) => response.json())
      .then((data) => {
        setAd(data);
      })
      .catch((error) => {
        console.error('Erreur lors de la récupération des détails de l\'annonce:', error);
      });
  }, [adId]);

  if (!ad) {
  
    return <div>Chargement des détails de l'annonce...</div>;
  }

  return (
    <div className="mainDetails">
    <div className="textDetails">
    <h2 className="titleDetails">Partagez toute la culture </h2>
    <div className="formDetails">
      <h2>Détails de l'annonce</h2>
      <p className="inputDetails">Nom de l'annonce : {ad.name}</p>
      <p className="inputDetails">Lieu : {ad.city}</p>
      <p className="inputDetails">Catégorie : {ad.category}</p>
      <p className="inputDetails">Ville : {ad.city}</p>
      <p className="inputDetails">photo : {ad.photo}</p>
    </div>
    </div>
    </div>
  );
}

export default AdDetails;
