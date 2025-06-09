import React, { useState, useRef, useEffect } from "react";
import "./App.css";
import Quiz from "./components/Quiz";
import LoginForm from "./components/LoginForm";
import Rating from "./components/Ratings";
import "./components/Ratings.css";

import { languages, footerTexts, buttonTexts, schemes } from "./data/data";

function App() {
  const [lang, setLang] = useState("en");
  const scrollRef = useRef(null);
  const [loginCardId, setLoginCardId] = useState(null);

  // Landbot Livechat (floating bubble) — loads immediately on mount
  useEffect(() => {
    if (!window.myLandbotLivechat) {
      const s = document.createElement("script");
      s.type = "module";
      s.async = true;
      s.addEventListener("load", () => {
        window.myLandbotLivechat = new window.Landbot.Livechat({
          configUrl:
            "https://storage.googleapis.com/landbot.online/v3/H-2982349-RSLUT5AHIHE0J3J4/index.json",
        });
      });
      s.src = "https://cdn.landbot.io/landbot-3/landbot-3.0.0.mjs";
      document.body.appendChild(s);
    }
  }, []);

  // Landbot Popup — loads on first mouseover or touchstart interaction
  useEffect(() => {
    let myLandbotPopup = null;

    function initLandbotPopup() {
      if (!myLandbotPopup) {
        const s = document.createElement("script");
        s.type = "module";
        s.async = true;
        s.addEventListener("load", () => {
          myLandbotPopup = new window.Landbot.Popup({
            configUrl:
              "https://storage.googleapis.com/landbot.online/v3/H-2982743-P7DOLTUOX7IR95W6/index.json",
          });
        });
        s.src = "https://cdn.landbot.io/landbot-3/landbot-3.0.0.mjs";
        const firstScript = document.getElementsByTagName("script")[0];
        firstScript.parentNode.insertBefore(s, firstScript);
      }
      window.removeEventListener("mouseover", initLandbotPopup);
      window.removeEventListener("touchstart", initLandbotPopup);
    }

    window.addEventListener("mouseover", initLandbotPopup, { once: true });
    window.addEventListener("touchstart", initLandbotPopup, { once: true });

    return () => {
      window.removeEventListener("mouseover", initLandbotPopup);
      window.removeEventListener("touchstart", initLandbotPopup);
    };
  }, []);

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

  const currentButtonTexts = buttonTexts[lang] || buttonTexts["en"];
  const loginScheme = schemes.find((s) => s.id === loginCardId);
  const schemeName =
    loginScheme?.translations[lang]?.name ||
    loginScheme?.translations["en"]?.name ||
    "";
  const schemeLink = loginScheme?.link || "";

  return (
    <div className="app">
      <header className="hero">
        <h1>🌾 Welcome to Your Village Resource Center</h1>
        <p>
          Empowering village farmers with easy knowledge about government
          schemes that provide financial support. Learn, play, and win benefits
          for your future!
        </p>
        <div className="language-selector">
          <label htmlFor="lang-select">Select Language: </label>
          <select
            id="lang-select"
            value={lang}
            onChange={(e) => setLang(e.target.value)}
          >
            {languages.map(({ code, label }) => (
              <option key={code} value={code}>
                {label}
              </option>
            ))}
          </select>
          <div className="marquee-container">
            <marquee>
              🌾 Stay updated! Apply now for PM-KISAN, Atal Pension Yojana, and
              other government schemes. Financial support is available for all
              eligible farmers. Visit your Village Resource Center to learn more
              and secure your future! 💰📜 | Don't miss the deadline for crop
              insurance enrollment. Protect your hard work and your family’s
              livelihood. | 📢 Join training sessions and workshops organized
              every month to empower your farming skills and increase
              productivity. | Your village, your future — together we grow
              stronger! 🌱
            </marquee>
          </div>
        </div>
      </header>

      <main className="content">
        <div className="Quiz-app-container">
          <Quiz lang={lang} />
        </div>

        <h2>Play & Learn</h2>
        <div className="carousel">
          <button className="scroll-btn" onClick={() => scroll("left")}>
            ‹
          </button>

          <div className="card-grid" ref={scrollRef}>
            {schemes.map((scheme) => {
              const { name, description } =
                scheme.translations[lang] || scheme.translations["en"];

              return (
                <div key={scheme.id} className="scheme-card">
                  <img
                    src={scheme.imageUrl}
                    alt={name}
                    className="scheme-image"
                  />
                  <h3>{name}</h3>
                  <p>{description}</p>

                  <div className="btn-group">
                    <a
                      className="btn"
                      href={scheme.officialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {currentButtonTexts.official}
                    </a>

                    <button
                      className="btn"
                      onClick={() => setLoginCardId(scheme.id)}
                    >
                      {currentButtonTexts.play}
                    </button>
                  </div>

                  {loginCardId === scheme.id && (
                    <LoginForm
                      schemeName={schemeName}
                      schemeLink={schemeLink}
                      onCancel={() => setLoginCardId(null)}
                    />
                  )}
                </div>
              );
            })}
          </div>

          <button className="scroll-btn" onClick={() => scroll("right")}>
            ›
          </button>
        </div>
        <div>
        <Rating />
        </div>
      </main>

      <footer className="footer">
        {footerTexts[lang] || footerTexts["en"]}
      </footer>
    </div>
  );
}

export default App;
