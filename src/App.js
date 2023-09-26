
import './App.css'
import Topbar from './components/topbar/Topbar';
import Footer from './components/footer/Footer';
import {Routes, Route} from 'react-router-dom';
import TicketPage from './view/ticketpage/TicketPage';
import OrderConfirmation from './view/order/OrderConfirmation';
import OrderPayment from './view/orderpayment/OrderPayment';
import Register from './view/register/register';
import Home from './view/home/Home';
import Account from './view/account/Account';
import Login from './view/login/Login';
import AddList from './view/ad/AddList';
import DetailsAnnonce from './view/ad/DetailsAnnonce';
import Ad from './view/ad/ad';


function App() {

  //bouvcle sur le nombre de annonce et pour chaque item, mets le dans la <card>


  return (
    <div className="app-wrapper">
  <Topbar/>
    <Routes>
          <Route path="/" >
            <Route index element={<Home/>} />
            <Route path="/Login" element={<Login/>} />
            <Route path="/Register" element={<Register />} />
            <Route path="/Account" element={<Account />} />
            <Route path="/TicketPage" element={<TicketPage />} />
            <Route path="/OrderConfirmation" element={<OrderConfirmation/>} />
            <Route path="/OrderConfirmation/:id" element={<OrderConfirmation/>} />
            <Route path="/OrderPayment" element={<OrderPayment/>} />
            <Route path="/list" element={<AddList />} />
            <Route path="/annonce" element={<Ad />} />
            <Route path="/ad/:id" element={<DetailsAnnonce />} />
          
        
          </Route>
        </Routes>
<Footer/>

   </div>
  );
}

export default App;
