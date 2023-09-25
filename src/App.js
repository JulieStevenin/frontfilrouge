import './App.css'
import Topbar from './components/topbar/Topbar';
import Footer from './components/footer/Footer';
import {Routes, Route} from 'react-router-dom';
import Inscription from './view/register/register';
import Home from './view/home/Home';
import Account from './view/account/Account';
import Login from './view/login/Login';
import AddList from './view/ad/AddList'
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
            <Route path="/login" element={<Login/>} />
            <Route path="/Inscription" element={<Inscription />} />
            <Route path="/Account" element={<Account />} />
            <Route path="/list" element={<AddList />} />
            <Route path="/annonce" element={<Ad />} />
            <Route path="/ad/:id" element={<DetailsAnnonce />} />
            

          </Route>
        </Routes>
<Footer className="footer"/>
</div>
   
  );
}

export default App;
