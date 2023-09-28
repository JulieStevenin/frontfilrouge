import "./hero.css";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="mainHero">
      <div className="hero">
        <div className="bubbleHero">N°1 du partage culturel</div>
        <h1 className="promesse">
          Achetez, revendez
          <br /> vos billets
        </h1>
        <p className="textHero">Partagez la culture au prix juste</p>
        <div className="allButtonHero">
          <Link to="/Register">
            {" "}
            <div className="buttonHero"> Achetez</div>
          </Link>
          <Link to="/Register">
            {" "}
            <div className="buttonHero"> Revendez</div>
          </Link>
        </div>
      </div>
      <div className="imgHero">
        <img className="bghero" src="bghero.png"></img>
      </div>
    </div>
  );
}

export default Hero;
