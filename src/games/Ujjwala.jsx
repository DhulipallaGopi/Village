import React, { useState, useMemo, useEffect } from 'react';

// --- ASSET IMPORTS (Using only the assets you already have) ---
import kitchenOldBg from '../assets/kitchen_old.jpg';
import kitchenNewBg from '../assets/kitchen_new.jpg';
import villagePathBg from '../assets/village_road.jpg';
import aadhaarImg from '../assets/aadhaar.png';
import rationImg from '../assets/ration_card.png';
import sharmaAuntyImg from '../assets/sharma_aunty.png';
import sitaDidiImg from '../assets/sita_didi.png';
import chintuImg from '../assets/chintu.png';
import sarpanchImg from '../assets/sarpanch.png';
import lpgCylinderImg from '../assets/lpg_cylinder.png';

// --- DATA (Multilingual Content for the New Quest Game) ---
const translations = {
    en: {
        title: "Sita's Ujjwala Quest",
        select_language: "Select Your Language",
        start_quest: "Start the Quest!",
        game_complete_title: "Quest Complete!",
        game_complete_message: "Congratulations! You guided Sita on her quest and brought a happy, smoke-free kitchen to her home. You are a true Ujjwala champion!",
        visit_official_site: "Visit Ujjwala Yojana Official Site",
        play_again: "Play Again",
        happiness_meter: "Happiness Meter",
        knowledge_nugget: "Knowledge Nugget!",
        // Quest Steps Content
        q1_text: "Sita is tired of the smoky kitchen. What is the best solution for her?",
        q1_c1: "Get an Ujjwala Cylinder",
        q1_c2: "Just open a window",
        q1_c3: "Ask Chintu to help cook",
        q1_k: "Correct! The Ujjwala Yojana is the government's scheme to provide clean cooking fuel.",
        q2_text: "To apply, Sita needs to gather her documents. What should she take?",
        q2_c1: "Aadhaar and Ration Card",
        q2_c2: "A picture of Chintu",
        q2_c3: "A recipe book",
        q2_k: "Perfect! An identity proof like Aadhaar and an address proof like a Ration Card are needed.",
        q3_text: "On the way, Sharma Aunty says, 'This LPG is only for rich people!' What should Sita reply?",
        q3_c1: "No, Ujjwala is for poor families.",
        q3_c2: "Oh no, you are right!",
        q3_c3: "Let's talk about tractors.",
        q3_k: "Exactly! You busted a myth. Ujjwala is specifically designed to be affordable for everyone.",
        q4_text: "The Sarpanch gives his approval! What is the biggest reward for Sita?",
        q4_c1: "A new, clean kitchen!",
        q4_c2: "A shiny red cylinder.",
        q4_c3: "More time for gossip.",
        q4_k: "Victory! The ultimate reward is a healthy, smoke-free life for Sita and her family!",
    },
    hi: {
        title: "सीता की उज्ज्वला खोज",
        select_language: "अपनी भाषा चुनें",
        start_quest: "खोज शुरू करें!",
        game_complete_title: "खोज पूरी हुई!",
        game_complete_message: "बधाई हो! आपने सीता को उसकी खोज में मार्गदर्शन किया और उसके घर में एक खुशहाल, धुआं मुक्त रसोई लाई। आप एक सच्चे उज्ज्वला चैंपियन हैं!",
        visit_official_site: "उज्ज्वला योजना की आधिकारिक साइट पर जाएँ",
        play_again: "फिर से खेलें",
        happiness_meter: "खुशी मीटर",
        knowledge_nugget: "ज्ञान की बात!",
        // Quest Steps Content
        q1_text: "सीता धुएँ वाली रसोई से थक गई है। उसके लिए सबसे अच्छा समाधान क्या है?",
        q1_c1: "उज्ज्वला सिलेंडर लेना",
        q1_c2: "बस एक खिड़की खोलना",
        q1_c3: "चिंटू को खाना बनाने में मदद के लिए कहना",
        q1_k: "सही! उज्ज्वला योजना स्वच्छ खाना पकाने का ईंधन प्रदान करने के लिए सरकार की योजना है।",
        q2_text: "आवेदन करने के लिए, सीता को अपने दस्तावेज़ इकट्ठा करने होंगे। उसे क्या ले जाना चाहिए?",
        q2_c1: "आधार और राशन कार्ड",
        q2_c2: "चिंटू की एक तस्वीर",
        q2_c3: "एक रेसिपी बुक",
        q2_k: "बहुत बढ़िया! आधार जैसे पहचान प्रमाण और राशन कार्ड जैसे पते के प्रमाण की आवश्यकता होती है।",
        q3_text: "रास्ते में, शर्मा आंटी कहती हैं, 'यह एलपीजी केवल अमीर लोगों के लिए है!' सीता को क्या जवाब देना चाहिए?",
        q3_c1: "नहीं, उज्ज्वला गरीब परिवारों के लिए है।",
        q3_c2: "ओह नहीं, आप सही कह रही हैं!",
        q3_c3: "चलो ट्रैक्टर के बारे में बात करते हैं।",
        q3_k: "एकदम सही! आपने एक मिथक को तोड़ दिया। उज्ज्वला विशेष रूप से सभी के लिए सस्ती होने के लिए डिज़ाइन की गई है।",
        q4_text: "सरपंच अपनी मंजूरी देते हैं! सीता के लिए सबसे बड़ा इनाम क्या है?",
        q4_c1: "एक नई, साफ-सुथरी रसोई!",
        q4_c2: "एक चमकदार लाल सिलेंडर।",
        q4_c3: "गपशप के लिए अधिक समय।",
        q4_k: "विजय! असली इनाम सीता और उसके परिवार के लिए एक स्वस्थ, धुआं मुक्त जीवन है!",
    },
};

// --- QUEST DATA (This structures the entire game) ---
const questSteps = [
    { background: kitchenOldBg, character: sitaDidiImg, questionKey: 'q1_text', knowledgeKey: 'q1_k', choices: [{ key: 'q1_c1', img: lpgCylinderImg }, { key: 'q1_c2' }, { key: 'q1_c3', img: chintuImg }], correctChoiceIndex: 0 },
    { background: villagePathBg, character: sitaDidiImg, questionKey: 'q2_text', knowledgeKey: 'q2_k', choices: [{ key: 'q2_c1', img: aadhaarImg }, { key: 'q2_c2', img: chintuImg }, { key: 'q2_c3' }], correctChoiceIndex: 0 },
    { background: villagePathBg, character: sharmaAuntyImg, questionKey: 'q3_text', knowledgeKey: 'q3_k', choices: [{ key: 'q3_c1' }, { key: 'q3_c2' }, { key: 'q3_c3' }], correctChoiceIndex: 0 },
    { background: villagePathBg, character: sarpanchImg, questionKey: 'q4_text', knowledgeKey: 'q4_k', choices: [{ key: 'q4_c1', img: kitchenNewBg }, { key: 'q4_c2', img: lpgCylinderImg }, { key: 'q4_c3' }], correctChoiceIndex: 0 },
];

const langCodeMap = { en: 'en-US', hi: 'hi-IN' };

// --- MAIN GAME COMPONENT ---
const Ujjwala = () => {
    // Core State
    const [gameState, setGameState] = useState('LANGUAGE_SELECTION');
    const [language, setLanguage] = useState('en');
    const [isMuted, setIsMuted] = useState(false);
    const [currentStep, setCurrentStep] = useState(0);
    const [happiness, setHappiness] = useState(0);
    const [feedback, setFeedback] = useState({ text: '', type: '', key: 0 });
    const [showKnowledge, setShowKnowledge] = useState(null);

    const t = useMemo(() => translations[language] || translations.en, [language]);

    // --- Core Functions ---
    const speak = (text) => {
        if (isMuted || !('speechSynthesis' in window)) return;
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = langCodeMap[language] || 'en-US';
        utterance.rate = 1.0;
        window.speechSynthesis.speak(utterance);
    };

    const handleChoice = (index) => {
        if (showKnowledge) return; // Prevent clicking while knowledge is shown
        
        const correctIndex = questSteps[currentStep].correctChoiceIndex;
        
        if (index === correctIndex) {
            // CORRECT ANSWER
            const knowledgeText = t[questSteps[currentStep].knowledgeKey];
            setShowKnowledge(knowledgeText);
            speak(knowledgeText);
            setHappiness(h => h + 100 / questSteps.length);

            setTimeout(() => {
                setShowKnowledge(null);
                if (currentStep < questSteps.length - 1) {
                    setCurrentStep(s => s + 1);
                } else {
                    setGameState('COMPLETE');
                    speak(t.game_complete_message);
                }
            }, 4000); // Time to read the knowledge nugget
        } else {
            // WRONG ANSWER
            setFeedback({ text: '🤔', type: 'wrong', key: Math.random() });
            setTimeout(() => setFeedback({ text: '', type: '', key: 0 }), 500);
        }
    };
    
    const resetGame = () => {
        window.speechSynthesis.cancel();
        setGameState('LANGUAGE_SELECTION');
        setCurrentStep(0);
        setHappiness(0);
        setShowKnowledge(null);
    };

    // --- Render Functions ---
    const renderHeader = () => (
        <div style={styles.header}>
            <div style={styles.happinessMeterOuter}>
                <div style={{...styles.happinessMeterInner, width: `${happiness}%`}} />
                <span style={styles.meterText}>{t.happiness_meter}</span>
            </div>
            <button onClick={() => setIsMuted(!isMuted)} style={styles.muteButton}> {isMuted ? '🔇' : '🔊'} </button>
        </div>
    );

    const GlobalStyles = () => (<style>{`
        @keyframes pop-in { 0% { transform: scale(0.5); opacity: 0; } 100% { transform: scale(1); opacity: 1; } }
        @keyframes slide-up { 0% { transform: translateY(50px); opacity: 0; } 100% { transform: translateY(0); opacity: 1; } }
        @keyframes shake { 0%, 100% { transform: translateX(0); } 10%, 50%, 90% { transform: translateX(-8px); } 30%, 70% { transform: translateX(8px); } }
        @keyframes pulse-green { 0% { box-shadow: 0 0 0 0 rgba(76, 175, 80, 0.7); } 70% { box-shadow: 0 0 0 20px rgba(76, 175, 80, 0); } 100% { box-shadow: 0 0 0 0 rgba(76, 175, 80, 0); } }
    `}</style>);

    // Main Render Switch
    const renderContent = () => {
        switch (gameState) {
            case 'LANGUAGE_SELECTION':
                return (
                    <div style={{...styles.screen, backgroundImage: `url(${villagePathBg})`}}>
                         <div style={styles.overlay}>
                            <img src={sitaDidiImg} alt="Sita Didi" style={{...styles.mainCharacter, animation: 'pop-in 0.5s ease-out'}}/>
                            <h1 style={styles.mainTitle}>{t.title}</h1>
                            <select onChange={(e) => setLanguage(e.target.value)} value={language} style={styles.dropdown}>
                                <option value="en">English</option><option value="hi">हिंदी (Hindi)</option>
                            </select>
                            <button style={styles.bigButton} onClick={() => setGameState('PLAYING')}>{t.start_quest}</button>
                        </div>
                    </div>
                );

            case 'PLAYING':
                const step = questSteps[currentStep];
                return (
                    <div style={{...styles.screen, backgroundImage: `url(${step.background})`}}>
                        {renderHeader()}
                        <div style={styles.questArea}>
                            <div style={styles.questionContainer}>
                                <img src={step.character} alt="Character" style={styles.questCharacter} />
                                <div style={styles.speechBubble}>
                                    {t[step.questionKey]}
                                </div>
                            </div>
                            <div style={styles.choicesContainer}>
                                {step.choices.map((choice, index) => (
                                    <button key={index} style={styles.choiceButton} onClick={() => handleChoice(index)}>
                                        {choice.img && <img src={choice.img} alt="" style={styles.choiceImage} />}
                                        <span style={styles.choiceText}>{t[choice.key]}</span>
                                    </button>
                                ))}
                            </div>
                        </div>
                        {showKnowledge && (
                            <div style={styles.knowledgeOverlay}>
                                <div style={styles.knowledgePopup}>
                                    <h2>{t.knowledge_nugget}</h2>
                                    <p>{showKnowledge}</p>
                                    <div style={{ animation: `pulse-green 1.5s infinite`}}>💡</div>
                                </div>
                            </div>
                        )}
                        {feedback.text && <div key={feedback.key} style={{...styles.feedback, animation: 'shake 0.4s'}}>{feedback.text}</div>}
                    </div>
                );

            case 'COMPLETE':
                 return (
                    <div style={{...styles.screen, backgroundImage: `url(${kitchenNewBg})`}}>
                        <div style={styles.overlay}>
                            <h1 style={styles.completionTitle}>{t.game_complete_title}</h1>
                            <img src={sitaDidiImg} alt="Happy Sita" style={{...styles.mainCharacter, height: '150px'}}/>
                            <p style={styles.completionMessage}>{t.game_complete_message}</p>
                            <div style={styles.buttonContainer}>
                                <a href="https://www.pmuy.gov.in/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                                    <button style={styles.applyButton}>{t.visit_official_site}</button>
                                </a>
                                <button style={styles.bigButton} onClick={resetGame}>{t.play_again}</button>
                            </div>
                        </div>
                    </div>
                );

            default: return <div>Loading...</div>;
        }
    };

    return (
        <div style={styles.gameContainer}>
            <GlobalStyles />
            {renderContent()}
        </div>
    );
};

// --- STYLES (Completely new, attractive design) ---
const styles = {
    // Core Layout
    gameContainer: { fontFamily: "'Baloo 2', cursive", width: '100%', maxWidth: '800px', margin: 'auto', backgroundColor: '#FFF8E1', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.2)', overflow: 'hidden', border: '8px solid #E65100', position: 'relative', minHeight: '600px' },
    screen: { width: '100%', minHeight: '600px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative' },
    overlay: { backgroundColor: 'rgba(255, 243, 224, 0.85)', width: '100%', minHeight: '600px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '20px', boxSizing: 'border-box' },

    // Header
    header: { position: 'absolute', top: 0, left: 0, width: '100%', padding: '15px', display: 'flex', alignItems: 'center', boxSizing: 'border-box', zIndex: 10, background: 'linear-gradient(180deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0) 100%)' },
    happinessMeterOuter: { flex: 1, height: '30px', backgroundColor: '#795548', borderRadius: '15px', border: '3px solid #fff', overflow: 'hidden', position: 'relative', boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.4)' },
    happinessMeterInner: { height: '100%', backgroundColor: '#8BC34A', background: 'linear-gradient(45deg, #8BC34A, #AED581)', borderRadius: '12px', transition: 'width 0.5s ease-in-out' },
    meterText: { position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold', textShadow: '1px 1px 2px black' },
    muteButton: { background: 'none', border: 'none', fontSize: '32px', cursor: 'pointer', marginLeft: '15px', color: 'white', textShadow: '1px 1px 3px black' },

    // Language/Completion Screen
    mainTitle: { color: '#BF360C', fontSize: '3rem', textShadow: '3px 3px #fff', textAlign: 'center' },
    mainCharacter: { maxHeight: '120px', marginBottom: '1rem' },
    dropdown: { padding: '12px 20px', fontSize: '18px', borderRadius: '10px', border: '3px solid #FF9800', margin: '1rem 0', fontWeight: 'bold' },
    bigButton: { padding: '15px 40px', fontSize: '22px', cursor: 'pointer', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '15px', fontWeight: 'bold', boxShadow: '0 6px #388E3C', textTransform: 'uppercase', transition: 'all 0.1s ease' },
    applyButton: { padding: '15px 30px', fontSize: '18px', cursor: 'pointer', backgroundColor: '#2196F3', color: 'white', border: 'none', borderRadius: '15px', fontWeight: 'bold', boxShadow: '0 6px #1976D2', transition: 'all 0.1s ease' },
    buttonContainer: { display: 'flex', gap: '20px', marginTop: '20px' },
    completionTitle: { color: '#2E7D32', fontSize: '3.5rem', textShadow: '3px 3px #fff', textAlign: 'center' },
    completionMessage: { fontSize: '1.2rem', color: '#3E2723', maxWidth: '80%', textAlign: 'center', margin: '1rem 0' },
    
    // Playing State
    questArea: { width: '100%', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '80px 20px 20px 20px', boxSizing: 'border-box' },
    questionContainer: { display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px', animation: 'pop-in 0.6s' },
    questCharacter: { maxHeight: '140px', filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))' },
    speechBubble: { backgroundColor: 'rgba(255, 255, 255, 0.95)', padding: '15px 25px', borderRadius: '20px', border: '4px solid #FFB74D', fontSize: '1.3rem', fontWeight: 'bold', color: '#4E342E', textAlign: 'center', maxWidth: '90%', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' },
    choicesContainer: { display: 'flex', justifyContent: 'center', alignItems: 'stretch', gap: '15px', flexWrap: 'wrap', padding: '20px 0', animation: 'slide-up 0.6s' },
    choiceButton: { background: 'linear-gradient(180deg, #ffffff, #f1f1f1)', border: '3px solid #FF9800', borderRadius: '15px', padding: '10px', width: '220px', cursor: 'pointer', boxShadow: '0 5px 10px rgba(0,0,0,0.1)', transition: 'transform 0.2s ease, box-shadow 0.2s ease', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' },
    choiceImage: { height: '60px', objectFit: 'contain' },
    choiceText: { fontSize: '1rem', color: '#5D4037', fontWeight: 'bold', textAlign: 'center' },
    
    // Popups and Feedback
    knowledgeOverlay: { position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.7)', zIndex: 20, display: 'flex', alignItems: 'center', justifyContent: 'center', animation: 'pop-in 0.3s' },
    knowledgePopup: { background: 'white', padding: '30px', borderRadius: '20px', textAlign: 'center', border: '5px solid #4CAF50', width: '80%', boxShadow: '0 0 20px rgba(0,0,0,0.5)', animation: 'pop-in 0.5s cubic-bezier(0.18, 0.89, 0.32, 1.28)' },
    feedback: { position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', fontSize: '100px', zIndex: 30, textShadow: '0 0 20px white' },
};

export default Ujjwala;