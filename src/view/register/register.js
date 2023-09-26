
import FormRegister from '../../components/formRegister/FormRegister';
import './register.css'

function Register(){


    return(
<>
<div className="mainRegister">
    <div className="textRegister">
    <h2 className="titleRegister">Partagez toute la culture </h2>
    <p className="subRegister">Inscrivez-vous et accédez aux meilleurs événements grâce à notre communauté d'acheteurs et de revendeurs.</p>
    </div>
<FormRegister></FormRegister>
</div>
</>
    );

}

export default Register;