import './hero.css'

function Hero (){



    return(
     
       <div className="mainHero">
        <div className="hero">
        <div className="bubbleHero">N°1 de la revente culturelle</div>
        <h1 className='promesse'>Achetez, revendez<br/> vos billets</h1>
        <p className='textHero'>Partagez la culture au prix juste</p>
        <div className="allButtonHero">
        <div className='buttonHero'> Achetez</div>
        <div className='buttonHero'> Revendez</div>
        </div>
        </div>
        <div className="imgHero"><img className='bghero' src="bghero.png"></img>  
        </div>
        </div>
   
    );

}

export default Hero;