import './sectionApp.css'
import {Link} from 'react-router-dom' 

function SectionApp(){


    return(
        <div className="mainSection">
           <div className="blocSection">
            <h1 className='titleSection'>N°1 du partage culturel</h1>
            <p className='textSection'>Nous connectons les passionnés de la culture avec les événements qui les inspirent, 
            tout en leur permettant de revendre leurs billets de manière sécurisée et transparente. </p>
            <div className="commuSection">
         <img className="imgMan"src="youngman.png"></img>
         <div>
         <h2 className='textSection2'>Communauté unique</h2>
         <p className='textSection2'>Grâce à notre communauté, partagez votre amour de la culture tout en économisant sur vos billets.</p>
        
        <div className="avis">On nous aime ❤️<div className="logAvis"><img className='imgAvis' src="trustpilot.png"/><img className='imgAvis' src="google.jpg"/></div></div>
        <Link to="/Inscription"> <div className="button">Inscrivez-vous</div> </Link>
        
            </div>
            </div>
           </div>
        </div>


    );


}

export default SectionApp;