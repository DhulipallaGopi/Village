import React, { useEffect, useState } from "react";
import "./loginForm.css";

function LoginForm({ schemeName, schemeLink, onCancel, lang = "en", onRegisterComplete }) {
  const GOOGLE_FORM_URL =
    "https://docs.google.com/forms/d/e/1FAIpQLSfCfYU72fBINc5ARP8oLZvZZam2mNm4hw7QoW7u9HkJ8Cv9RQ/formResponse";
  const iframeName = "hidden_iframe";

  const [voices, setVoices] = useState([]);

  useEffect(() => {
    const loadVoices = () => {
      const availableVoices = window.speechSynthesis.getVoices();
      if (availableVoices.length > 0) {
        setVoices(availableVoices);
      } else {
        window.speechSynthesis.onvoiceschanged = () => {
          const updatedVoices = window.speechSynthesis.getVoices();
          setVoices(updatedVoices);
        };
      }
    };

    setTimeout(loadVoices, 300); // Slight delay helps on some browsers
  }, []);

  const speak = (text, language = "en-IN") => {
    const allVoices = window.speechSynthesis.getVoices();
    let selectedVoice = allVoices.find((v) => v.lang === language);

    if (!selectedVoice) {
      selectedVoice = allVoices.find((v) =>
        v.lang.startsWith(language.split("-")[0])
      );
    }

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = language;
    if (selectedVoice) {
      utterance.voice = selectedVoice;
    }

    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
  };

  const handleSubmit = () => {
    setTimeout(() => {
      if (onRegisterComplete) {
        onRegisterComplete(); // ✅ trigger Ujjwala or next step
      }
    }, 1000); // Slight delay after form submit
  };

  const translations = {
    en: {
      title: "Register to Play for",
      nameLabel: "Enter Name",
      namePlaceholder: "Enter your Name",
      nameSpeak: "Please enter your name",
      mobileLabel: "Mobile Number",
      mobilePlaceholder: "10-digit mobile",
      mobileSpeak: "Please enter your 10-digit mobile number",
      submit: "Submit",
      cancel: "Cancel",
    },
    hi: {
      title: "खेलने के लिए पंजीकरण करें",
      nameLabel: "नाम दर्ज करें",
      namePlaceholder: "अपना नाम दर्ज करें",
      nameSpeak: "कृपया अपना नाम दर्ज करें",
      mobileLabel: "मोबाइल नंबर",
      mobilePlaceholder: "10 अंकों का मोबाइल नंबर दर्ज करें",
      mobileSpeak: "कृपया अपना 10 अंकों का मोबाइल नंबर दर्ज करें",
      submit: "सबमिट करें",
      cancel: "रद्द करें",
    },
  };

  const t = translations[lang] || translations.en;
  const langCode = lang === "hi" ? "hi-IN" : "en-IN";

  return (
    <>
      <iframe
        name={iframeName}
        style={{ display: "none" }}
        title="hidden_iframe"
      ></iframe>

      <div className="login-form-overlay">
        <div className="login-form-container">
          <h6>
            {t.title}: <span style={{ color: "#ff5722" }}>{schemeName}</span>
          </h6>

          <form
            action={GOOGLE_FORM_URL}
            method="POST"
            target={iframeName}
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="entry.1853539393" value={schemeName} />

            <label>
              {t.nameLabel}:
              <input
                name="entry.1392925479"
                type="text"
                placeholder={t.namePlaceholder}
                required
                onFocus={() => speak(t.nameSpeak, langCode)}
              />
            </label>

            <label>
              {t.mobileLabel}:
              <input
                name="entry.156727568"
                type="tel"
                pattern="[6-9][0-9]{9}"
                placeholder={t.mobilePlaceholder}
                required
                onFocus={() => speak(t.mobileSpeak, langCode)}
              />
            </label>

            <div className="form-buttons">
              <button type="submit">{t.submit}</button>
              <button type="button" onClick={onCancel}>
                {t.cancel}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default LoginForm;
