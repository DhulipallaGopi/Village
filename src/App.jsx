// src/App.jsx
import React, { useState, useRef, useEffect } from "react";
import "./App.css";
import LoginForm from "./components/LoginForm";
import LandbotChat from "./components/LandbotChat";
import logo1 from "./assets/logo1.png";
import Agricoop from "./assets/Agricoop.png";
import MyGov from "./assets/MyGov.png";
import PmKisan from "./assets/PmKisan.png";
import { languages, footerTexts, buttonTexts, schemes } from "./data/data";
import Ujjwala from "./games/Ujjwala";
import PmKisanGame from "./games/PmKisanGame";
import PMAY from "./games/PMAY";

function App() {
  const [lang, setLang] = useState("en-US"); // Default to the specific code
  const scrollRef = useRef(null);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [activeSchemeKey, setActiveSchemeKey] = useState(null);

  const gameComponents = {
    pmkisan: PmKisanGame,
    ujjwala: Ujjwala,
    pmpay:PMAY
  };

  const renderGameComponent = () => {
    const Component = gameComponents[activeSchemeKey];
    return Component ? <Component lang={lang} /> : null;
  };

  const scroll = (dir) => {
    const container = scrollRef.current;
    const scrollAmount = 300;
    if (container) {
      container.scrollBy({
        left: dir === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const loggedIn = localStorage.getItem("isUserLoggedIn");
    if (loggedIn === "true") {
      setIsUserLoggedIn(true);
    }
  }, []);

  const handleLogin = () => {
    setIsUserLoggedIn(true);
    setShowLoginForm(false);
    localStorage.setItem("isUserLoggedIn", "true");
  };

  const handleLogout = () => {
    setIsUserLoggedIn(false);
    setActiveSchemeKey(null);
    localStorage.removeItem("isUserLoggedIn");
  };

  const baseLang = lang.split('-')[0];
  const currentButtonTexts = buttonTexts[baseLang] || buttonTexts["en"];
  const currentFooterText = footerTexts[baseLang] || footerTexts["en"];
  
  if (isUserLoggedIn && activeSchemeKey) {
    return (
      <div className="game-page-container">
        <button className="btn back-btn" onClick={() => setActiveSchemeKey(null)}>
          ← Back 
        </button>
        <div className="game-content-area">
            {renderGameComponent()}
        </div>
      </div>
    );
  }

  return (
    <div className="app">
      <header className="hero">
        <div className="header-content">
          <img src={logo1} alt="Village Logo" className="village-logo" style={{ cursor: "pointer" }} onClick={() => window.location.reload()} />
          <h1>Welcome to Your Village Resource Center</h1>
        </div>
        <p>Empowering village farmers with easy knowledge about government schemes that provide financial support. Learn, play, and win benefits for your future!</p>
        <div className="language-selector">
          <label htmlFor="lang-select">Select Language: </label>
          <select id="lang-select" value={lang} onChange={(e) => setLang(e.target.value)}>
            {languages.map(({ code, label }) => (
              <option key={code} value={code}>{label}</option>
            ))}
          </select>
          <div className="marquee-container">
            <marquee>🌾 Stay updated! Apply now for PM-KISAN, Atal Pension Yojana, and other government schemes.</marquee>
          </div>
        </div>
      </header>

      <main className="content">
        <div className="main-header">
          <h2 style={{ display: "inline-block", marginRight: "20px" }}>Play & Learn</h2>
          {!isUserLoggedIn ? (
            <button className="btn" onClick={() => setShowLoginForm(true)}>Login</button>
          ) : (
            <button className="btn logout" onClick={handleLogout}>Logout</button>
          )}
        </div>

        <div className="carousel">
          <button className="scroll-btn" onClick={() => scroll("left")}>‹</button>
          <div className="card-grid" ref={scrollRef}>
            {schemes.map((scheme) => {
              const schemeLang = lang.split('-')[0];
              const translation = scheme.translations[schemeLang] || scheme.translations["en"];
              const name = translation?.name || "Scheme Name Unavailable";
              const description = translation?.description || "Description unavailable.";
              return (
                <div key={scheme.id} className="scheme-card">
                  <img src={scheme.imageUrl} alt={name} className="scheme-image" />
                  <h3>{name}</h3>
                  <p>{description}</p>
                  <div className="btn-group">
                    <button className="btn" onClick={() => { if (!isUserLoggedIn) { setShowLoginForm(true); } else { setActiveSchemeKey(scheme.key); } }}>
                      {currentButtonTexts.play}
                    </button>
                    <a className="btn" href={scheme.officialUrl} target="_blank" rel="noopener noreferrer">
                      {currentButtonTexts.official}
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
          <button className="scroll-btn" onClick={() => scroll("right")}>›</button>
        </div>

        {showLoginForm && !isUserLoggedIn && (
          <LoginForm lang={lang} onCancel={() => setShowLoginForm(false)} onRegisterComplete={handleLogin} />
        )}
      </main>

      <footer className="footer">
        <div className="official-sites">
          <div className="official-links">
            <a href="https://www.mygov.in/" target="_blank" rel="noopener noreferrer"><img src={MyGov} alt="MyGov" /></a>
            <a href="https://pmkisan.gov.in/" target="_blank" rel="noopener noreferrer"><img src={PmKisan} alt="PM-KISAN" /></a>
            <a href="https://agriwelfare.gov.in/" target="_blank" rel="noopener noreferrer"><img src={Agricoop} alt="Ministry of Agriculture" /></a>
          </div>
        </div>
        <p style={{ marginBottom: "2px" }}>Visit official websites | Rural Income Support</p>
        <div>{currentFooterText}</div>
      </footer>

      <LandbotChat />
    </div>
  );
}

export default App;