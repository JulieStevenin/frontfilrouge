import './forms.css'

function Forms(){







    return(

        
            <form className="formRegister">
                <input type="text" className="inputRegister" name="fname" placeholder="Prénom"></input>
                <input type="text" className="inputRegister" name="lname" placeholder="Nom"></input>
                <input type="text" className="inputRegister" name="mail" placeholder="E-mail"></input>
                <input type="password" className="inputRegister" name="password" placeholder="Password"></input>
                <label className="custom-file-upload">
                <input type="file" className="fRegister" name="photo" />Parcourir photo profil</label>
                
                <input type="submit" className="submitRegister" ></input>
            </form>

    );


}

export default Forms;
