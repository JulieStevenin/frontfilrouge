import "./App.css";
import Topbar from "./components/topbar/Topbar";
import TopbarCo from "./components/topbar/TopbarCo";
import { Routes, Route } from "react-router-dom";
import Register from "./view/register/register";
import Home from "./view/home/Home";
import Account from "./view/account/Account";
import Login from "./view/login/Login";
import { useEffect, useState } from "react";
import Footer from "./components/footer/Footer";
import UpdateAd from "./components/dashboard/UpdateAd";

import AdDetails from "./view/Ad/AdDetails";
import Final from "./view/paiement/Final";
import AdSells from "./components/dashboard/AdSells.js";

function App() {
  const [token, setToken] = useState(localStorage.getItem("authToken"));
  useEffect(() => {
    const checkAuthToken = () => {
      const authToken = localStorage.getItem("authToken");
      setToken(authToken);
    };

    checkAuthToken();

    const intervalId = setInterval(checkAuthToken, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const logout = () => {
    localStorage.removeItem("authToken");
    setToken(null);
  };
  return (
    <div className="app-wrapper">
      {token ? <TopbarCo /> : <Topbar />}
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Account" element={<Account />} />
          <Route path="/update/:id" element={<UpdateAd />} />
          <Route path="/ad-details/:adId" element={<AdSells />} />
          <Route path="/ad/:adId" element={<AdDetails />} />
          <Route path="/commande/:id" element={<Final />} />
        </Route>
      </Routes>

      <Footer className="footer" />
    </div>
  );
}

export default App;
