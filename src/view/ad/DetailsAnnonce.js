import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import './DetailsAnnonce.css';
import { Icon } from '@iconify/react';
const DetailsAnnonce = () => {
  const { id } = useParams();
  const [annonce, setAnnonce] = useState({});

  // Fonction pour formater la date en français
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const locale = 'fr-FR'; // Locale française
    return new Date(dateString).toLocaleDateString(locale, options);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/ad/${id}`);
       
        const formattedDate = formatDate(response.data.eventDate);

        setAnnonce({ ...response.data, eventDate: formattedDate });
      } catch (error) {
        console.error('Erreur lors de la récupération des détails de l\'annonce :', error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div className="mainCard">
      <h1 className='TitreAPI'>Détails de l'annonce</h1>
      <div className='cardAll'>
        {annonce && Object.keys(annonce).length > 0 ? (
          <div className="card">
            <div className="textCard">
              <p className='infoCard'>{annonce.name}</p>
              <div className="icons">
              <Icon icon="system-uicons:calendar" className="event-icon" />
              <p className='infoCard'>Date de l'événement : {annonce.eventDate}</p></div>
              <div className="icons">
                <Icon icon="system-uicons:tag"  className="category-icon" />
              <p className='infoCard'>Category: {annonce.category}</p></div>
              <div className="icons">
                <Icon icon="system-uicons:location" className="location-icon" />
              <p className='infoCard'>City: {annonce.city}</p></div>
              
              <button className="submitRegister" >Commander</button>
              <Link to="/list" className="submitRegister" >Retour à la liste</Link>
            </div>
          </div>
        ) : (
          <div className="loading-message">Chargement des détails de l'annonce...</div>
        )}
      </div>
    </div>
  );
};

export default DetailsAnnonce;
