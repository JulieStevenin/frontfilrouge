
import './ticketpage.css'
import { Link } from 'react-router-dom';



function TicketPage({ticket}){


    return(
<>
<div className = "main">
<div className="Ticket">Ticket
<Link to={`/OrderConfirmation/`}>
        <button>Commander</button>
</Link>
    </div>
    </div>
</>
    );

}

export default TicketPage;
