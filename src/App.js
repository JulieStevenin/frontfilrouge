<<<<<<< HEAD
import './App.css'
import Topbar from './components/topbar/Topbar';
import Footer from './components/footer/Footer';
import {Routes, Route} from 'react-router-dom';
import Inscription from './view/register/register';
import TicketPage from './view/ticketpage/TicketPage';
import OrderConfirmation from './view/order/OrderConfirmation';
import OrderPayment from './view/orderpayment/OrderPayment';
import Home from './view/home/Home';

function App() {

  //bouvcle sur le nombre de annonce et pour chaque item, mets le dans la <card>


  return (
  <>
  <Topbar/>
    <Routes>
          <Route path="/" >
            <Route index element={<Home/>} />
            <Route path="/login" element={<div />} />
            <Route path="/Inscription" element={<Inscription />} />
            <Route path="/*" element={<div />} />
            <Route path="/TicketPage" element={<TicketPage />} />
            <Route path="/OrderConfirmation" element={<OrderConfirmation/>} />
            <Route path="/OrderConfirmation/:id" element={<OrderConfirmation/>} />
            <Route path="/OrderPayment" element={<OrderPayment/>} />
          </Route>
        </Routes>
<Footer/>

   </>
  );
}

export default App;
=======
import './App.css'
import Topbar from './components/topbar/Topbar';
import Footer from './components/footer/Footer';
import {Routes, Route} from 'react-router-dom';
import Inscription from './view/register/register';
import Home from './view/home/Home';
import Account from './view/account/Account';
import Login from './view/login/Login';

function App() {

  //bouvcle sur le nombre de annonce et pour chaque item, mets le dans la <card>


  return (

  <div className="app-wrapper">
  <Topbar/>
    <Routes>
          <Route path="/" >
            <Route index element={<Home/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/Inscription" element={<Inscription />} />
            <Route path="/Account" element={<Account />} />
            

          </Route>
        </Routes>
<Footer className="footer"/>
</div>
   
  );
}

export default App;
>>>>>>> 6da814ecc8b7afc6e29e5a076536e2fad55d840e
