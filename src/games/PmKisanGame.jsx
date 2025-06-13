// src/games/PMKisan.jsx

import React, { useState, useMemo, useEffect, useRef } from "react";

// --- Audio Assets ---
const successSound = new Audio('https://actions.google.com/sounds/v1/coins/magic_coin_vanish.ogg');
const failureSound = new Audio('https://actions.google.com/sounds/v1/negative/failure.ogg');
const clickSound = new Audio('https://actions.google.com/sounds/v1/ui/ui_pop.ogg');
const stepSound = new Audio('https://actions.google.com/sounds/v1/transitions/transition_woosh.ogg');
const verifyingSound = new Audio('https://actions.google.com/sounds/v1/switches/switch_on.ogg');

// --- Farmer Avatars ---
const farmerAvatars = [
  { id: 'm1', emoji: '🧑‍🌾', name: { en: 'Ramesh', hi: 'रमेश', ta: 'ரமேஷ்', te: 'రమేష్', kn: 'ರಮೇಶ್' } },
  { id: 'f1', emoji: '👩‍🌾', name: { en: 'Sita', hi: 'सीता', ta: 'சீதா', te: 'సీత', kn: 'ಸೀತಾ' } },
  { id: 'm2', emoji: '👨‍🦳', name: { en: 'Balram', hi: 'बलराम', ta: 'பலராம்', te: 'బలరాం', kn: 'ಬಲರಾಮ್' } },
  { id: 'f2', emoji: '👩‍🦱', name: { en: 'Priya', hi: 'प्रिया', ta: 'பிரியா', te: 'ప్రియ', kn: 'ಪ್ರಿಯಾ' } },
];

// --- Multilingual Content ---
const gameData = {
  en: {
    langName: "English",
    title: "🌾 PM-Kisan Journey 🌾",
    gameSteps: {
      characterSelection: { title: "Choose Your Farmer", description: "Select a character to represent you on this journey." },
      start: { title: "Welcome, {farmerName}!", description: "Experience the journey of a PM-Kisan beneficiary. Let's see if you are eligible and how you receive the benefits.", button: "Start the Journey" },
      eligibility: {
        title: "Step 1: Eligibility Check",
        description: "Answer these questions to check your eligibility for the scheme.",
        questions: [{ key: 'isSmallFarmer', text: "Are you a small or marginal farmer family?" }, { key: 'isLandOwner', text: "Do you own cultivable land?" }, { key: 'isNotHighIncome', text: "Is your family's income below the high-income exclusion criteria?" }],
        button: "Check My Eligibility",
      },
      ekyc: { title: "Step 2: Complete eKYC", description: "Great! You seem eligible. The next mandatory step is to complete your eKYC using your Aadhaar. This is crucial for receiving funds.", button: "Verify with Aadhaar eKYC", verifyingText: "Verifying... Please wait." },
      installments: { title: "Step 3: Receive Your Installments", description: "Congratulations! Your account is active. Claim your installments as they are released by the government.", claimButton: "Claim ₹2000", receivedStatus: "✅ Received", accountBalance: "Your Samman Nidhi Balance:", status: { locked: "Locked", claimable: "Ready to Claim", releasedOn: "Released" } },
      results: { eligibleTitle: "🎉 Journey Complete! 🎉", eligibleMessage: "You have successfully received the full benefit of ₹6,000 for the year! This support helps farmers with their agricultural needs.", ineligibleTitle: "Eligibility Check Failed", ineligibleMessage: "Based on your answers, you may not be eligible for the PM-Kisan scheme. This scheme is for land-holding farmer families who meet specific criteria.", reason: "Reason for ineligibility:" },
    },
    common: { yes: "Yes", no: "No", playAgain: "Start a New Journey", helplineText: "For official information or help, visit the PM-Kisan Portal or call the helpline:", helplineNumber: "011-24300606, 155261", websiteLinkText: "Visit PM-Kisan Portal", progress: "Journey Progress", selectLanguage: "Language" },
  },
  hi: {
    langName: "हिन्दी",
    title: "🌾 पीएम-किसान यात्रा 🌾",
    gameSteps: {
      characterSelection: { title: "अपने किसान का चयन करें", description: "इस यात्रा पर आपका प्रतिनिधित्व करने के लिए एक पात्र चुनें।" },
      start: { title: "आपका स्वागत है, {farmerName}!", description: "पीएम-किसान लाभार्थी की यात्रा का अनुभव करें। आइए देखें कि क्या आप पात्र हैं और आप लाभ कैसे प्राप्त करते हैं।", button: "यात्रा शुरू करें" },
      eligibility: {
        title: "चरण 1: पात्रता जांच", description: "योजना के लिए अपनी पात्रता जांचने के लिए इन सवालों के जवाब दें।",
        questions: [{ key: 'isSmallFarmer', text: "क्या आप एक छोटे या सीमांत किसान परिवार से हैं?" }, { key: 'isLandOwner', text: "क्या आपके पास खेती योग्य भूमि है?" }, { key: 'isNotHighIncome', text: "क्या आपके परिवार की आय उच्च-आय बहिष्करण मानदंडों से नीचे है?" }],
        button: "मेरी पात्रता जांचें",
      },
      ekyc: { title: "चरण 2: eKYC पूरा करें", description: "बहुत बढ़िया! आप पात्र लगते हैं। अगला अनिवार्य कदम अपने आधार का उपयोग करके अपना eKYC पूरा करना है। यह धनराशि प्राप्त करने के लिए महत्वपूर्ण है।", button: "आधार eKYC से सत्यापित करें", verifyingText: "सत्यापित हो रहा है... कृपया प्रतीक्षा करें।" },
      installments: { title: "चरण 3: अपनी किस्तें प्राप्त करें", description: "बधाई हो! आपका खाता सक्रिय है। सरकार द्वारा जारी होते ही अपनी किस्तें क्लेम करें।", claimButton: "₹2000 क्लेम करें", receivedStatus: "✅ प्राप्त हुआ", accountBalance: "आपका सम्मान निधि बैलेंस:", status: { locked: "बंद है", claimable: "क्लेम के लिए तैयार", releasedOn: "जारी" } },
      results: { eligibleTitle: "🎉 यात्रा पूरी हुई! 🎉", eligibleMessage: "आपने वर्ष के लिए ₹6,000 का पूरा लाभ सफलतापूर्वक प्राप्त कर लिया है! यह समर्थन किसानों को उनकी कृषि आवश्यकताओं में मदद करता है।", ineligibleTitle: "पात्रता जांच विफल", ineligibleMessage: "आपके उत्तरों के आधार पर, आप पीएम-किसान योजना के लिए पात्र नहीं हो सकते हैं। यह योजना भूमि-धारक किसान परिवारों के लिए है जो विशिष्ट मानदंडों को पूरा करते हैं।", reason: "अपात्रता का कारण:" },
    },
    common: { yes: "हाँ", no: "नहीं", playAgain: "एक नई यात्रा शुरू करें", helplineText: "आधिकारिक जानकारी या सहायता के लिए, पीएम-किसान पोर्टल पर जाएं या हेल्पलाइन पर कॉल करें:", helplineNumber: "011-24300606, 155261", websiteLinkText: "पीएम-किसान पोर्टल पर जाएं", progress: "यात्रा प्रगति", selectLanguage: "भाषा" },
  },
  ta: {
    langName: "தமிழ்",
    title: "🌾 பிஎம்-கிசான் பயணம் 🌾",
    gameSteps: {
      characterSelection: { title: "உங்கள் விவசாயியைத் தேர்ந்தெடுங்கள்", description: "இந்தப் பயணத்தில் உங்களைப் பிரதிநிதித்துவப்படுத்த ஒரு பாத்திரத்தைத் தேர்ந்தெடுக்கவும்." },
      start: { title: "வருக, {farmerName}!", description: "பிஎம்-கிசான் பயனாளியின் பயணத்தை அனுபவியுங்கள். நீங்கள் தகுதியானவரா மற்றும் பலன்களை எவ்வாறு பெறுவீர்கள் என்று பார்ப்போம்.", button: "பயணத்தைத் தொடங்கு" },
      eligibility: {
        title: "படி 1: தகுதி சோதனை", description: "திட்டத்திற்கான உங்கள் தகுதியைச் சரிபார்க்க இந்தக் கேள்விகளுக்கு பதிலளிக்கவும்.",
        questions: [{ key: 'isSmallFarmer', text: "நீங்கள் ஒரு சிறு அல்லது குறு விவசாயி குடும்பமா?" }, { key: 'isLandOwner', text: "உங்களுக்கு விவசாய நிலம் உள்ளதா?" }, { key: 'isNotHighIncome', text: "உங்கள் குடும்ப வருமானம் உயர் வருமான விலக்கு வரம்பிற்குக் கீழே உள்ளதா?" }],
        button: "எனது தகுதியைச் சரிபார்க்கவும்",
      },
      ekyc: { title: "படி 2: eKYC-ஐ முடிக்கவும்", description: "அருமை! நீங்கள் தகுதியானவர். அடுத்த கட்டாய படி உங்கள் ஆதார் பயன்படுத்தி eKYC-ஐ முடிப்பதாகும். இது நிதி பெறுவதற்கு முக்கியமானது.", button: "ஆதார் eKYC மூலம் சரிபார்க்கவும்", verifyingText: "சரிபார்க்கிறது... ദയവായി കാത്തിരിക്കുക." },
      installments: { title: "படி 3: தவணைகளைப் பெறுங்கள்", description: "வாழ்த்துக்கள்! உங்கள் கணக்கு செயலில் உள்ளது. அரசாங்கம் வெளியிடும்போது உங்கள் தவணைகளைப் பெறுங்கள்.", claimButton: "₹2000 கோருங்கள்", receivedStatus: "✅ பெறப்பட்டது", accountBalance: "உங்கள் சம்மான் நிதி இருப்பு:", status: { locked: "பூட்டப்பட்டது", claimable: "கிளைம் செய்ய தயார்", releasedOn: "வெளியிடப்பட்டது" } },
      results: { eligibleTitle: "🎉 பயணம் முடிந்தது! 🎉", eligibleMessage: "நீங்கள் இந்த ஆண்டிற்கான ₹6,000 முழுப் பயனையும் வெற்றிகரமாகப் பெற்றுள்ளீர்கள்! இந்த ஆதரவு விவசாயிகளுக்கு அவர்களின் விவசாய தேவைகளுக்கு உதவுகிறது.", ineligibleTitle: "தகுதி சோதனை தோல்வி", ineligibleMessage: "உங்கள் பதில்களின் அடிப்படையில், நீங்கள் பிஎம்-கிசான் திட்டத்திற்குத் தகுதியற்றவராக இருக்கலாம். இந்தத் திட்டம் குறிப்பிட்ட தகுதிகளைப் பூர்த்தி செய்யும் நில உரிமையாளர் விவசாயிகளுக்கானது.", reason: "தகுதியற்றதற்கான காரணம்:" },
    },
    common: { yes: "ஆம்", no: "இல்லை", playAgain: "புதிய பயணத்தைத் தொடங்கு", helplineText: "அதிகாரப்பூர்வ தகவல் அல்லது உதவிக்கு, பிஎம்-கிசான் போர்ட்டலைப் பார்வையிடவும் அல்லது ஹெல்ப்லைனை அழைக்கவும்:", helplineNumber: "011-24300606, 155261", websiteLinkText: "பிஎம்-கிசான் போர்ட்டலைப் பார்வையிடவும்", progress: "பயண முன்னேற்றம்", selectLanguage: "மொழி" },
  },
  te: {
    langName: "తెలుగు",
    title: "🌾 పీఎం-కిసాన్ ప్రయాణం 🌾",
    gameSteps: {
      characterSelection: { title: "మీ రైతును ఎంచుకోండి", description: "ఈ ప్రయాణంలో మీకు ప్రాతినిధ్యం వహించడానికి ఒక పాత్రను ఎంచుకోండి." },
      start: { title: "స్వాగతం, {farmerName}!", description: "పీఎం-కిసాన్ లబ్ధిదారుని ప్రయాణాన్ని అనుభవించండి. మీరు అర్హులా మరియు ప్రయోజనాలను ఎలా పొందుతారో చూద్దాం.", button: "ప్రయాణం ప్రారంభించండి" },
      eligibility: {
        title: "దశ 1: అర్హత తనిఖీ", description: "పథకం కోసం మీ అర్హతను తనిఖీ చేయడానికి ఈ ప్రశ్నలకు సమాధానం ఇవ్వండి.",
        questions: [{ key: 'isSmallFarmer', text: "మీరు చిన్న లేదా సన్నకారు రైతు కుటుంబమా?" }, { key: 'isLandOwner', text: "మీకు సాగుకు యోగ్యమైన భూమి ఉందా?" }, { key: 'isNotHighIncome', text: "మీ కుటుంబ ఆదాయం అధిక-ఆదాయ మినహాయింపు ప్రమాణాల కంటే తక్కువగా ఉందా?" }],
        button: "నా అర్హతను తనిఖీ చేయండి",
      },
      ekyc: { title: "దశ 2: eKYC పూర్తి చేయండి", description: "అద్భుతం! మీరు అర్హులుగా కనిపిస్తున్నారు. తదుపరి తప్పనిసరి దశ మీ ఆధార్ ఉపయోగించి eKYC పూర్తి చేయడం. నిధులు స్వీకరించడానికి ఇది చాలా ముఖ్యం.", button: "ఆధార్ eKYCతో ధృవీకరించండి", verifyingText: "ధృవీకరిస్తోంది... దయచేసి వేచి ఉండండి." },
      installments: { title: "దశ 3: మీ వాయిదాలను పొందండి", description: "అభినందనలు! మీ ఖాతా చురుకుగా ఉంది. ప్రభుత్వం విడుదల చేసినప్పుడు మీ వాయిదాలను క్లెయిమ్ చేయండి.", claimButton: "₹2000 క్లెయిమ్ చేయండి", receivedStatus: "✅ స్వీకరించబడింది", accountBalance: "మీ సమ్మాన్ నిధి బ్యాలెన్స్:", status: { locked: "లాక్ చేయబడింది", claimable: "క్లెయిమ్ చేయడానికి సిద్ధంగా ఉంది", releasedOn: "విడుదల చేయబడింది" } },
      results: { eligibleTitle: "🎉 ప్రయాణం పూర్తయింది! 🎉", eligibleMessage: "మీరు సంవత్సరానికి ₹6,000 పూర్తి ప్రయోజనాన్ని విజయవంతంగా పొందారు! ఈ మద్దతు రైతులకు వారి వ్యవసాయ అవసరాలకు సహాయపడుతుంది.", ineligibleTitle: "అర్హత తనిఖీ విఫలమైంది", ineligibleMessage: "మీ సమాధానాల ఆధారంగా, మీరు పీఎం-కిసాన్ పథకానికి అర్హులు కాకపోవచ్చు. ఈ పథకం నిర్దిష్ట ప్రమాణాలను పాటించే భూమి-గల రైతు కుటుంబాల కోసం ఉద్దేశించబడింది.", reason: "అర్హత లేకపోవడానికి కారణం:" },
    },
    common: { yes: "అవును", no: "కాదు", playAgain: "కొత్త ప్రయాణం ప్రారంభించండి", helplineText: "అధికారిక సమాచారం లేదా సహాయం కోసం, పీఎం-కిసాన్ పోర్టల్‌ను సందర్శించండి లేదా హెల్ప్‌లైన్‌కు కాల్ చేయండి:", helplineNumber: "011-24300606, 155261", websiteLinkText: "పీఎం-కిసాన్ పోర్టల్‌ను సందర్శించండి", progress: "ప్రయాణ పురోగతి", selectLanguage: "భాష" },
  },
  kn: {
    langName: "ಕನ್ನಡ",
    title: "🌾 ಪಿಎಂ-ಕಿಸಾನ್ ಪ್ರಯಾಣ 🌾",
    gameSteps: {
      characterSelection: { title: "ನಿಮ್ಮ ರೈತರನ್ನು ಆರಿಸಿ", description: "ಈ ಪ್ರಯಾಣದಲ್ಲಿ ನಿಮ್ಮನ್ನು ಪ್ರತಿನಿಧಿಸಲು ಒಂದು ಪಾತ್ರವನ್ನು ಆಯ್ಕೆಮಾಡಿ." },
      start: { title: "ಸ್ವಾಗತ, {farmerName}!", description: "ಪಿಎಂ-ಕಿಸಾನ್ ಫಲಾನುಭವಿಯ ಪ್ರಯಾಣವನ್ನು ಅನುಭವಿಸಿ. ನೀವು ಅರ್ಹರೇ ಮತ್ತು ಪ್ರಯೋಜನಗಳನ್ನು ಹೇಗೆ ಪಡೆಯುತ್ತೀರಿ ಎಂದು ನೋಡೋಣ.", button: "ಪ್ರಯಾಣವನ್ನು ಪ್ರಾರಂಭಿಸಿ" },
      eligibility: {
        title: "ಹಂತ 1: ಅರ್ಹತಾ ಪರಿಶೀಲನೆ", description: "ಯೋಜನೆಗೆ ನಿಮ್ಮ ಅರ್ಹತೆಯನ್ನು ಪರಿಶೀಲಿಸಲು ಈ ಪ್ರಶ್ನೆಗಳಿಗೆ ಉತ್ತರಿಸಿ.",
        questions: [{ key: 'isSmallFarmer', text: "ನೀವು ಸಣ್ಣ ಅಥವಾ ಅತಿ ಸಣ್ಣ ರೈತ ಕುಟುಂಬವೇ?" }, { key: 'isLandOwner', text: "ನೀವು ಕೃಷಿಯೋಗ್ಯ ಭೂಮಿಯನ್ನು ಹೊಂದಿದ್ದೀರಾ?" }, { key: 'isNotHighIncome', text: "ನಿಮ್ಮ ಕುಟುಂಬದ ಆದಾಯವು ಅಧಿಕ-ಆದಾಯದ ಹೊರಗಿಡುವಿಕೆಯ ಮಾನದಂಡಗಳಿಗಿಂತ ಕಡಿಮೆಯಿದೆಯೇ?" }],
        button: "ನನ್ನ ಅರ್ಹತೆಯನ್ನು ಪರಿಶೀಲಿಸಿ",
      },
      ekyc: { title: "ಹಂತ 2: eKYC ಪೂರ್ಣಗೊಳಿಸಿ", description: "ಅದ್ಭುತ! ನೀವು ಅರ್ಹರಾಗಿದ್ದೀರಿ. ಮುಂದಿನ ಕಡ್ಡಾಯ ಹಂತವೆಂದರೆ ನಿಮ್ಮ ಆಧಾರ್ ಬಳಸಿ eKYC ಅನ್ನು ಪೂರ್ಣಗೊಳಿಸುವುದು. ಹಣವನ್ನು ಸ್ವೀಕರಿಸಲು ಇದು ನಿರ್ಣಾಯಕವಾಗಿದೆ.", button: "ಆಧಾರ್ ಇಕೆವೈಸಿ ಮೂಲಕ ಪರಿಶೀಲಿಸಿ", verifyingText: "ಪರಿಶೀಲಿಸಲಾಗುತ್ತಿದೆ... ದಯವಿಟ್ಟು ನಿರೀಕ್ಷಿಸಿ." },
      installments: { title: "ಹಂತ 3: ನಿಮ್ಮ ಕಂತುಗಳನ್ನು ಸ್ವೀಕರಿಸಿ", description: "ಅಭಿನಂದನೆಗಳು! ನಿಮ್ಮ ಖಾತೆ ಸಕ್ರಿಯವಾಗಿದೆ. ಸರ್ಕಾರವು ಬಿಡುಗಡೆ ಮಾಡಿದಂತೆ ನಿಮ್ಮ ಕಂತುಗಳನ್ನು ಕ್ಲೈಮ್ ಮಾಡಿ.", claimButton: "₹2000 ಕ್ಲೈಮ್ ಮಾಡಿ", receivedStatus: "✅ ಸ್ವೀಕರಿಸಲಾಗಿದೆ", accountBalance: "ನಿಮ್ಮ ಸಮ್ಮಾನ್ ನಿಧಿ ಬ್ಯಾಲೆನ್ಸ್:", status: { locked: "ಲಾಕ್ ಆಗಿದೆ", claimable: "ಕ್ಲೈಮ್ ಮಾಡಲು ಸಿದ್ಧ", releasedOn: "ಬಿಡುಗಡೆಯಾಗಿದೆ" } },
      results: { eligibleTitle: "🎉 ಪ್ರಯಾಣ ಪೂರ್ಣಗೊಂಡಿದೆ! 🎉", eligibleMessage: "ನೀವು ವರ್ಷಕ್ಕೆ ₹6,000 ಪೂರ್ಣ ಪ್ರಯೋಜನವನ್ನು ಯಶಸ್ವಿಯಾಗಿ ಪಡೆದಿದ್ದೀರಿ! ಈ ಆರ್ಥಿಕ ಬೆಂಬಲವು ರೈತರಿಗೆ ಅವರ ಕೃಷಿ ಅಗತ್ಯಗಳಿಗೆ ಸಹಾಯ ಮಾಡುತ್ತದೆ.", ineligibleTitle: "ಅರ್ಹತಾ ಪರಿಶೀಲನೆ ವಿಫಲವಾಗಿದೆ", ineligibleMessage: "ನಿಮ್ಮ ಉತ್ತರಗಳ ಆಧಾರದ ಮೇಲೆ, ನೀವು ಪಿಎಂ-ಕಿಸಾನ್ ಯೋಜನೆಗೆ ಅರ್ಹರಲ್ಲದಿರಬಹುದು. ಈ ಯೋಜನೆಯು ನಿರ್ದಿಷ್ಟ ಮಾನದಂಡಗಳನ್ನು ಪೂರೈಸುವ ಭೂ-ಹಿಡುವಳಿ ರೈತ ಕುಟುಂಬಗಳಿಗೆ ಆಗಿದೆ.", reason: "ಅನರ್ಹತೆಗೆ ಕಾರಣ:" },
    },
    common: { yes: "ಹೌದು", no: "ಇಲ್ಲ", playAgain: "ಹೊಸ ಪ್ರಯಾಣವನ್ನು ಪ್ರಾರಂಭಿಸಿ", helplineText: "ಅಧಿಕೃತ ಮಾಹಿತಿ ಅಥವಾ ಸಹಾಯಕ್ಕಾಗಿ, ಪಿಎಂ-ಕಿಸಾನ್ ಪೋರ್ಟಲ್‌ಗೆ ಭೇಟಿ ನೀಡಿ ಅಥವಾ ಸಹಾಯವಾಣಿಗೆ ಕರೆ ಮಾಡಿ:", helplineNumber: "011-24300606, 155261", websiteLinkText: "ಪಿಎಂ-ಕಿಸಾನ್ ಪೋರ್ಟಲ್‌ಗೆ ಭೇಟಿ ನೀಡಿ", progress: "ಪ್ರಯಾಣದ ಪ್ರಗತಿ", selectLanguage: "ಭಾಷೆ" },
  },
};

const gameJourneySteps = ['characterSelection', 'start', 'eligibility', 'ekyc', 'installments', 'end'];
const initialInstallmentState = [{status: 'locked'}, {status: 'locked'}, {status: 'locked'}];

// --- Main Component ---
const PMKisan = ({ initialLang = 'en' }) => {
  const [currentLang, setCurrentLang] = useState(initialLang);
  const [gameStep, setGameStep] = useState('characterSelection');
  const [farmerAvatar, setFarmerAvatar] = useState(null);
  const [eligibilityAnswers, setEligibilityAnswers] = useState({});
  const [isEligible, setIsEligible] = useState(false);
  const [installments, setInstallments] = useState(initialInstallmentState);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);
  const backgroundMusicRef = useRef(null);

  const langContent = useMemo(() => gameData[currentLang] || gameData.en, [currentLang]);
  const totalAmount = useMemo(() => installments.filter(i => i.status === 'received').length * 2000, [installments]);
  const progressPercent = useMemo(() => ((gameJourneySteps.indexOf(gameStep)) / (gameJourneySteps.length - 1)) * 100, [gameStep]);

  useEffect(() => { setCurrentLang(initialLang); }, [initialLang]);
  useEffect(() => { const music = backgroundMusicRef.current; music.volume = 0.1; return () => { music.pause(); if ('speechSynthesis' in window) speechSynthesis.cancel(); }; }, []);
  useEffect(() => { const stepContent = langContent.gameSteps[gameStep]; if(stepContent) { const title = gameStep === 'start' ? stepContent.title.replace('{farmerName}', farmerAvatar?.name[currentLang] || '') : stepContent.title; const text = `${title}. ${stepContent.description || ''}`; setTimeout(() => speakText(text, currentLang), 400); } }, [gameStep, currentLang, farmerAvatar]);

  // Simulate installment release
  useEffect(() => {
    if (gameStep === 'installments') {
      const timers = [
        setTimeout(() => setInstallments(prev => { const next = [...prev]; next[0].status = 'claimable'; return next; }), 1000),
        setTimeout(() => setInstallments(prev => { const next = [...prev]; next[1].status = 'claimable'; return next; }), 3000),
        setTimeout(() => setInstallments(prev => { const next = [...prev]; next[2].status = 'claimable'; return next; }), 5000),
      ];
      return () => timers.forEach(clearTimeout);
    }
  }, [gameStep]);

  const speakText = (text, langCode) => { if ('speechSynthesis' in window) { speechSynthesis.cancel(); const u = new SpeechSynthesisUtterance(text); u.lang = langCode + '-IN'; u.rate = 0.9; speechSynthesis.speak(u); } };
  const toggleMusic = () => { const music = backgroundMusicRef.current; if (isMusicPlaying) { music.pause(); } else { music.play().catch(e => console.error("Autoplay prevented:", e)); } setIsMusicPlaying(!isMusicPlaying); };

  const changeStep = (newStep) => { setGameStep('transition'); setTimeout(() => { stepSound.play(); setGameStep(newStep); }, 300); };
  
  const handleSelectAvatar = (avatar) => { clickSound.play(); setFarmerAvatar(avatar); changeStep('start'); };
  const handleStartGame = () => { clickSound.play(); changeStep('eligibility'); };
  
  const handleEligibilityChange = (key, value) => { setEligibilityAnswers(prev => ({ ...prev, [key]: value })); };
  const handleCheckEligibility = () => {
    const allYes = langContent.gameSteps.eligibility.questions.every(q => eligibilityAnswers[q.key] === true);
    if (allYes) { successSound.play(); setIsEligible(true); changeStep('ekyc'); } 
    else { failureSound.play(); setIsEligible(false); changeStep('end'); }
  };

  const handleEkycComplete = () => {
    clickSound.play();
    verifyingSound.play();
    setIsVerifying(true);
    setTimeout(() => {
      setIsVerifying(false);
      successSound.play();
      changeStep('installments');
    }, 2500);
  };
  
  const handleClaimInstallment = (index) => {
    if (installments[index].status === 'claimable') {
      successSound.play();
      setInstallments(prev => { const next = [...prev]; next[index].status = 'received'; return next; });
    }
  };
  
  useEffect(() => {
    const allReceived = installments.every(i => i.status === 'received');
    if (allReceived) { setTimeout(() => changeStep('end'), 1500); }
  }, [installments]);

  const handleRestart = () => {
    clickSound.play();
    setGameStep('characterSelection');
    setFarmerAvatar(null);
    setEligibilityAnswers({});
    setIsEligible(false);
    setInstallments(initialInstallmentState);
  };

  // --- RENDER FUNCTIONS ---
  const renderCharacterSelection = () => (
    <>
      <h2 style={styles.title}>{langContent.gameSteps.characterSelection.title}</h2>
      <p style={styles.description}>{langContent.gameSteps.characterSelection.description}</p>
      <div style={styles.avatarContainer}>
        {farmerAvatars.map(avatar => (
          <button key={avatar.id} style={styles.avatarButton} onClick={() => handleSelectAvatar(avatar)}>
            <span style={styles.avatarEmoji}>{avatar.emoji}</span>
            <span style={styles.avatarName}>{avatar.name[currentLang]}</span>
          </button>
        ))}
      </div>
    </>
  );

  const renderStartScreen = () => (
    <>
      <h2 style={styles.title}>{langContent.gameSteps.start.title.replace('{farmerName}', farmerAvatar?.name[currentLang] || '')}</h2>
      <p style={styles.description}>{langContent.gameSteps.start.description}</p>
      <button style={styles.actionButton} onClick={handleStartGame}>{langContent.gameSteps.start.button}</button>
    </>
  );

  const renderEligibilityCheck = () => (
    <>
      <h2 style={styles.title}>{langContent.gameSteps.eligibility.title}</h2>
      <div style={styles.eligibilityForm}>
        {langContent.gameSteps.eligibility.questions.map(q => (
          <div key={q.key} style={styles.eligibilityQuestion}>
            <label style={styles.questionLabel}>{q.text}</label>
            <div style={styles.radioGroup}>
              <button onClick={() => handleEligibilityChange(q.key, true)} style={eligibilityAnswers[q.key] === true ? styles.radioSelected : styles.radio}>{langContent.common.yes}</button>
              <button onClick={() => handleEligibilityChange(q.key, false)} style={eligibilityAnswers[q.key] === false ? styles.radioSelected : styles.radio}>{langContent.common.no}</button>
            </div>
          </div>
        ))}
      </div>
      <button style={styles.actionButton} onClick={handleCheckEligibility}>{langContent.gameSteps.eligibility.button}</button>
    </>
  );

  const renderEkycStep = () => (
    <>
      <h2 style={styles.title}>{langContent.gameSteps.ekyc.title}</h2>
      <p style={styles.description}>{langContent.gameSteps.ekyc.description}</p>
      <div style={styles.iconBox}>📑 ➡️ 👍 ➡️ ✅</div>
      {isVerifying ? (
        <div style={styles.verifyingBox}>
          <div style={styles.spinner}></div>
          {langContent.gameSteps.ekyc.verifyingText}
        </div>
      ) : (
        <button style={styles.actionButton} onClick={handleEkycComplete}>{langContent.gameSteps.ekyc.button}</button>
      )}
    </>
  );
  
  const renderInstallmentsStep = () => (
    <>
      <h2 style={styles.title}>{langContent.gameSteps.installments.title}</h2>
      <div style={styles.accountBalanceBox}>
        <p style={styles.accountBalanceLabel}>{langContent.gameSteps.installments.accountBalance}</p>
        <p style={styles.accountBalanceAmount}>₹ {totalAmount.toLocaleString('en-IN')}</p>
      </div>
      <div style={styles.installmentsContainer}>
        {installments.map((inst, i) => (
          <div key={i} style={{...styles.installmentCard, ...styles.installmentCardStatus[inst.status]}}>
            <h4>Installment {i + 1}</h4>
            {inst.status === 'locked' && <div style={styles.statusBadge}><span>🔒</span> {langContent.gameSteps.installments.status.locked}</div>}
            {inst.status === 'received' && <div style={{...styles.statusBadge, ...styles.statusBadgeReceived}}><span>✅</span> {langContent.gameSteps.installments.status.releasedOn}</div>}
            {inst.status === 'claimable' && <button onClick={() => handleClaimInstallment(i)} style={styles.claimButton}>{langContent.gameSteps.installments.claimButton}</button>}
          </div>
        ))}
      </div>
    </>
  );

  const renderEndScreen = () => (
    <>
      <h2 style={styles.title}>{isEligible ? langContent.gameSteps.results.eligibleTitle : langContent.gameSteps.results.ineligibleTitle}</h2>
      <p style={styles.description}>{isEligible ? langContent.gameSteps.results.eligibleMessage : langContent.gameSteps.results.ineligibleMessage}</p>
      {!isEligible && Object.values(eligibilityAnswers).includes(false) && (
        <div style={styles.reasonBox}>
            <strong>{langContent.gameSteps.results.reason}</strong>
            <ul>{langContent.gameSteps.eligibility.questions.map(q => eligibilityAnswers[q.key] === false && <li key={q.key}>{q.text} ({langContent.common.no})</li>)}</ul>
        </div>
      )}
      <div style={styles.infoBox}>
          <p>{langContent.common.helplineText}</p>
          <span style={styles.helplineNumber}>{langContent.common.helplineNumber}</span>
          <a href="https://pmkisan.gov.in/" target="_blank" rel="noopener noreferrer" style={styles.websiteLink}>{langContent.common.websiteLinkText}</a>
      </div>
      <button style={styles.actionButton} onClick={handleRestart}>{langContent.common.playAgain}</button>
    </>
  );

  const renderCurrentStep = () => {
    const stepMap = {
      characterSelection: renderCharacterSelection,
      start: renderStartScreen,
      eligibility: renderEligibilityCheck,
      ekyc: renderEkycStep,
      installments: renderInstallmentsStep,
      end: renderEndScreen,
      transition: () => <div style={styles.transitionScreen}></div>,
    };
    return (stepMap[gameStep] || renderCharacterSelection)();
  };

  return (
    <div style={styles.container}>
      <audio ref={backgroundMusicRef} src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" loop />
      <div style={styles.overlay}>
        <div style={styles.header}>
            <div style={styles.langSelector}>
                <label htmlFor="lang-select">{langContent.common.selectLanguage}:</label>
                <select id="lang-select" value={currentLang} onChange={e => setCurrentLang(e.target.value)} style={styles.langDropdown}>
                    {Object.keys(gameData).map(langKey => <option key={langKey} value={langKey}>{gameData[langKey].langName}</option>)}
                </select>
            </div>
            <div style={styles.headerControls}>
                {farmerAvatar && <span style={styles.avatarDisplay}>{farmerAvatar.emoji}</span>}
                <button onClick={() => { const stepContent = langContent.gameSteps[gameStep]; if(stepContent) speakText(stepContent.title + '. ' + stepContent.description, currentLang) }} style={styles.controlButton} title="Read instruction">🔊</button>
                <button onClick={toggleMusic} style={styles.controlButton} title={isMusicPlaying ? "Pause Music" : "Play Music"}>{isMusicPlaying ? '🎵' : '🔇'}</button>
            </div>
        </div>

        <div style={styles.progressBarContainer}>
            <div style={styles.progressBar}>
                <div style={{...styles.progressIndicator, width: `${progressPercent}%`}}></div>
            </div>
        </div>

        <div style={styles.gameContent}>
          {renderCurrentStep()}
        </div>
      </div>
    </div>
  );
};

// ======================================================================
// Styles (with enhancements for new features)
// ======================================================================
const styles = {
  container: { position: 'relative', fontFamily: 'Arial, sans-serif', maxWidth: '800px', margin: '20px auto', borderRadius: '15px', overflow: 'hidden', border: '4px solid #1e8449',
    backgroundImage: `url('https://www.transparenttextures.com/patterns/green-dust-and-scratches.png'), linear-gradient(to bottom, #d8f3dc, #a8d5ba)`, backgroundSize: 'auto, cover'
  },
  overlay: { background: 'rgba(255, 255, 255, 0.6)', minHeight: '85vh', padding: '15px', display: 'flex', flexDirection: 'column' },
  header: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px', flexWrap: 'wrap', gap: '15px' },
  langSelector: { display: 'flex', alignItems: 'center', gap: '8px', background: 'rgba(255,255,255,0.8)', padding: '5px 10px', borderRadius: '8px', color: '#155724', fontWeight: 'bold' },
  langDropdown: { border: '2px solid #28a745', borderRadius: '5px', padding: '3px', background: 'white' },
  headerControls: { display: 'flex', gap: '10px', alignItems: 'center' },
  avatarDisplay: { fontSize: '2rem', background: 'white', borderRadius: '50%', padding: '5px', border: '2px solid #28a745' },
  controlButton: { background: 'white', border: '2px solid #28a745', borderRadius: '50%', width: '40px', height: '40px', fontSize: '1.2rem', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'transform 0.1s', ':active': { transform: 'scale(0.9)' } },
  progressBarContainer: { width: '100%', marginBottom: '20px' },
  progressBar: { height: '12px', backgroundColor: 'rgba(40, 167, 69, 0.2)', borderRadius: '6px', overflow: 'hidden' },
  progressIndicator: { height: '100%', backgroundColor: '#28a745', borderRadius: '6px', transition: 'width 0.5s ease-in-out' },
  gameContent: { flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', textAlign: 'center' },
  transitionScreen: { animation: 'fadeIn 0.3s ease-in-out' },
  title: { color: '#155724', fontSize: '2.2rem', marginBottom: '15px', textShadow: '1px 1px 2px rgba(0,0,0,0.1)' },
  description: { fontSize: '1.1rem', color: '#333', maxWidth: '600px', margin: '0 auto 25px auto', lineHeight: '1.6' },
  actionButton: { padding: '12px 30px', fontSize: '1.1rem', color: 'white', backgroundColor: '#28a745', border: 'none', borderRadius: '8px', cursor: 'pointer', marginTop: '20px', transition: 'all 0.2s', boxShadow: '0 4px #1e8449', ':hover': { transform: 'translateY(-2px)' }, ':active': { transform: 'translateY(2px)', boxShadow: '0 2px #1e8449' } },
  avatarContainer: { display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center', marginTop: '20px' },
  avatarButton: { background: 'white', border: '3px solid #ccc', borderRadius: '15px', cursor: 'pointer', padding: '15px', transition: 'all 0.2s ease-in-out', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '5px', ':hover': { borderColor: '#28a745', transform: 'scale(1.1)' } },
  avatarEmoji: { fontSize: '4rem' },
  avatarName: { fontWeight: 'bold', color: '#155724' },
  eligibilityForm: { display: 'flex', flexDirection: 'column', gap: '15px', margin: '20px 0', width: '100%', maxWidth: '500px' },
  eligibilityQuestion: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'rgba(255,255,255,0.8)', padding: '10px 15px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' },
  questionLabel: { textAlign: 'left', flex: 1, marginRight: '10px' },
  radioGroup: { display: 'flex', gap: '10px' },
  radio: { padding: '8px 15px', border: '2px solid #ccc', borderRadius: '5px', cursor: 'pointer', backgroundColor: 'transparent' },
  radioSelected: { padding: '8px 15px', border: '2px solid #28a745', borderRadius: '5px', cursor: 'pointer', backgroundColor: '#d4edda', fontWeight: 'bold' },
  iconBox: { fontSize: '3rem', margin: '20px 0', letterSpacing: '1rem' },
  verifyingBox: { display: 'flex', alignItems: 'center', gap: '15px', fontSize: '1.2rem', color: '#155724', fontWeight: 'bold' },
  spinner: { border: '4px solid rgba(0, 0, 0, 0.1)', width: '36px', height: '36px', borderRadius: '50%', borderLeftColor: '#28a745', animation: 'spin 1s ease infinite' },
  accountBalanceBox: { backgroundColor: 'white', padding: '15px 25px', borderRadius: '10px', boxShadow: '0 4px 10px rgba(0,0,0,0.1)', margin: '10px 0 30px 0', border: '2px solid #28a745' },
  accountBalanceLabel: { margin: 0, color: '#555', fontSize: '1rem' },
  accountBalanceAmount: { margin: '5px 0 0 0', color: '#155724', fontSize: '2.5rem', fontWeight: 'bold' },
  installmentsContainer: { display: 'flex', gap: '20px', justifyContent: 'center', width: '100%', flexWrap: 'wrap' },
  installmentCard: { flex: '1 1 200px', backgroundColor: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)', border: '2px solid', transition: 'all 0.3s' },
  installmentCardStatus: { locked: { borderColor: '#ccc', backgroundColor: '#f8f9fa' }, claimable: { borderColor: '#007bff', transform: 'scale(1.05)' }, received: { borderColor: '#28a745', backgroundColor: '#f0fff4' } },
  statusBadge: { display: 'flex', alignItems: 'center', gap: '8px', justifyContent: 'center', padding: '8px', borderRadius: '5px', background: '#e9ecef', color: '#495057', fontWeight: 'bold' },
  statusBadgeReceived: { background: '#d4edda', color: '#155724' },
  claimButton: { padding: '10px 20px', fontSize: '1rem', color: 'white', backgroundColor: '#007bff', border: 'none', borderRadius: '5px', cursor: 'pointer', ':disabled': { backgroundColor: '#ccc' } },
  infoBox: { textAlign: 'center', backgroundColor: '#f8f9fa', border: '1px solid #dee2e6', borderRadius: '8px', padding: '20px', marginTop: '20px', maxWidth: '600px', margin: '20px auto' },
  reasonBox: { textAlign: 'left', backgroundColor: '#fbe9e7', border: '1px solid #ffab91', color: '#c62828', borderRadius: '8px', padding: '15px', margin: '0 auto 20px auto', maxWidth: '600px', '& ul': { paddingLeft: '20px' } },
  helplineNumber: { display: 'block', fontSize: '1.5rem', fontWeight: 'bold', color: '#155724', margin: '10px 0' },
  websiteLink: { display: 'inline-block', padding: '10px 25px', backgroundColor: '#28a745', color: 'white', textDecoration: 'none', borderRadius: '5px', fontWeight: 'bold', marginTop: '10px' },
};

// Add keyframes for animations to the document head
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = `
@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
@keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
`;
document.head.appendChild(styleSheet);


export default PMKisan;