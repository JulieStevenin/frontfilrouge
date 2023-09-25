import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './addAd.css';
import Pagination from '../../components/Pagination/Pagination';
import { Icon } from '@iconify/react';
const annoncesPerPage = 6;

const ListeDesAnnonces = () => {
  const [annonces, setAnnonces] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true); 
  const indexOfLastAnnonce = currentPage * annoncesPerPage;
  const indexOfFirstAnnonce = indexOfLastAnnonce - annoncesPerPage;
  const currentAnnonces = annonces.slice(indexOfFirstAnnonce, indexOfLastAnnonce);

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const locale = 'fr-FR';
    return new Date(dateString).toLocaleDateString(locale, options);
  };
  useEffect(() => {
    axios.get('http://localhost:8080/ad/all')
      .then((response) => {
        const annoncesWithFormattedDate = response.data.map((annonce) => ({
          ...annonce,
          eventDate: formatDate(annonce.eventDate),
        }));
        setAnnonces(annoncesWithFormattedDate);
      })
      .catch((error) => {
        console.error('Erreur lors de la récupération des annonces :', error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="bg">
      <div className="mainCard">
        <h1 className='TitreAPI'>Les annonces en ligne</h1>
        <div className='cardAll'>
          {currentAnnonces.map((annonce) => (
            
            <div key={annonce.id} className="card" >
     
  
              <div className="textCard">Nom: {annonce.name}
              <div className="icons">
              <Icon icon="system-uicons:calendar" className="event-icon" />
                <p className='detailsCard'>Date de l'événement: {annonce.eventDate}</p></div>
                <div className="icons">
                <Icon icon="system-uicons:location" className="location-icon" />
                <p className='detailsCard'>Lieu de l'événement: {annonce.city}</p>
                </div>
                <div className="icons">
                <Icon icon="system-uicons:tag"  className="tag-icon" />
                <p className='detailsCard'>Category de l'événement: {annonce.category}</p>
                      
              </div>
                <div className="buttonCard">
                  <Link to={`/ad/${annonce.id}`}>En voir plus</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        {!isLoading && ( 
          <Pagination
            totalPages={Math.ceil(annonces.length / annoncesPerPage)}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        )}
      </div>
    </div>
  );
};

export default ListeDesAnnonces;
