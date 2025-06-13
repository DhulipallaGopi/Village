// src/games/PMAY.jsx

import React, { useState, useMemo, useEffect, useRef } from "react";

// --- Audio Assets ---
const successSound = new Audio('https://actions.google.com/sounds/v1/achievements/achievement_bell.ogg');
const failureSound = new Audio('https://actions.google.com/sounds/v1/negative/failure.ogg');
const clickSound = new Audio('https://actions.google.com/sounds/v1/ui/ui_pop.ogg');
const buildSound = new Audio('https://actions.google.com/sounds/v1/tools/saw.ogg');
const powerUpSound = new Audio('https://actions.google.com/sounds/v1/alarms/power_up.ogg');
const celebrationSound = new Audio('https://actions.google.com/sounds/v1/crowds/battle_crowd_celebrate_stutter.ogg');

// --- Family Avatars ---
const familyAvatars = [
  { id: 'f1', emoji: '👨‍👩‍👧', name: { en: 'The Kumars', hi: 'कुमार परिवार', ta: 'குமார் குடும்பம்', te: 'కుమార్ కుటుంబం', kn: 'ಕುಮಾರ್ ಕುಟುಂಬ' } },
  { id: 'f2', emoji: '👩‍👩‍👦‍👦', name: { en: 'The Guptas', hi: 'गुप्ता परिवार', ta: 'குப்தா குடும்பம்', te: 'గుప్తా కుటుంబం', kn: 'ಗುಪ್ತಾ ಕುಟುಂಬ' } },
  { id: 'f3', emoji: '👨‍👩‍👧‍👦', name: { en: 'The Singhs', hi: 'सिंह परिवार', ta: 'சிங் குடும்பம்', te: 'సింగ్ కుటుంబం', kn: 'ಸಿಂಗ್ ಕುಟುಂಬ' } },
];

// --- Multilingual Content ---
const gameData = {
  en: {
    langName: "English",
    title: "🏡 PMAY: The Subsidy Power-Up! 🏡",
    gameSteps: {
      welcome: { title: "Choose Your Family", description: "Who is building their dream home today?" },
      challenge: { title: "The Dream Home Challenge", description: "Building a home is a big dream! Try to fill the cost meter with your own contribution. It's tough!", button: "Contribute" },
      eligibility: {
        title: "Get a Government Power-Up!",
        description: "It's hard to do it alone! Let's see if you can get the PMAY Subsidy power-up. Answer the document quest!",
        questions: [{ key: 'firstHome', text: "Do you have the 'First Pucca House' certificate?" }, { key: 'isEwsLig', text: "Do you have the 'EWS/LIG Income' certificate?" }, { key: 'noOtherScheme', text: "Do you have the 'No Prior Scheme' declaration?" }],
        button: "Check My Documents",
      },
      building: {
        title: "Build Your Home Together!",
        description: "Awesome! You've unlocked the PMAY Subsidy Pipe! Now, let's build this house together. Your contribution and the government's help will make it fast!",
        button: "Build!",
      },
      complete: { title: "🎉 Gruha Pravesh! 🎉", description: "Your beautiful new home is ready! Thanks to your effort and the PMAY subsidy, your family's dream has come true!", playAgain: "Build Another Home" },
      ineligible: { title: "Document Quest Failed", description: "Oh no! It seems some documents are missing. You may not be eligible for the PMAY subsidy at this time.", reason: "Missing Documents:" }
    },
    common: { yes: "Yes", no: "No", infoTitle: "What is PMAY?", infoText: "The Pradhan Mantri Awas Yojana (PMAY) gives a subsidy (a helping hand with money) to make home loans cheaper for families building their first pucca house.", websiteLinkText: "Visit PMAY Portal" },
  },
  hi: {
    langName: "हिन्दी",
    title: "🏡 पीएमएवाई: सब्सिडी पावर-अप! 🏡",
    gameSteps: {
      welcome: { title: "अपने परिवार को चुनें", description: "आज कौन अपना सपनों का घर बना रहा है?" },
      challenge: { title: "सपनों के घर की चुनौती", description: "घर बनाना एक बड़ा सपना है! अपनी बचत से लागत मीटर भरने की कोशिश करें। यह मुश्किल है!", button: "योगदान करें" },
      eligibility: {
        title: "सरकारी पावर-अप प्राप्त करें!",
        description: "अकेले करना मुश्किल है! देखें कि क्या आप पीएमएवाई सब्सिडी पावर-अप प्राप्त कर सकते हैं। दस्तावेज़ खोज को पूरा करें!",
        questions: [{ key: 'firstHome', text: "क्या आपके पास 'पहला पक्का घर' प्रमाणपत्र है?" }, { key: 'isEwsLig', text: "क्या आपके पास 'EWS/LIG आय' प्रमाणपत्र है?" }, { key: 'noOtherScheme', text: "क्या आपके पास 'कोई पूर्व योजना नहीं' घोषणा है?" }],
        button: "मेरे दस्तावेज़ जांचें",
      },
      building: {
        title: "मिलकर अपना घर बनाएं!",
        description: "बहुत बढ़िया! आपने पीएमएवाई सब्सिडी पाइप को अनलॉक कर दिया है! अब, मिलकर इस घर को बनाते हैं। आपका योगदान और सरकार की मदद इसे तेजी से बनाएगी!",
        button: "बनाओ!",
      },
      complete: { title: "🎉 गृह प्रवेश! 🎉", description: "आपका सुंदर नया घर तैयार है! आपकी मेहनत और पीएमएवाई सब्सिडी के कारण, आपके परिवार का सपना सच हो गया है!", playAgain: "एक और घर बनाएं" },
      ineligible: { title: "दस्तावेज़ खोज विफल", description: "ओह नहीं! ऐसा लगता है कि कुछ दस्तावेज़ गायब हैं। आप इस समय पीएमएवाई सब्सिडी के लिए पात्र नहीं हो सकते हैं।", reason: "गायब दस्तावेज़:" }
    },
    common: { yes: "हाँ", no: "नहीं", infoTitle: "पीएमएवाई क्या है?", infoText: "प्रधानमंत्री आवास योजना (पीएमएवाई) अपना पहला पक्का घर बनाने वाले परिवारों के लिए होम लोन को सस्ता बनाने के लिए सब्सिडी (पैसे से मदद) देती है।", websiteLinkText: "पीएमएवाई पोर्टल पर जाएं" },
  },
  ta: { langName: "தமிழ்", title: "🏡 பிஎம்ஏவை: மானிய பவர்-அப்! 🏡", gameSteps: { welcome: { title: "உங்கள் குடும்பத்தைத் தேர்ந்தெடுங்கள்" }, challenge: { title: "கனவு இல்ல சவால்" }, eligibility: { title: "அரசு பவர்-அப் பெறுங்கள்!" }, building: { title: "ஒன்றாக உங்கள் வீட்டைக் கட்டுங்கள்!" }, complete: { title: "🎉 கிரகப்பிரவேசம்! 🎉" }, ineligible: { title: "ஆவணத் தேடல் தோல்வி" } }, common: { infoTitle: "பிஎம்ஏவை என்றால் என்ன?" } },
  te: { langName: "తెలుగు", title: "🏡 పిఎంఎవై: సబ్సిడీ పవర్-అప్! 🏡", gameSteps: { welcome: { title: "మీ కుటుంబాన్ని ఎంచుకోండి" }, challenge: { title: "కలలోని ఇంటి సవాలు" }, eligibility: { title: "ప్రభుత్వ పవర్-అప్ పొందండి!" }, building: { title: "కలిసి మీ ఇంటిని నిర్మించుకోండి!" }, complete: { title: "🎉 గృహ ప్రవేశం! 🎉" }, ineligible: { title: "పత్రాల అన్వేషణ విఫలమైంది" } }, common: { infoTitle: "పిఎంఎవై అంటే ఏమిటి?" } },
  kn: { langName: "ಕನ್ನಡ", title: "🏡 ಪಿಎಂಎವೈ: ಸಬ್ಸಿಡಿ ಪವರ್-ಅಪ್! 🏡", gameSteps: { welcome: { title: "ನಿಮ್ಮ ಕುಟುಂಬವನ್ನು ಆಯ್ಕೆ ಮಾಡಿ" }, challenge: { title: "ಕನಸಿನ ಮನೆ ಸವಾಲು" }, eligibility: { title: "ಸರ್ಕಾರಿ ಪವರ್-ಅಪ್ ಪಡೆಯಿರಿ!" }, building: { title: "ಒಟ್ಟಿಗೆ ನಿಮ್ಮ ಮನೆ ನಿರ್ಮಿಸಿ!" }, complete: { title: "🎉 ಗೃಹ ಪ್ರವೇಶ! 🎉" }, ineligible: { title: "ದಾಖಲೆ ಹುಡುಕಾಟ ವಿಫಲವಾಗಿದೆ" } }, common: { infoTitle: "ಪಿಎಂಎವೈ ಎಂದರೇನು?" } },
};

const PMAY = ({ initialLang = 'en' }) => {
  const [currentLang, setCurrentLang] = useState(initialLang);
  const [gameStep, setGameStep] = useState('welcome');
  const [familyAvatar, setFamilyAvatar] = useState(null);
  const [eligibilityAnswers, setEligibilityAnswers] = useState({});
  const [isEligible, setIsEligible] = useState(false);
  const [buildProgress, setBuildProgress] = useState(0);
  const timersRef = useRef([]);

  const langContent = useMemo(() => gameData[currentLang] || gameData.en, [currentLang]);
  
  const speakText = (text) => { if ('speechSynthesis' in window) { speechSynthesis.cancel(); const u = new SpeechSynthesisUtterance(text); u.lang = currentLang + '-IN'; u.rate = 0.9; speechSynthesis.speak(u); } };
  
  // *** THE FIX: This useEffect hook handles all cleanup ***
  useEffect(() => {
    // The function returned from useEffect is the cleanup function.
    // It runs when the component is unmounted (e.g., when you click "Back").
    return () => {
      // 1. Stop any speaking text
      if ('speechSynthesis' in window) {
        speechSynthesis.cancel();
      }

      // 2. Pause all sound effects and reset them
      const allSounds = [successSound, failureSound, clickSound, buildSound, powerUpSound, celebrationSound];
      allSounds.forEach(sound => {
        sound.pause();
        sound.currentTime = 0;
      });

      // 3. Clear any scheduled timers
      timersRef.current.forEach(timerId => clearTimeout(timerId));
      timersRef.current = []; // Reset the timers array
    };
  }, []); // The empty array [] ensures this runs only on mount and unmount.


  useEffect(() => { const stepContent = langContent.gameSteps[gameStep]; if(stepContent) { speakText(stepContent.title); } }, [gameStep, currentLang]);

  const changeStep = (newStep) => { 
    setGameStep('transition'); 
    const timerId = setTimeout(() => { 
      setGameStep(newStep); 
    }, 300);
    timersRef.current.push(timerId); // Keep track of the timer
  };
  
  const handleSelectAvatar = (avatar) => { clickSound.play(); setFamilyAvatar(avatar); changeStep('challenge'); };
  
  const handleContribution = () => {
    clickSound.play();
    if(buildProgress < 10) setBuildProgress(p => p + 1);
    else changeStep('eligibility');
  }
  
  const handleEligibilityChange = (key, value) => setEligibilityAnswers(prev => ({ ...prev, [key]: value }));
  
  const handleCheckEligibility = () => {
    const allYes = langContent.gameSteps.eligibility.questions.every(q => eligibilityAnswers[q.key] === true);
    if (allYes) { powerUpSound.play(); setIsEligible(true); changeStep('building'); } 
    else { failureSound.play(); setIsEligible(false); changeStep('ineligible'); }
  };
  
  const handleBuild = () => {
    buildSound.play();
    setBuildProgress(p => Math.min(p + 10, 100)); // PMAY pipe is 10x faster!
  };
  
  useEffect(() => {
    if(buildProgress === 100) {
        celebrationSound.play();
        const timerId = setTimeout(() => changeStep('complete'), 2000);
        timersRef.current.push(timerId); // Keep track of the timer
    }
  }, [buildProgress])

  const handleRestart = () => {
    clickSound.play();
    setGameStep('welcome');
    setFamilyAvatar(null);
    setEligibilityAnswers({});
    setIsEligible(false);
    setBuildProgress(0);
  };
  
  const renderHouse = (progress) => {
      const showFoundation = progress > 5;
      const showWalls = progress > 25;
      const showRoof = progress > 60;
      const showPaint = progress >= 100;

      return (
          <div style={styles.houseBlueprint}>
              <div style={styles.sky}>
                  {showPaint && <span style={{fontSize: '2rem', position:'absolute', top:'10px', left: '20px'}}>☀️</span>}
              </div>
              <div style={styles.ground}>
                  {showFoundation && <div style={{...styles.housePart, ...styles.foundation}} />}
                  {showWalls && <div style={{...styles.housePart, ...styles.walls}} />}
                  {showRoof && <div style={{...styles.housePart, ...styles.roof}} />}
                  {showPaint && <div style={{...styles.housePart, ...styles.walls, ...styles.painted}} />}
                  {showPaint && <div style={{...styles.housePart, ...styles.door}} />}
              </div>
          </div>
      );
  }
  
  const renderPipes = () => (
    <div style={styles.pipesContainer}>
        {/* User's Pipe */}
        <div style={styles.pipe}>
            <div style={styles.pipeLabel}>{familyAvatar?.emoji}</div>
            <div style={styles.pipeBody}><div style={styles.moneyFlowSmall}></div></div>
        </div>
        {/* PMAY Subsidy Pipe */}
        {isEligible && (
            <div style={{...styles.pipe, ...styles.pipeSubsidy}}>
                <div style={styles.pipeLabel}>🇮🇳 PMAY</div>
                <div style={{...styles.pipeBody, ...styles.pipeBodySubsidy}}><div style={styles.moneyFlowLarge}></div></div>
            </div>
        )}
    </div>
  );

  const renderContent = () => {
    switch (gameStep) {
      case 'welcome':
        return (<>
          <h2 style={styles.title}>{langContent.gameSteps.welcome.title}</h2>
          <div style={styles.avatarContainer}>
            {familyAvatars.map(avatar => (
              <button key={avatar.id} style={styles.avatarButton} onClick={() => handleSelectAvatar(avatar)}>
                <span style={styles.avatarEmoji}>{avatar.emoji}</span>
                <span style={styles.avatarName}>{avatar.name[currentLang]}</span>
              </button>
            ))}
          </div>
        </>);
      
      case 'challenge':
      case 'building':
        const currentStepData = langContent.gameSteps[gameStep];
        return (<>
            <h2 style={styles.title}>{currentStepData.title}</h2>
            <p style={styles.description}>{currentStepData.description}</p>
            <div style={styles.mainGameArea}>
                {renderHouse(buildProgress)}
                <div style={styles.meterContainer}>
                    <div style={styles.costMeter}>
                        <div style={{...styles.costMeterFill, height: `${buildProgress}%`}}></div>
                        <span style={styles.costMeterText}>₹</span>
                    </div>
                    {renderPipes()}
                </div>
            </div>
            <button style={styles.actionButton} onClick={gameStep === 'challenge' ? handleContribution : handleBuild}>
                {currentStepData.button}
            </button>
        </>);
      
      case 'eligibility':
        return (<>
            <h2 style={styles.title}>{langContent.gameSteps.eligibility.title}</h2>
            <p style={styles.description}>{langContent.gameSteps.eligibility.description}</p>
            <div style={styles.eligibilityForm}>
                {langContent.gameSteps.eligibility.questions.map(q => (
                  <div key={q.key} style={styles.eligibilityQuestion}>
                    <label style={styles.questionLabel}>{q.text}</label>
                    <div style={styles.radioGroup}>
                      <button onClick={() => handleEligibilityChange(q.key, true)} style={eligibilityAnswers[q.key] === true ? styles.radioSelected : styles.radio}>✅</button>
                      <button onClick={() => handleEligibilityChange(q.key, false)} style={eligibilityAnswers[q.key] === false ? styles.radioSelected : styles.radio}>❌</button>
                    </div>
                  </div>
                ))}
            </div>
            <button style={styles.actionButton} onClick={handleCheckEligibility}>{langContent.gameSteps.eligibility.button}</button>
        </>);

      case 'complete':
      case 'ineligible':
        const finalStepData = langContent.gameSteps[gameStep];
        return (<>
            <h2 style={styles.title}>{finalStepData.title}</h2>
            <p style={styles.description}>{finalStepData.description}</p>
            {gameStep === 'complete' && <div style={styles.mainGameArea}>{renderHouse(100)}<span style={styles.finalFamily}>{familyAvatar?.emoji}</span></div>}
            {gameStep === 'ineligible' && (
                <div style={styles.reasonBox}>
                    <strong>{finalStepData.reason}</strong>
                    <ul>{langContent.gameSteps.eligibility.questions.map(q => eligibilityAnswers[q.key] === false && <li key={q.key}>{q.text}</li>)}</ul>
                </div>
            )}
            <div style={styles.infoBox}>
                <h3>{langContent.common.infoTitle}</h3>
                <p>{langContent.common.infoText}</p>
                <a href="https://pmay-urban.gov.in/" target="_blank" rel="noopener noreferrer" style={styles.websiteLink}>{langContent.common.websiteLinkText}</a>
            </div>
            <button style={styles.actionButton} onClick={handleRestart}>{langContent.gameSteps.complete.playAgain}</button>
        </>);

      case 'transition':
      default:
        return <div style={{ minHeight: '500px' }}></div>;
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.overlay}>
        <div style={styles.header}>
            <select value={currentLang} onChange={e => setCurrentLang(e.target.value)} style={styles.langDropdown}>
                {Object.keys(gameData).map(langKey => <option key={langKey} value={langKey}>{gameData[langKey].langName}</option>)}
            </select>
        </div>
        <div style={styles.gameContent}>
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

// --- Styles ---
const styles = {
  container: { position: 'relative', fontFamily: 'Arial, sans-serif', maxWidth: '800px', margin: '20px auto', borderRadius: '15px', overflow: 'hidden', border: '4px solid #065f46',
    backgroundImage: `url('https://www.transparenttextures.com/patterns/az-subtle.png'), linear-gradient(to bottom, #d1fae5, #a7f3d0)`, backgroundSize: 'auto, cover'
  },
  overlay: { background: 'rgba(255, 255, 255, 0.75)', minHeight: '85vh', padding: '15px', display: 'flex', flexDirection: 'column' },
  header: { display: 'flex', justifyContent: 'flex-end', alignItems: 'center', marginBottom: '10px' },
  langDropdown: { border: '2px solid #047857', borderRadius: '5px', padding: '5px', background: 'white', fontWeight: 'bold' },
  gameContent: { flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', textAlign: 'center' },
  title: { color: '#064e3b', fontSize: '2.2rem', marginBottom: '15px' },
  description: { fontSize: '1.1rem', color: '#1f2937', maxWidth: '600px', margin: '0 auto 25px auto', lineHeight: '1.6' },
  actionButton: { padding: '12px 30px', fontSize: '1.1rem', color: 'white', backgroundColor: '#10b981', border: 'none', borderRadius: '8px', cursor: 'pointer', marginTop: '20px', transition: 'all 0.2s', boxShadow: '0 4px #059669', ':hover': { transform: 'translateY(-2px)' }, ':active': { transform: 'translateY(2px)', boxShadow: '0 2px #059669' } },
  avatarContainer: { display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center', marginTop: '20px' },
  avatarButton: { background: 'white', border: '3px solid #a7f3d0', borderRadius: '15px', cursor: 'pointer', padding: '15px', transition: 'all 0.2s ease-in-out', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '5px', ':hover': { borderColor: '#10b981', transform: 'scale(1.1)' } },
  avatarEmoji: { fontSize: '4rem' },
  avatarName: { fontWeight: 'bold', color: '#065f46' },
  mainGameArea: { display: 'flex', gap: '40px', alignItems: 'flex-end', justifyContent: 'center', margin: '20px 0', position: 'relative' },
  houseBlueprint: { width: '300px', height: '300px', position: 'relative', overflow: 'hidden' },
  sky: { position: 'absolute', top: 0, left: 0, width: '100%', height: '70%', background: '#7dd3fc' },
  ground: { position: 'absolute', bottom: 0, left: 0, width: '100%', height: '30%', background: '#65a30d' },
  housePart: { position: 'absolute', transition: 'all 0.5s ease-in-out', animation: 'buildUp 0.5s' },
  foundation: { bottom: '0px', left: '50px', width: '200px', height: '20px', backgroundColor: '#78716c' },
  walls: { bottom: '20px', left: '60px', width: '180px', height: '120px', backgroundColor: '#fcd34d' },
  roof: { bottom: '140px', left: '50px', width: 0, height: 0, borderLeft: '100px solid transparent', borderRight: '100px solid transparent', borderBottom: '60px solid #dc2626' },
  painted: { backgroundColor: '#c4b5fd' },
  door: { bottom: '20px', left: '125px', width: '50px', height: '80px', backgroundColor: '#78350f' },
  meterContainer: { display: 'flex', flexDirection: 'column', alignItems: 'center' },
  costMeter: { width: '80px', height: '300px', backgroundColor: '#e5e7eb', border: '4px solid #4b5563', borderRadius: '10px', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' },
  costMeterFill: { position: 'absolute', bottom: 0, left: 0, width: '100%', backgroundColor: '#f59e0b', transition: 'height 0.3s ease-out' },
  costMeterText: { zIndex: 1, fontSize: '3rem', color: 'white', fontWeight: 'bold', textShadow: '2px 2px 4px #4b5563' },
  pipesContainer: { display: 'flex', gap: '5px', marginTop: '10px' },
  pipe: { display: 'flex', flexDirection: 'column', alignItems: 'center' },
  pipeLabel: { fontWeight: 'bold', background: '#4b5563', color: 'white', padding: '2px 8px', borderRadius: '5px', fontSize: '0.9rem' },
  pipeBody: { width: '15px', height: '50px', background: '#9ca3af', position: 'relative', overflow: 'hidden' },
  pipeSubsidy: { animation: 'powerUpGlow 1.5s infinite' },
  pipeBodySubsidy: { width: '40px' },
  moneyFlowSmall: { position: 'absolute', width: '100%', height: '200%', background: 'linear-gradient(#fcd34d 20%, #f59e0b 20%)', backgroundSize: '100% 20px', animation: 'flow 1s linear infinite' },
  moneyFlowLarge: { position: 'absolute', width: '100%', height: '200%', background: 'linear-gradient(#fcd34d 20%, #f59e0b 20%)', backgroundSize: '100% 20px', animation: 'flow 0.3s linear infinite' },
  eligibilityForm: { display: 'flex', flexDirection: 'column', gap: '15px', margin: '20px 0', width: '100%', maxWidth: '500px', background: 'rgba(255,255,255,0.7)', padding: '20px', borderRadius: '10px' },
  eligibilityQuestion: { display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
  questionLabel: { textAlign: 'left', flex: 1, marginRight: '10px', fontWeight: 'bold', color: '#1f2937' },
  radioGroup: { display: 'flex', gap: '10px' },
  radio: { fontSize: '1.5rem', width: '50px', height: '50px', border: '2px solid #ccc', borderRadius: '8px', cursor: 'pointer', backgroundColor: 'white' },
  radioSelected: { fontSize: '1.5rem', width: '50px', height: '50px', border: '3px solid #10b981', borderRadius: '8px', cursor: 'pointer', backgroundColor: '#d1fae5', transform: 'scale(1.1)' },
  finalFamily: { position: 'absolute', bottom: '35%', left: '20%', fontSize: '3rem', animation: 'bounceIn 1s' },
  reasonBox: { textAlign: 'left', backgroundColor: '#fee2e2', border: '1px solid #ef4444', color: '#b91c1c', borderRadius: '8px', padding: '15px', margin: '0 auto 20px auto', maxWidth: '600px' },
  infoBox: { textAlign: 'center', backgroundColor: '#ecfdf5', border: '1px solid #6ee7b7', borderRadius: '8px', padding: '20px', marginTop: '20px', maxWidth: '600px', margin: '20px auto' },
  websiteLink: { display: 'inline-block', padding: '10px 25px', backgroundColor: '#10b981', color: 'white', textDecoration: 'none', borderRadius: '5px', fontWeight: 'bold', marginTop: '10px' },
};

// Add keyframes for animations
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = `
@keyframes buildUp { from { transform: translateY(100px) scale(0.5); opacity: 0; } to { transform: translateY(0) scale(1); opacity: 1; } }
@keyframes bounceIn { 0% { transform: scale(0.1); opacity: 0; } 60% { transform: scale(1.2); opacity: 1; } 100% { transform: scale(1); } }
@keyframes flow { from { background-position: 0 0; } to { background-position: 0 -40px; } }
@keyframes powerUpGlow { 0% { box-shadow: 0 0 5px #f59e0b; } 50% { box-shadow: 0 0 20px #fde047, 0 0 30px #f59e0b; } 100% { box-shadow: 0 0 5px #f59e0b; } }
`;
document.head.appendChild(styleSheet);

export default PMAY;