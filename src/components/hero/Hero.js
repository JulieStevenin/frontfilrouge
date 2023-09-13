import './hero.css'

function Hero (){



    return(
     
       <div className="container">
        <img className="bgHero" src="bgimage.jpg"></img>
        <div className="hero">
        <div className='leftHero'>
        <h1 className='promesse'>Achetez, revendez vos billets </h1>
        <p className='textHero'>Bienvenue sur Projet File rouge, partagez des moments uniques au meilleur prix.</p>
        <div className='buttonHero'> Inscription</div>
        </div>
        <div className='rightHero'>
        <img className="ticket" src="Ticket.png"></img>
        </div>
        </div>
        </div>
   
    );

}

export default Hero;