import './footer.css'



function Footer(){

    return(

        <div className="footer">
            <div>
            <h1 className='hFooter'>Merci d'avoir consulté notre travail</h1>
            <p className="ftext2">Il a été réalisé avec ❤️</p>
            </div>
        <div className="mainFooter">
          <h2 className="btext">Les technologies utilisées</h2>
        <p className="ftext">React, Spring Boot et CSS3.</p>
         </div>

         <div className="mainFooter">
            <h2 className="btext">Les développeurs</h2>
        <p className="ftext">Safa Elouaer, Julie Stévenin et Arnaud <br/>Guiovanna.</p>
         </div>
        </div>


    );


}

export default Footer;
