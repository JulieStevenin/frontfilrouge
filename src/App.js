import './app.css'
import Topbar from './components/topbar/Topbar';
import Footer from './components/footer/Footer';
import {Routes, Route} from 'react-router-dom';
import Inscription from './view/register/register';
import Home from './view/home/Home';

function App() {

  //bouvcle sur le nombre de annonce et pour chaque item, mets le dans la <card>


  return (
   <div className="main">
  <Topbar/>
    <Routes>
          <Route path="/" >
            <Route index element={<Home/>} />
            <Route path="/login" element={<div />} />
            <Route path="/Inscription" element={<Inscription />} />
            <Route path="/*" element={<div />} />
          </Route>
        </Routes>
<Footer/>

   </div>
  );
}

export default App;
