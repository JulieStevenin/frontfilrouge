import "./topbar.css";
import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

function Topbar() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showSearchResults, setShowSearchResults] = useState(false);
  const searchRef = useRef(null);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/");
  };

  const handleSearch = async () => {
    try {
      const response = await fetch(
        `http://localhost:8080/ad/search?name=${name}&date=${eventDate}`
      );
      if (!response.ok) {
        throw new Error("Réponse du réseau non ok.");
      }
      const data = await response.json();
      setSearchResults(data);
      setShowSearchResults(true);
    } catch (error) {
      console.error(
        "Il y a eu un problème avec l'opération fetch:",
        error.message
      );
    }
  };

  const handleClickOutside = (e) => {
    if (searchRef.current && !searchRef.current.contains(e.target)) {
      setShowSearchResults(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div>
      <div className="header">
        <Link to="/">
          {" "}
          <img src="logo.jpg" className="logo" />
        </Link>
        <div className="searchContainer">
          <div>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="searchHeaderName"
              placeholder="Recherchez par nom d'évènement"
              type="text"
            />
          </div>
          <div className="betweenSearchBars">ou</div>
          <div>
            <input
              value={eventDate}
              onChange={(e) => setEventDate(e.target.value)}
              className="searchHeaderDate"
              placeholder="Date (AAAA-MM-JJ)"
              type="date"
            />
          </div>
          <button onClick={handleSearch} className="searchButton">
            Rechercher
          </button>
        </div>
        <div className="buttonUser">
          <Link to="/Register">
            {" "}
            <p className="inscription">Inscription</p>
          </Link>
          <Link to="/Login">
            {" "}
            <p className="connexion">Connexion</p>
          </Link>
        </div>
      </div>

      {showSearchResults && (
        <div className="mainSearch" ref={searchRef}>
          <div className="searchResults">
            {searchResults.length > 0 ? (
              searchResults.map((ad, index) => (
                <Link to={`/ad/${ad.id}`} key={ad.id} className="cardSearch">
                  <div key={index} className="adItem">
                    <h4 className="ongletSearch">{ad.name}</h4>
                    <p>{ad.date}</p>
                    <div className="ongletSearch">
                      <img
                        className="imgSearch"
                        src={ad.photo}
                        alt={`Image de ${ad.name}`}
                      ></img>
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              <p>Aucune annonce trouvée pour votre recherche.</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
export default Topbar;
