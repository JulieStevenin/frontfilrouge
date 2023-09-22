import { useState } from 'react';
import './forms.css'

function Forms(){
        
     const [formData, setFormData] = useState({
          fname: '',
          lname: '',
          mail: '',
          password: '',
          photo:'',
        });
      
        const handleInputChange = (e) => {
          const { name, value } = e.target;
          setFormData({
            ...formData,
            [name]: value,
          });
        };
      
        const handleSubmit = (e) => {
       
          const jsonData = JSON.stringify(formData);
      

          fetch('http://localhost:8080/api/createUser', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: jsonData,
          })
            .then((response) => {
              if (!response.ok) {
                throw new Error('Erreur lors de la requête');
              }
              return response.status;
            })
            .then((data) => {
          
              console.log('Réponse du serveur :', data);
            })
            .catch((error) => {
              console.error('Erreur :', error);
            });
        };


    return(

        
            <form className="formRegister" onSubmit={handleSubmit}>
                <input type="text" className="inputRegister" name="fname" placeholder="Prénom" 
                value={formData.fname} onChange={handleInputChange}></input>

                <input type="text" className="inputRegister" name="lname" placeholder="Nom"
                value={formData.lname} onChange={handleInputChange}></input>

                <input type="text" className="inputRegister" name="mail" placeholder="E-mail"
                value={formData.mail} onChange={handleInputChange}></input>

                <input type="password" className="inputRegister" name="password" placeholder="Password"
                value={formData.password} onChange={handleInputChange}></input>

                <label className="custom-file-upload">
                <input type="file" className="fRegister" name="photo" value={formData.photo} onChange={handleInputChange}/>Photo</label>
    
                <input type="submit" className="submitRegister" ></input>
            </form>

    );


}

export default Forms;
