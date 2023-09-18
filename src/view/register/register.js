
import Forms from "../../components/formRegister/Forms";
import './register.css'

function Inscription(){


    return(
<>
<div className="mainRegister">
    <div className="textRegister">
    <h2 className="titleRegister">Partagez toute la culture </h2>
    <p className="subRegister">Inscrivez-vous et accédez aux meilleurs événements grâce à notre communauté d'acheteurs et de revendeurs.</p>
    </div>
<Forms></Forms>
</div>
</>
    );

}

export default Inscription;