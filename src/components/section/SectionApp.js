import './sectionApp.css'


function SectionApp(){


    return(
        <div className="mainSection">
           <div className="blocSection">
            <h1 className='titleSection'>N°1 de la revente culturelle</h1>
            <p className='textSection'>Nous connectons les passionnés de la culture avec les événements qui les inspirent, 
            tout en leur permettant de revendre leurs billets de manière sécurisée et transparente. </p>
            <div className="commuSection">
         <img className="imgMan"src="youngman.png"></img>
         <div>
         <h2 className='textSection2'>Une communauté de passionnés</h2>
         <p className='textSection2'>Grâce à notre communauté engagée de vendeurs et d'acheteurs, 
         vous pouvez maintenant partager votre amour pour la culture tout en économisant sur vos billets.</p>
        
        <p className="avis">Nous sommes la meilleure communautée<img className='imgAvis' src="trustpilot.png"></img></p>
        <div className="button">Inscrivez-vous</div> 
        
            </div>
            </div>
           </div>
        </div>


    );


}

export default SectionApp;