// src/games/Ujjwala.jsx

import React, { useState, useMemo, useEffect, useRef } from "react";
import UjjwalaYojana from "../assets/UjjwalaYojana.mp4"
// --- Audio Assets ---
const correctAnswerSound = new Audio('https://actions.google.com/sounds/v1/positive/correct.ogg');
const wrongAnswerSound = new Audio('https://actions.google.com/sounds/v1/negative/failure.ogg');
const gameStartSound = new Audio('https://actions.google.com/sounds/v1/alarms/digital_watch_alarm_long.ogg');
const transformationSound = new Audio('https://actions.google.com/sounds/v1/impacts/magical_chime.ogg');

// --- Full Multilingual Content for the New Game ---
const gameData = {
  en: {
    title: "🪔 Ujjwala's Happy Kitchen 🪔",
    intro: { description: "Play a fun game to learn about the Ujjwala scheme and see how it helps families like yours!", startButton: "Play Game" },
    quizIntro: { title: "Step 1: The Knowledge Challenge!", instruction: "Answer these questions to earn the new gas cylinder!" },
    game2: { instruction: "You passed the quiz! Now, let's change the kitchen. Drag the old stove out.", instruction2: "Perfect! Now bring in the new LPG cylinder.", success: "Look! A clean and happy kitchen!" },
    videoUrl: UjjwalaYojana,
    videoNotSupported: "Your browser does not support the video tag.",
    questions: [ { type: 'mcq', points: 10, question: "When was the PMUY (Pradhan Mantri Ujjwala Yojana) scheme launched?", options: [ { id: 1, text: "August 2015", isCorrect: false }, { id: 2, text: "May 2016", isCorrect: true }, { id: 3, text: "January 2017", isCorrect: false }, { id: 4, text: "October 2018", isCorrect: false } ], feedbackCorrect: "✅ Correct!", feedbackIncorrect: "❌ Oops, try again!" }, { type: 'mcq', points: 10, question: "What is the primary objective of the Ujjwala Yojana?", options: [ { id: 1, text: "Providing electricity", isCorrect: false }, { id: 2, text: "Building toilets", isCorrect: false }, { id: 3, text: "Providing clean cooking fuel (LPG)", isCorrect: true }, { id: 4, text: "Offering financial loans", isCorrect: false } ], feedbackCorrect: "✅ That's right!", feedbackIncorrect: "❌ Not quite." }, { type: 'match', points: 15, question: "Match the feature with its description.", columns: { a: [ { id: 'm1', text: 'Ujjwala 2.0' }, { id: 'm2', text: 'Target Beneficiary' }, { id: 'm3', text: 'Financial Assistance' } ], b: [ { id: 'm1', text: 'Launched in 2021' }, { id: 'm2', text: 'Women from BPL families' }, { id: 'm3', text: '₹1600 for a new connection' } ] }, correctOrder: { m1: 'm1', m2: 'm2', m3: 'm3' } }, { type: 'mcq', points: 10, question: "Ujjwala 2.0 was launched in which year?", options: [ { id: 1, text: "2019", isCorrect: false }, { id: 2, text: "2020", isCorrect: false }, { id: 3, text: "2021", isCorrect: true }, { id: 4, text: "2022", isCorrect: false } ], feedbackCorrect: "✅ Exactly!", feedbackIncorrect: "❌ The correct year is 2021." }, { type: 'mcq', points: 10, question: "Which ministry implements the PMUY scheme?", options: [ { id: 1, text: "Ministry of Finance", isCorrect: false }, { id: 2, text: "Ministry of Petroleum & Gas", isCorrect: true }, { id: 3, text: "Ministry of Women", isCorrect: false }, { id: 4, text: "Ministry of Rural Development", isCorrect: false } ], feedbackCorrect: "✅ Correct!", feedbackIncorrect: "❌ It's the Ministry of Petroleum & Gas." } ],
    results: { title: "Game Complete!", scoreText: "Your Helper Score:", playAgain: "Play Again" },
    common: { skipVideo: "Skip Video", checkAnswer: "Check Answer", nextQuestion: "Next Question", nextStep: "Next Step" },
    postQuiz: { askApply: "Have you or your family applied for the Ujjwala Yojana?", yesButton: "Yes, we have", noButton: "No, tell me more", infoTitle: "How to Apply for PM Ujjwala Yojana", infoText: "You can apply both online and offline. Visit your nearest LPG distribution agency or a Common Service Center (CSC) with necessary documents like your Aadhaar card and ration card.", helplineText: "For more information, call the toll-free helpline:", helplineNumber: "1800-266-6696", websiteText: "Or visit the official website:", websiteLinkText: "Visit pmuy.gov.in", appliedMessageTitle: "That's Wonderful!", appliedMessageText: "Help spread the word so others can benefit too. Share this scheme with your friends and family!", shareButton: "Share Scheme" }
  },
  hi: {
    title: "🪔 उज्ज्वला की खुशहाल रसोई 🪔",
    intro: { description: "उज्ज्वला योजना के बारे में जानने और यह देखने के लिए कि यह आपके जैसे परिवारों की कैसे मदद करती है, एक मजेदार खेल खेलें!", startButton: "खेल शुरू करें" },
    quizIntro: { title: "पहला चरण: ज्ञान चुनौती!", instruction: "नया गैस सिलेंडर अनलॉक करने के लिए इन सवालों के जवाब दें!" },
    game2: { instruction: "आपने क्विज़ पास कर लिया! अब, रसोई बदलते हैं। पुराने चूल्हे को बाहर खींचें।", instruction2: "उत्तम! अब नया LPG सिलेंडर ले आओ।", success: "देखो! एक स्वच्छ और खुशहाल रसोई!" },
    questions: [ { type: 'mcq', points: 10, question: "PMUY योजना कब शुरू की गई थी?", options: [ { id: 1, text: "अगस्त 2015", isCorrect: false }, { id: 2, text: "मई 2016", isCorrect: true }, { id: 3, text: "जनवरी 2017", isCorrect: false }, { id: 4, text: "अक्टूबर 2018", isCorrect: false } ], feedbackCorrect: "✅ सही!", feedbackIncorrect: "❌ ओह, फिर से प्रयास करें!" }, { type: 'mcq', points: 10, question: "उज्ज्वला योजना का मुख्य उद्देश्य क्या है?", options: [ { id: 1, text: "बिजली प्रदान करना", isCorrect: false }, { id: 2, text: "शौचालय बनाना", isCorrect: false }, { id: 3, text: "स्वच्छ रसोई गैस (LPG) प्रदान करना", isCorrect: true }, { id: 4, text: "वित्तीय ऋण देना", isCorrect: false } ], feedbackCorrect: "✅ बिल्कुल सही!", feedbackIncorrect: "❌ यह नहीं।" }, { type: 'match', points: 15, question: "सुविधा का उसके विवरण से मिलान करें।", columns: { a: [{ id: 'm1', text: 'उज्ज्वला 2.0' }, { id: 'm2', text: 'लाभार्थी' }, { id: 'm3', text: 'वित्तीय सहायता' }], b: [{ id: 'm1', text: '2021 में लॉन्च' }, { id: 'm2', text: 'BPL परिवारों की महिलाएँ' }, { id: 'm3', text: 'नए कनेक्शन के लिए ₹1600' }] }, correctOrder: { m1: 'm1', m2: 'm2', m3: 'm3' } }, { type: 'mcq', points: 10, question: "उज्ज्वला 2.0 किस वर्ष शुरू किया गया था?", options: [ { id: 1, text: "2019", isCorrect: false }, { id: 2, text: "2020", isCorrect: false }, { id: 3, text: "2021", isCorrect: true }, { id: 4, text: "2022", isCorrect: false } ], feedbackCorrect: "✅ बिल्कुल!", feedbackIncorrect: "❌ सही वर्ष 2021 है।" }, { type: 'mcq', points: 10, question: "PMUY योजना कौन सा मंत्रालय लागू करता है?", options: [ { id: 1, text: "वित्त मंत्रालय", isCorrect: false }, { id: 2, text: "पेट्रोलियम और गैस मंत्रालय", isCorrect: true }, { id: 3, text: "महिला मंत्रालय", isCorrect: false }, { id: 4, text: "ग्रामीण विकास मंत्रालय", isCorrect: false } ], feedbackCorrect: "✅ सही!", feedbackIncorrect: "❌ यह पेट्रोलियम और गैस मंत्रालय है।" } ],
    results: { title: "खेल समाप्त!", scoreText: "आपका सहायक स्कोर:", playAgain: "फिर से खेलें" },
    common: { skipVideo: "वीडियो छोड़ें", checkAnswer: "उत्तर जांचें", nextQuestion: "अगला प्रश्न", nextStep: "अगला कदम" },
    postQuiz: { askApply: "क्या आपने या आपके परिवार ने उज्ज्वला योजना के लिए आवेदन किया है?", yesButton: "हाँ, हमने किया है", noButton: "नहीं, मुझे और बताएं", infoTitle: "पीएम उज्ज्वला योजना के लिए आवेदन कैसे करें", infoText: "आप ऑनलाइन और ऑफलाइन दोनों तरीकों से आवेदन कर सकते हैं। आवश्यक दस्तावेजों जैसे आधार कार्ड और राशन कार्ड के साथ निकटतम एलपीजी वितरण एजेंसी या एक कॉमन सर्विस सेंटर (CSC) पर जाएं।", helplineText: "अधिक जानकारी के लिए, टोल-फ्री हेल्पलाइन पर कॉल करें:", helplineNumber: "1800-266-6696", websiteText: "या आधिकारिक वेबसाइट पर जाएं:", websiteLinkText: "pmuy.gov.in पर जाएं", appliedMessageTitle: "यह बहुत बढ़िया है!", appliedMessageText: "दूसरों को भी लाभ मिल सके इसके लिए इस योजना को अपने दोस्तों और परिवार के साथ साझा करें।", shareButton: "योजना साझा करें" }
  },
  ta: {
    title: "🪔 உஜ்வலாவின் மகிழ்ச்சியான சமையலறை 🪔",
    intro: { description: "உஜ்வாலா திட்டம் பற்றி அறியவும், அது உங்கள் குடும்பத்திற்கு எப்படி உதவுகிறது என்பதைப் பார்க்கவும் ஒரு வேடிக்கையான விளையாட்டை விளையாடுங்கள்!", startButton: "விளையாட்டைத் தொடங்கு" },
    quizIntro: { title: "படி 1: அறிவுச் சவால்!", instruction: "புதிய எரிவாயு சிலிண்டரைத் திறக்க இந்தக் கேள்விகளுக்குப் பதிலளிக்கவும்!" },
    game2: { instruction: "நீங்கள் வினாடி வினாவில் தேர்ச்சி பெற்றீர்கள்! இப்போது, சமையலறையை மாற்றுவோம். பழைய அடுப்பை வெளியே இழுக்கவும்.", instruction2: "நன்று! இப்போது புதிய LPG சிலிண்டரைக் கொண்டு வாருங்கள்.", success: "பாருங்கள்! ஒரு சுத்தமான மற்றும் மகிழ்ச்சியான சமையலறை!" },
    questions: [ { type: 'mcq', points: 10, question: "PMUY திட்டம் எப்போது தொடங்கப்பட்டது?", options: [ { id: 1, text: "ஆகஸ்ட் 2015", isCorrect: false }, { id: 2, text: "மே 2016", isCorrect: true }, { id: 3, text: "ஜனவரி 2017", isCorrect: false }, { id: 4, text: "அக்டோபர் 2018", isCorrect: false } ], feedbackCorrect: "✅ சரி!", feedbackIncorrect: "❌ மீண்டும் முயற்சிக்கவும்!" }, { type: 'mcq', points: 10, question: "உஜ்வாலா யோஜனாவின் முதன்மை நோக்கம் என்ன?", options: [ { id: 1, text: "மின்சாரம் வழங்குதல்", isCorrect: false }, { id: 2, text: "கழிப்பறை கட்டுதல்", isCorrect: false }, { id: 3, text: "சுத்தமான சமையல் எரிவாயு (LPG) வழங்குதல்", isCorrect: true }, { id: 4, text: "நிதிக் கடன்கள் வழங்குதல்", isCorrect: false } ], feedbackCorrect: "✅ சரி!", feedbackIncorrect: "❌ அது இல்லை." }, { type: 'match', points: 15, question: "அம்சத்தை அதன் விளக்கத்துடன் பொருத்தவும்.", columns: { a: [{ id: 'm1', text: 'உஜ்வாலா 2.0' }, { id: 'm2', text: 'பயனாளி' }, { id: 'm3', text: 'நிதி உதவி' }], b: [{ id: 'm1', text: '2021 இல் தொடங்கப்பட்டது' }, { id: 'm2', text: 'BPL குடும்பப் பெண்கள்' }, { id: 'm3', text: 'புதிய இணைப்புக்கு ₹1600' }] }, correctOrder: { m1: 'm1', m2: 'm2', m3: 'm3' } }, { type: 'mcq', points: 10, question: "உஜ்வாலா 2.0 எந்த ஆண்டில் தொடங்கப்பட்டது?", options: [ { id: 1, text: "2019", isCorrect: false }, { id: 2, text: "2020", isCorrect: false }, { id: 3, text: "2021", isCorrect: true }, { id: 4, text: "2022", isCorrect: false } ], feedbackCorrect: "✅ சரி!", feedbackIncorrect: "❌ சரியான ஆண்டு 2021." }, { type: 'mcq', points: 10, question: "PMUY திட்டத்தை எந்த அமைச்சகம் செயல்படுத்துகிறது?", options: [ { id: 1, text: "நிதி அமைச்சகம்", isCorrect: false }, { id: 2, text: "பெட்ரோலியம் மற்றும் எரிவாயு அமைச்சகம்", isCorrect: true }, { id: 3, text: "பெண்கள் அமைச்சகம்", isCorrect: false }, { id: 4, text: "ஊரக வளர்ச்சி அமைச்சகம்", isCorrect: false } ], feedbackCorrect: "✅ சரி!", feedbackIncorrect: "❌ இது பெட்ரோலியம் மற்றும் எரிவாயு அமைச்சகம்." } ],
    results: { title: "விளையாட்டு முடிந்தது!", scoreText: "உங்கள் உதவியாளர் மதிப்பெண்:", playAgain: "மீண்டும் விளையாடு" },
    common: { skipVideo: "வீடியோவைத் தவிர்", checkAnswer: "விடையைச் சரிபார்க்கவும்", nextQuestion: "அடுத்த கேள்வி", nextStep: "அடுத்த படி" },
    postQuiz: { askApply: "நீங்களோ அல்லது உங்கள் குடும்பத்தினரோ உஜ்வாலா யோஜனா திட்டத்திற்கு விண்ணப்பித்துள்ளீர்களா?", yesButton: "ஆம், செய்துள்ளோம்", noButton: "இல்லை, மேலும் கூறுங்கள்", infoTitle: "பிஎம் உஜ்வாலா யோஜனாவுக்கு எப்படி விண்ணப்பிப்பது", infoText: "நீங்கள் ஆன்லைன் மற்றும் ஆஃப்லைன் இரண்டிலும் விண்ணப்பிக்கலாம். உங்கள் ஆதார் அட்டை மற்றும் ரேஷன் கார்டு போன்ற தேவையான ஆவணங்களுடன் அருகிலுள்ள எல்பிஜி விநியோக நிறுவனம் அல்லது பொது சேவை மையத்திற்கு (CSC) செல்லவும்.", helplineText: "மேலும் தகவலுக்கு, இலவச உதவி எண்ணை அழைக்கவும்:", helplineNumber: "1800-266-6696", websiteText: "அல்லது அதிகாரப்பூர்வ வலைத்தளத்தைப் பார்வையிடவும்:", websiteLinkText: "pmuy.gov.in ஐப் பார்வையிடவும்", appliedMessageTitle: "அற்புதம்!", appliedMessageText: "மற்றவர்களும் பயனடைய இந்தத் திட்டத்தை உங்கள் நண்பர்கள் மற்றும் குடும்பத்தினருடன் பகிர்ந்து கொள்ளுங்கள்.", shareButton: "திட்டத்தைப் பகிரவும்" }
  },
  te: {
    title: "🪔 ఉజ్వల యొక్క సంతోషకరమైన వంటగది 🪔",
    intro: { description: "ఉజ్వల యోజన గురించి తెలుసుకోవడానికి మరియు అది మీలాంటి కుటుంబాలకు ఎలా సహాయపడుతుందో చూడటానికి ఒక సరదా ఆట ఆడండి!", startButton: "ఆట ప్రారంభించండి" },
    quizIntro: { title: "దశ 1: జ్ఞాన సవాలు!", instruction: "కొత్త గ్యాస్ సిలిండర్‌ను అన్‌లాక్ చేయడానికి ఈ ప్రశ్నలకు సమాధానం ఇవ్వండి!" },
    game2: { instruction: "మీరు క్విజ్‌లో ఉత్తీర్ణులయ్యారు! ఇప్పుడు, వంటగదిని మారుద్దాం. పాత స్టవ్‌ను బయటకు లాగండి.", instruction2: "బాగా చేసారు! ఇప్పుడు కొత్త LPG సిలిండర్‌ను తీసుకురండి.", success: "చూడండి! ఒక శుభ్రమైన మరియు సంతోషకరమైన వంటగది!" },
    questions: [ { type: 'mcq', points: 10, question: "PMUY పథకం ఎప్పుడు ప్రారంభించబడింది?", options: [ { id: 1, text: "ఆగస్టు 2015", isCorrect: false }, { id: 2, text: "మే 2016", isCorrect: true }, { id: 3, text: "జనవరి 2017", isCorrect: false }, { id: 4, text: "అక్టోబర్ 2018", isCorrect: false } ], feedbackCorrect: "✅ సరియైనది!", feedbackIncorrect: "❌ ఓహ్, మళ్ళీ ప్రయత్నించండి!" }, { type: 'mcq', points: 10, question: "ఉజ్వల యోజన యొక్క ప్రాథమిక లక్ష్యం ఏమిటి?", options: [ { id: 1, text: "విద్యుత్ అందించడం", isCorrect: false }, { id: 2, text: "మరుగుదొడ్లు నిర్మించడం", isCorrect: false }, { id: 3, text: "స్వచ్ఛమైన వంట ఇంధనం (LPG) అందించడం", isCorrect: true }, { id: 4, text: "ఆర్థిక రుణాలు అందించడం", isCorrect: false } ], feedbackCorrect: "✅ సరియైనది!", feedbackIncorrect: "❌ అది కాదు." }, { type: 'match', points: 15, question: "లక్షణాన్ని దాని వివరణతో సరిపోల్చండి.", columns: { a: [{ id: 'm1', text: 'ఉజ్వల 2.0' }, { id: 'm2', text: 'లబ్ధిదారుడు' }, { id: 'm3', text: 'ఆర్థిక సహాయం' }], b: [{ id: 'm1', text: '2021లో ప్రారంభించబడింది' }, { id: 'm2', text: 'BPL కుటుంబాల మహిళలు' }, { id: 'm3', text: 'కొత్త కనెక్షన్ కోసం ₹1600' }] }, correctOrder: { m1: 'm1', m2: 'm2', m3: 'm3' } }, { type: 'mcq', points: 10, question: "ఉజ్వల 2.0 ఏ సంవత్సరంలో ప్రారంభించబడింది?", options: [ { id: 1, text: "2019", isCorrect: false }, { id: 2, text: "2020", isCorrect: false }, { id: 3, text: "2021", isCorrect: true }, { id: 4, text: "2022", isCorrect: false } ], feedbackCorrect: "✅ ఖచ్చితంగా!", feedbackIncorrect: "❌ సరైన సంవత్సరం 2021." }, { type: 'mcq', points: 10, question: "PMUY పథకాన్ని ఏ మంత్రిత్వ శాఖ అమలు చేస్తుంది?", options: [ { id: 1, text: "ఆర్థిక మంత్రిత్వ శాఖ", isCorrect: false }, { id: 2, text: "పెట్రోలియం మరియు గ్యాస్ మంత్రిత్వ శాఖ", isCorrect: true }, { id: 3, text: "మహిళా మంత్రిత్వ శాఖ", isCorrect: false }, { id: 4, text: "గ్రామీణాభివృద్ధి మంత్రిత్వ శాఖ", isCorrect: false } ], feedbackCorrect: "✅ సరియైనది!", feedbackIncorrect: "❌ ఇది పెట్రోలియం మరియు గ్యాస్ మంత్రిత్వ శాఖ." } ],
    results: { title: "ఆట పూర్తయింది!", scoreText: "మీ సహాయక స్కోరు:", playAgain: "మళ్ళీ ఆడండి" },
    common: { skipVideo: "వీడియోను దాటవేయి", checkAnswer: "సమాధానం తనిఖీ చేయండి", nextQuestion: "తదుపరి ప్రశ్న", nextStep: "తదుపరి దశ" },
    postQuiz: { askApply: "మీరు లేదా మీ కుటుంబం ఉజ్వల యోజనకు దరఖాస్తు చేసుకున్నారా?", yesButton: "అవును, చేసుకున్నాము", noButton: "లేదు, నాకు మరింత చెప్పండి", infoTitle: "PM ఉజ్వల యోజనకు ఎలా దరఖాస్తు చేయాలి", infoText: "మీరు ఆన్‌లైన్ మరియు ఆఫ్‌లైన్ రెండింటిలోనూ దరఖాస్తు చేసుకోవచ్చు. మీ ఆధార్ కార్డ్ మరియు రేషన్ కార్డ్ వంటి అవసరమైన పత్రాలతో సమీపంలోని LPG పంపిణీ ఏజెన్సీ లేదా కామన్ సర్వీస్ సెంటర్ (CSC)ని సందర్శించండి.", helplineText: "మరింత సమాచారం కోసం, టోల్-ఫ్రీ హెల్ప్‌లైన్‌కు కాల్ చేయండి:", helplineNumber: "1800-266-6696", websiteText: "లేదా అధికారిక వెబ్‌సైట్‌ను సందర్శించండి:", websiteLinkText: "pmuy.gov.in సందర్శించండి", appliedMessageTitle: "అద్భుతం!", appliedMessageText: "ఇతరులు కూడా ప్రయోజనం పొందేలా ఈ పథకాన్ని మీ స్నేహితులు మరియు కుటుంబ సభ్యులతో పంచుకోండి.", shareButton: "పథకాన్ని పంచుకోండి" }
  },
  kn: {
    title: "🪔 ಉಜ್ವಲಾ ಅವರ ಸಂತೋಷದ ಅಡಿಗೆಮನೆ 🪔",
    intro: { description: "ಉಜ್ವಲ ಯೋಜನೆಯ ಬಗ್ಗೆ ತಿಳಿಯಲು ಮತ್ತು ಅದು ನಿಮ್ಮಂತಹ ಕುಟುಂಬಗಳಿಗೆ ಹೇಗೆ ಸಹಾಯ ಮಾಡುತ್ತದೆ ಎಂಬುದನ್ನು ನೋಡಲು ಒಂದು ಮೋಜಿನ ಆಟವನ್ನು ಆಡಿ!", startButton: "ಆಟ ಪ್ರಾರಂಭಿಸಿ" },
    quizIntro: { title: "ಹಂತ 1: ಜ್ಞಾನದ ಸವಾಲು!", instruction: "ಹೊಸ ಗ್ಯಾಸ್ ಸಿಲಿಂಡರ್ ಅನ್ಲಾಕ್ ಮಾಡಲು ಈ ಪ್ರಶ್ನೆಗಳಿಗೆ ಉತ್ತರಿಸಿ!" },
    game2: { instruction: "ನೀವು ರಸಪ್ರಶ್ನೆಯಲ್ಲಿ ಉತ್ತೀರ್ಣರಾಗಿದ್ದೀರಿ! ಈಗ, ಅಡಿಗೆಮನೆಯನ್ನು ಬದಲಾಯಿಸೋಣ. ಹಳೆಯ ಸ್ಟವ್ ಅನ್ನು ಹೊರಗೆ ಎಳೆಯಿರಿ.", instruction2: "ಪರಿಪೂರ್ಣ! ಈಗ ಹೊಸ ಎಲ್‌ಪಿಜಿ ಸಿಲಿಂಡರ್ ತನ್ನಿ.", success: "ನೋಡಿ! ಒಂದು ಸ್ವಚ್ಛ ಮತ್ತು ಸಂತೋಷದ ಅಡಿಗೆಮನೆ!" },
    questions: [ { type: 'mcq', points: 10, question: "PMUY ಯೋಜನೆಯನ್ನು ಯಾವಾಗ ಪ್ರಾರಂಭಿಸಲಾಯಿತು?", options: [ { id: 1, text: "ಆಗಸ್ಟ್ 2015", isCorrect: false }, { id: 2, text: "ಮೇ 2016", isCorrect: true }, { id: 3, text: "ಜನವರಿ 2017", isCorrect: false }, { id: 4, text: "ಅಕ್ಟೋಬರ್ 2018", isCorrect: false } ], feedbackCorrect: "✅ ಸರಿ!", feedbackIncorrect: "❌ ಓಹ್, ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ!" }, { type: 'mcq', points: 10, question: "ಉಜ್ವಲ ಯೋಜನೆಯ ಪ್ರಾಥಮಿಕ ಉದ್ದೇಶವೇನು?", options: [ { id: 1, text: "ವಿದ್ಯುತ್ ಒದಗಿಸುವುದು", isCorrect: false }, { id: 2, text: "ಶೌಚಾಲಯ ನಿರ್ಮಿಸುವುದು", isCorrect: false }, { id: 3, text: "ಶುದ್ಧ ಅಡುಗೆ ಇಂಧನ (LPG) ಒದಗಿಸುವುದು", isCorrect: true }, { id: 4, text: "ಹಣಕಾಸಿನ ಸಾಲ ನೀಡುವುದು", isCorrect: false } ], feedbackCorrect: "✅ ಸರಿ!", feedbackIncorrect: "❌ ಅದು ಅಲ್ಲ." }, { type: 'match', points: 15, question: "ವೈಶಿಷ್ಟ್ಯವನ್ನು ಅದರ ವಿವರಣೆಯೊಂದಿಗೆ ಹೊಂದಿಸಿ.", columns: { a: [{ id: 'm1', text: 'ಉಜ್ವಲ 2.0' }, { id: 'm2', text: 'ಫಲಾನುಭವಿ' }, { id: 'm3', text: 'ಹಣಕಾಸಿನ ನೆರವು' }], b: [{ id: 'm1', text: '2021 ರಲ್ಲಿ ಪ್ರಾರಂಭವಾಯಿತು' }, { id: 'm2', text: 'BPL ಕುಟುಂಬಗಳ ಮಹಿಳೆಯರು' }, { id: 'm3', text: 'ಹೊಸ ಸಂಪರ್ಕಕ್ಕಾಗಿ ₹1600' }] }, correctOrder: { m1: 'm1', m2: 'm2', m3: 'm3' } }, { type: 'mcq', points: 10, question: "ಉಜ್ವಲ 2.0 ಅನ್ನು ಯಾವ ವರ್ಷದಲ್ಲಿ ಪ್ರಾರಂಭಿಸಲಾಯಿತು?", options: [ { id: 1, text: "2019", isCorrect: false }, { id: 2, text: "2020", isCorrect: false }, { id: 3, text: "2021", isCorrect: true }, { id: 4, text: "2022", isCorrect: false } ], feedbackCorrect: "✅ ನಿಖರವಾಗಿ!", feedbackIncorrect: "❌ ಸರಿಯಾದ ವರ್ಷ 2021." }, { type: 'mcq', points: 10, question: "PMUY ಯೋಜನೆಯನ್ನು ಯಾವ ಸಚಿವಾಲಯ ಜಾರಿಗೊಳಿಸುತ್ತದೆ?", options: [ { id: 1, text: "ಹಣಕಾಸು ಸಚಿವಾಲಯ", isCorrect: false }, { id: 2, text: "ಪೆಟ್ರೋಲಿಯಂ ಮತ್ತು ಅನಿಲ ಸಚಿವಾಲಯ", isCorrect: true }, { id: 3, text: "ಮಹಿಳಾ ಸಚಿವಾಲಯ", isCorrect: false }, { id: 4, text: "ಗ್ರಾಮೀಣಾಭಿವೃದ್ಧಿ ಸಚಿವಾಲಯ", isCorrect: false } ], feedbackCorrect: "✅ ಸರಿ!", feedbackIncorrect: "❌ ಇದು ಪೆಟ್ರೋಲಿಯಂ ಮತ್ತು ಅನಿಲ ಸಚಿವಾಲಯ." } ],
    results: { title: "ಆಟ ಮುಗಿದಿದೆ!", scoreText: "ನಿಮ್ಮ ಸಹಾಯಕ ಸ್ಕೋರ್:", playAgain: "ಮತ್ತೆ ಆಡಿ" },
    common: { skipVideo: "ವೀಡಿಯೊ ಬಿಟ್ಟುಬಿಡಿ", checkAnswer: "ಉತ್ತರವನ್ನು ಪರಿಶೀಲಿಸಿ", nextQuestion: "ಮುಂದಿನ ಪ್ರಶ್ನೆ", nextStep: "ಮುಂದಿನ ಹಂತ" },
    postQuiz: { askApply: "ನೀವು ಅಥವಾ ನಿಮ್ಮ ಕುಟುಂಬದವರು ಉಜ್ವಲ ಯೋಜನೆಗೆ ಅರ್ಜಿ ಸಲ್ಲಿಸಿದ್ದೀರಾ?", yesButton: "ಹೌದು, ಸಲ್ಲಿಸಿದ್ದೇವೆ", noButton: "ಇಲ್ಲ, ನನಗೆ ಇನ್ನಷ್ಟು ತಿಳಿಸಿ", infoTitle: "ಪಿಎಂ ಉಜ್ವಲ ಯೋಜನೆಗೆ ಅರ್ಜಿ ಸಲ್ಲಿಸುವುದು ಹೇಗೆ", infoText: "ನೀವು ಆನ್‌ಲೈನ್ ಮತ್ತು ಆಫ್‌ಲೈನ್ ಎರಡರಲ್ಲೂ ಅರ್ಜಿ ಸಲ್ಲಿಸಬಹುದು. ನಿಮ್ಮ ಆಧಾರ್ ಕಾರ್ಡ್ ಮತ್ತು ಪಡಿತರ ಚೀಟಿಯಂತಹ ಅಗತ್ಯ ದಾಖಲೆಗಳೊಂದಿಗೆ ಹತ್ತಿರದ ಎಲ್‌ಪಿಜಿ ವಿತರಣಾ ಸಂಸ್ಥೆ ಅಥವಾ ಸಾಮಾನ್ಯ ಸೇವಾ ಕೇಂದ್ರಕ್ಕೆ (CSC) ಭೇಟಿ ನೀಡಿ.", helplineText: "ಹೆಚ್ಚಿನ ಮಾಹಿತಿಗಾಗಿ, ಟೋಲ್-ಫ್ರೀ ಸಹಾಯವಾಣಿಗೆ ಕರೆ ಮಾಡಿ:", helplineNumber: "1800-266-6696", websiteText: "ಅಥವಾ ಅಧಿಕೃತ ವೆಬ್‌ಸೈಟ್‌ಗೆ ಭೇಟಿ ನೀಡಿ:", websiteLinkText: "pmuy.gov.in ಗೆ ಭೇಟಿ ನೀಡಿ", appliedMessageTitle: "ಅದು ಅದ್ಭುತ!", appliedMessageText: "ಇತರರು ಸಹ ಪ್ರಯೋಜನ ಪಡೆಯಲು ಈ ಯೋಜನೆಯನ್ನು ನಿಮ್ಮ ಸ್ನೇಹಿತರು ಮತ್ತು ಕುಟುಂಬದೊಂದಿಗೆ ಹಂಚಿಕೊಳ್ಳಿ.", shareButton: "ಯೋಜನೆಯನ್ನು ಹಂಚಿಕೊಳ್ಳಿ" }
  },
};

// --- Helper Components & Hooks ---
const useWindowWidth = () => {
    const [width, setWidth] = useState(window.innerWidth);
    useEffect(() => {
      const handleResize = () => setWidth(window.innerWidth);
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);
    return width;
};
const ScoreCounter = ({ finalScore }) => {
    const [displayScore, setDisplayScore] = useState(0);
    useEffect(() => {
      if (finalScore === 0) { setDisplayScore(0); return; }
      const duration = 1000;
      const stepTime = Math.max(1, Math.abs(Math.floor(duration / finalScore)));
      const timer = setInterval(() => {
        setDisplayScore(prev => {
          if (prev < finalScore) { return prev + 1; }
          clearInterval(timer);
          return finalScore;
        });
      }, stepTime);
      return () => clearInterval(timer);
    }, [finalScore]);
    return <p style={styles.finalScoreNumber}>{displayScore}</p>;
};
const shuffleArray = (array) => {
    let currentIndex = array.length, randomIndex;
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
};

// --- Main Game Component ---
const Ujjwala = () => {
  const [gameState, setGameState] = useState('intro'); // intro, video, quiz, transformation, results
  const [lang, setLang] = useState('en-US');
  const [voices, setVoices] = useState([]);
  const synth = window.speechSynthesis;

  // ✨ FIX: Moved useWindowWidth to the top level
  const isMobile = useWindowWidth() < 768;

  useEffect(() => {
    const loadVoices = () => { if (synth.getVoices().length) { setVoices(synth.getVoices()); }};
    loadVoices();
    if (synth.onvoiceschanged !== undefined) { synth.onvoiceschanged = loadVoices; }
    return () => { synth.cancel(); synth.onvoiceschanged = null; };
  }, [synth]);
  
  const speakText = (text, langCode) => {
    if (!isTtsEnabled || !text || !synth || !voices.length) return;
    synth.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    let voiceToUse = voices.find(v => v.lang === langCode);
    if (!voiceToUse) {
      const baseLang = langCode.split('-')[0];
      voiceToUse = voices.find(v => v.lang.startsWith(baseLang));
    }
    if (voiceToUse) { utterance.voice = voiceToUse; utterance.lang = voiceToUse.lang; } 
    else { utterance.lang = 'en-US'; }
    utterance.rate = 0.9;
    synth.speak(utterance);
  };
  
  const [score, setScore] = useState(0);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const [isTtsEnabled, setIsTtsEnabled] = useState(true);
  const [postQuizState, setPostQuizState] = useState('prompt');
  const backgroundMusicRef = useRef(null);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isAnswered, setIsAnswered] = useState(false);
  const [feedback, setFeedback] = useState("");
  const [selectedOption, setSelectedOption] = useState(null);
  const [matches, setMatches] = useState({});
  const [selectedLeftItem, setSelectedLeftItem] = useState(null);

  const [chulhaRemoved, setChulhaRemoved] = useState(false);
  const [lpgPlaced, setLpgPlaced] = useState(false);

  const baseLang = useMemo(() => lang.split('-')[0], [lang]);
  const langContent = useMemo(() => {
    const content = gameData[baseLang] || gameData.en;
    return { ...gameData.en, ...content, intro: {...gameData.en.intro, ...content.intro}, quizIntro: {...gameData.en.quizIntro, ...content.quizIntro}, game2: {...gameData.en.game2, ...content.game2}, common: {...gameData.en.common, ...content.common}, results: {...gameData.en.results, ...content.results}, postQuiz: {...gameData.en.postQuiz, ...content.postQuiz} };
  }, [baseLang]);
  const currentQuestion = useMemo(() => langContent.questions?.[currentQuestionIndex], [currentQuestionIndex, langContent]);
  const shuffledColumnB = useMemo(() => { if (currentQuestion?.type !== 'match') return []; return shuffleArray([...currentQuestion.columns.b]); }, [currentQuestion]);
  
  useEffect(() => {
    const instruction = 
        gameState === 'quiz' && !isAnswered ? langContent.questions[currentQuestionIndex].question :
        gameState === 'transformation' ? (chulhaRemoved ? langContent.game2.instruction2 : langContent.game2.instruction) : null;
    
    if (instruction && voices.length > 0) {
      const timer = setTimeout(() => speakText(instruction, lang), 500);
      return () => clearTimeout(timer);
    }
  }, [gameState, chulhaRemoved, currentQuestionIndex, voices, lang, isTtsEnabled, langContent, isAnswered]);
  
  const handleMCQOptionClick = (option) => { 
    if (isAnswered) return;
    setIsAnswered(true); 
    if (option.isCorrect) { 
      correctAnswerSound.play(); setFeedback(currentQuestion.feedbackCorrect); setScore(s => s + currentQuestion.points); 
    } else { 
      wrongAnswerSound.play(); setFeedback(currentQuestion.feedbackIncorrect); 
    } 
  };
  
  const handleCheckMatchAnswer = () => {
    if (isAnswered) return;
    setIsAnswered(true);
    let correctMatches = 0;
    const totalPairs = currentQuestion.columns.a.length;
    for (const leftId in matches) { if (matches[leftId] === currentQuestion.correctOrder[leftId]) { correctMatches++; } }
    const points = Math.round((correctMatches / totalPairs) * currentQuestion.points);
    if (points > 0) { correctAnswerSound.play(); } else { wrongAnswerSound.play(); }
    setScore(s => s + points);
    setFeedback(`${correctMatches} of ${totalPairs} correct matches.`);
  };

  const handleShare = async () => {
    const shareData = { title: 'Pradhan Mantri Ujjwala Yojana', text: 'Learn about the Ujjwala Yojana, a scheme providing clean cooking fuel to women from BPL households.', url: 'https://www.pmuy.gov.in/' };
    try {
      if (navigator.share) { await navigator.share(shareData); } 
      else { alert("Share functionality is not supported on your browser. Please copy the link manually: https://www.pmuy.gov.in/"); }
    } catch (err) { console.error("Share failed:", err); }
  };

  const resetGame = () => { setScore(0); setPostQuizState('prompt'); setCurrentQuestionIndex(0); setIsAnswered(false); setFeedback(""); setSelectedOption(null); setMatches({}); setSelectedLeftItem(null); setChulhaRemoved(false); setLpgPlaced(false); };
  const handleStartQuiz = () => { gameStartSound.play(); resetGame(); setGameState('video'); };
  const handleSkipVideo = () => setGameState('quiz');
  const handleLanguageChange = (e) => setLang(e.target.value);
  const toggleMusic = () => { const music = backgroundMusicRef.current; if (isMusicPlaying) { music.pause(); } else { music.play().catch(e => console.error("Autoplay prevented:", e)); } setIsMusicPlaying(!isMusicPlaying); };
  const toggleTts = () => setIsTtsEnabled(!isTtsEnabled);
  const handleRestart = () => { resetGame(); setGameState('intro'); };
  const handleNextQuestion = () => { 
    if (currentQuestionIndex < langContent.questions.length - 1) { 
      setCurrentQuestionIndex(i => i + 1); 
      setIsAnswered(false); setFeedback(""); setSelectedOption(null); setMatches({}); setSelectedLeftItem(null);
    } else { 
      setGameState('transformation');
    } 
  };
  const handleDropTransformation = (e, target) => {
    e.preventDefault();
    const id = e.dataTransfer.getData('id');
    if (id === 'chulha' && target === 'out' && !chulhaRemoved) {
        correctAnswerSound.play();
        setChulhaRemoved(true);
        setScore(s => s + 20);
    } else if (id === 'lpg' && target === 'in' && chulhaRemoved && !lpgPlaced) {
        transformationSound.play();
        setLpgPlaced(true);
        setScore(s => s + 30);
        setTimeout(() => setGameState('results'), 2000);
    } else {
        wrongAnswerSound.play();
    }
  };
  
  const renderIntroScreen = () => (
    <div style={styles.introContainer} className="fade-in">
      <div style={styles.avatar}>🪔</div>
      <h1 style={styles.title}>{langContent.title}</h1>
      <p style={styles.introDescription}>{langContent.intro.description}</p>
      <div style={styles.languageSelectorQuiz}>
        <select value={lang} onChange={handleLanguageChange} style={styles.languageDropdown}>
            <option value="en-US">English</option> <option value="hi-IN">हिंदी</option> <option value="ta-IN">தமிழ்</option> <option value="te-IN">తెలుగు</option> <option value="kn-IN">ಕನ್ನಡ</option>
        </select>
      </div>
      <button style={styles.actionButton} onClick={handleStartQuiz}>{langContent.intro.startButton}</button>
    </div>
  );

  const renderVideoScreen = () => (
    <div className="fade-in">
        <div style={styles.videoWrapper}>
            <video controls autoPlay width="100%" style={styles.video} key={lang} onEnded={handleSkipVideo}>
                <source src={langContent.videoUrl} type="video/mp4" />{langContent.videoNotSupported}
            </video>
        </div>
        <button style={{...styles.actionButton, backgroundColor: 'rgba(108, 117, 125, 0.9)'}} onClick={handleSkipVideo}>{langContent.common.skipVideo}</button>
    </div>
  );
  
  const renderQuizScreen = () => (
    <div className="question-animate-in">
        <h2 style={styles.subTitle}>{langContent.quizIntro.title}</h2>
        <div style={styles.speechBubble}>{currentQuestion.question}</div>
        <p style={styles.progressText}>Question {currentQuestionIndex + 1} of {langContent.questions.length}</p>
        {currentQuestion.type === 'mcq' && renderMCQ()}
        {currentQuestion.type === 'match' && renderMatch()}
        {isAnswered && (
        <div style={styles.feedbackContainer} className="fade-in">
            <p style={styles.feedback}>{feedback}</p>
            <button style={styles.actionButton} onClick={handleNextQuestion}>{langContent.common.nextQuestion}</button>
        </div>
        )}
    </div>
  );

  const renderMCQ = () => (
    <div style={{...styles.optionsGrid, ...(isMobile && styles.mobile.optionsGrid)}}>
      {currentQuestion.options.map((option) => {
        const isSelected = selectedOption === option.id;
        let backgroundColor = "rgba(0, 123, 255, 0.7)";
        if (isAnswered) {
          if (option.isCorrect) backgroundColor = "rgba(40, 167, 69, 0.8)";
          else if (isSelected) backgroundColor = "rgba(220, 53, 69, 0.8)";
          else backgroundColor = "rgba(108, 117, 125, 0.5)";
        }
        return <button key={option.id} style={{ ...styles.optionButton, backgroundColor }} onClick={() => handleMCQOptionClick(option)} disabled={isAnswered}>{option.text}</button>;
      })}
    </div>
  );
  
  const renderMatch = () => (
    <>
        <div style={{...styles.matchGrid, ...(isMobile && styles.mobile.matchGrid)}}>
            <div style={styles.matchColumn}>
                {currentQuestion.columns.a.map(item => (
                    <button key={item.id} onClick={() => setSelectedLeftItem(item.id === selectedLeftItem ? null : item.id)} style={{...styles.matchItem, ...(selectedLeftItem === item.id && styles.matchItemSelected), ...(!!matches[item.id] && styles.matchItemMatched) }} disabled={isAnswered || !!matches[item.id]}>{item.text}</button>
                ))}
            </div>
            <div style={styles.matchColumn}>
                {shuffledColumnB.map(item => {
                    const isMatched = Object.values(matches).includes(item.id);
                    let isCorrect = false;
                    if(isAnswered && isMatched) {
                        const leftKey = Object.keys(matches).find(key => matches[key] === item.id);
                        if(leftKey && currentQuestion.correctOrder[leftKey] === item.id) isCorrect = true;
                    }
                    return <button key={item.id} onClick={() => { if(selectedLeftItem) { setMatches(prev => ({ ...prev, [selectedLeftItem]: item.id })); setSelectedLeftItem(null); } }} style={{...styles.matchItem, ...(isMatched && !isAnswered && styles.matchItemMatched), ...(isAnswered && isMatched && (isCorrect ? styles.matchCorrect : styles.matchIncorrect))}} disabled={isAnswered || isMatched || !selectedLeftItem}>{item.text}</button>;
                })}
            </div>
        </div>
        {Object.keys(matches).length === currentQuestion.columns.a.length && !isAnswered && (
            <button style={styles.actionButton} onClick={handleCheckMatchAnswer}>{langContent.common.checkAnswer}</button>
        )}
    </>
  );

  const renderTransformationScreen = () => (
    <div className="question-animate-in">
        <div style={styles.speechBubble}>{chulhaRemoved ? langContent.game2.instruction2 : langContent.game2.instruction}</div>
        <div style={{...styles.kitchenScene, ...(lpgPlaced && styles.kitchenSceneClean)}}>
            <div style={styles.kitchenLeft} onDragOver={e => e.preventDefault()} onDrop={e => handleDropTransformation(e, 'in')}>
                {chulhaRemoved && !lpgPlaced && <span style={styles.dropText}>Drag New Cylinder Here</span>}
                {lpgPlaced && <div className="fade-in" style={{fontSize: '4rem'}}>✨</div>}
            </div>
            <div style={styles.kitchenRight} onDragOver={e => e.preventDefault()} onDrop={e => handleDropTransformation(e, 'out')}>
                {!chulhaRemoved && <span style={styles.dropText}>Drag Old Stove Here</span>}
            </div>
        </div>
        <div style={{display: 'flex', justifyContent: 'space-around', marginTop: '20px', minHeight: '80px'}}>
            {!chulhaRemoved && <div draggable onDragStart={(e) => e.dataTransfer.setData('id', 'chulha')} style={styles.draggableItem}>🔥 Old Stove</div>}
            {chulhaRemoved && !lpgPlaced && <div draggable onDragStart={(e) => e.dataTransfer.setData('id', 'lpg')} style={{...styles.draggableItem, backgroundColor: '#28a745', color: 'white'}}>✨ New LPG</div>}
        </div>
    </div>
  );

  const renderResultsScreen = () => {
    let postQuizContent;
    switch (postQuizState) {
        case 'answered_yes':
            postQuizContent = ( <div style={styles.infoBox} className="fade-in"><h3 style={styles.infoTitle}>{langContent.postQuiz.appliedMessageTitle}</h3><p>{langContent.postQuiz.appliedMessageText}</p><button style={styles.actionButton} onClick={handleShare}>{langContent.postQuiz.shareButton}</button></div> );
            break;
        case 'answered_no':
            postQuizContent = ( <div style={styles.infoBox} className="fade-in"><h3 style={styles.infoTitle}>{langContent.postQuiz.infoTitle}</h3><p>{langContent.postQuiz.infoText}</p><div style={styles.helplineBox}><p>{langContent.postQuiz.helplineText}</p><span>{langContent.postQuiz.helplineNumber}</span></div><p>{langContent.postQuiz.websiteText}</p><a href="https://www.pmuy.gov.in/" target="_blank" rel="noopener noreferrer" style={styles.websiteLink}>{langContent.postQuiz.websiteLinkText}</a></div> );
            break;
        default:
            postQuizContent = ( <div style={styles.postQuizContainer} className="fade-in"><p style={styles.postQuizQuestion}>{langContent.postQuiz.askApply}</p><div style={styles.postQuizButtons}><button style={{...styles.actionButton, backgroundColor: 'rgba(40, 167, 69, 0.8)'}} onClick={() => setPostQuizState('answered_yes')}>{langContent.postQuiz.yesButton}</button><button style={{...styles.actionButton, backgroundColor: 'rgba(220, 53, 69, 0.8)'}} onClick={() => setPostQuizState('answered_no')}>{langContent.postQuiz.noButton}</button></div></div> );
    }
    return ( <div style={styles.resultsContainer} className="fade-in"><h2 style={styles.title}>{langContent.results.title}</h2><p style={styles.finalScoreText}>{langContent.results.scoreText}</p><ScoreCounter finalScore={score} />{postQuizContent}<button style={{...styles.actionButton, marginTop: '30px', backgroundColor: '#007bff'}} onClick={handleRestart}>{langContent.results.playAgain}</button></div> );
  };
  
  const renderContent = () => {
    switch (gameState) {
        case 'video': return renderVideoScreen();
        case 'quiz': return renderQuizScreen();
        case 'transformation': return renderTransformationScreen();
        case 'results': return renderResultsScreen();
        case 'intro':
        default: return renderIntroScreen();
    }
  };

  return (
    <div style={styles.pageBackground}>
        <style>{`
            .fade-in { animation: fadeInAnimation ease 1s; } @keyframes fadeInAnimation { 0% { opacity: 0; } 100% { opacity: 1; } }
            .question-animate-in { animation: questionAnimateIn .7s ease-out; } @keyframes questionAnimateIn { 0% { opacity: 0; transform: translateY(20px); } 100% { opacity: 1; transform: translateY(0); } }
            @keyframes avatar-bob { 0% { transform: translateY(0); } 50% { transform: translateY(-15px); } 100% { transform: translateY(0); } }
        `}</style>
        <div style={styles.container}>{renderContent()}</div>
        <div style={styles.audioControlsContainer}>
            <button onClick={toggleMusic} style={styles.audioButton} title="Toggle Music">{isMusicPlaying ? '🎵' : '🎶'}</button>
            <button onClick={toggleTts} style={styles.audioButton} title="Toggle Speech">{isTtsEnabled ? '🗣️' : '🤫'}</button>
        </div>
    </div>
  );
};

// --- Helper Components & Styles ---
const styles = {
    pageBackground: { background: 'linear-gradient(-45deg, #fbe9e7, #fff3e0, #e3f2fd, #f1e6ff)', backgroundSize: '400% 400%', animation: 'gradient 15s ease infinite', minHeight: '100vh', padding: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflowX: 'hidden' },
    container: { position: 'relative', width: '100%', maxWidth: '800px', padding: '40px', fontFamily: "'Poppins', sans-serif", backgroundColor: 'rgba(255, 255, 255, 0.7)', backdropFilter: 'blur(15px)', borderRadius: '20px', border: '1px solid rgba(255, 255, 255, 0.2)', boxShadow: '0 8px 32px 0 rgba(191, 54, 12, 0.25)', color: '#333', textAlign: 'center' },
    introContainer: { display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' },
    avatar: { fontSize: '5rem', animation: 'avatar-bob 3s ease-in-out infinite' },
    speechBubble: { position: 'relative', backgroundColor: 'white', padding: '15px 20px', borderRadius: '15px', maxWidth: '80%', margin: '0 auto 25px auto', fontSize: '1.2rem', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' },
    introDescription: { fontSize: '1.2rem', maxWidth: '500px', lineHeight: 1.6, color: '#444' },
    languageSelectorQuiz: { display: 'flex', alignItems: 'center', gap: '10px', backgroundColor: 'rgba(255,255,255,0.5)', padding: '10px 20px', borderRadius: '50px' },
    languageDropdown: { padding: '8px 12px', borderRadius: '8px', border: '1px solid #ccc', fontSize: '1rem', backgroundColor: '#fff' },
    title: { textAlign: 'center', color: '#bf360c', fontSize: '2.5rem', marginBottom: '10px', fontWeight: '700', textShadow: '1px 1px 3px rgba(0, 0, 0, 0.2)' },
    subTitle: { color: '#d35400', fontSize: '1.8rem', marginBottom: '10px' },
    progressText: { color: '#555', fontSize: '0.9rem', marginBottom: '15px' },
    draggableItem: { padding: '15px 25px', backgroundColor: 'rgba(255, 255, 255, 0.9)', borderRadius: '12px', cursor: 'grab', border: '2px solid #007bff', transition: 'transform 0.2s ease', userSelect: 'none' },
    kitchenScene: { minHeight: '200px', backgroundColor: '#694E4E', backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.8) 100%)', borderRadius: '15px', padding: '20px', display: 'flex', justifyContent: 'space-between', color: 'white', transition: 'all 1s ease' },
    kitchenSceneClean: { backgroundColor: '#87CEEB', backgroundImage: 'radial-gradient(circle, #a1dffb 0%, #87CEEB 100%)'},
    kitchenLeft: { flex: 1, border: '2px dashed white', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '150px' },
    kitchenRight: { flex: 1, border: '2px dashed white', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '150px' },
    dropText: { color: 'rgba(255,255,255,0.7)'},
    videoWrapper: { margin: '0 auto 25px auto', maxWidth: '600px', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' },
    video: { display: 'block', width: '100%' },
    optionsGrid: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', maxWidth: '600px', margin: '20px auto' },
    optionButton: { padding: '15px 20px', fontSize: '1rem', color: 'white', border: '1px solid rgba(255,255,255,0.3)', borderRadius: '12px', cursor: 'pointer', transition: 'all 0.3s ease', boxShadow: '0 4px 15px rgba(0,0,0,0.1)', minHeight: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center' },
    feedbackContainer: { marginTop: '25px', padding: '20px', borderRadius: '12px', backgroundColor: 'rgba(255, 255, 255, 0.7)', backdropFilter: 'blur(5px)', border: '1px solid rgba(255,255,255,0.2)' },
    feedback: { fontSize: '1.2rem', fontWeight: 'bold', margin: '0 0 15px 0', color: '#333' },
    actionButton: { padding: '12px 30px', fontSize: '1.1rem', fontWeight: '600', color: 'white', backgroundColor: 'rgba(255, 111, 0, 0.9)', border: 'none', borderRadius: '50px', cursor: 'pointer', transition: 'all 0.3s ease', boxShadow: '0 4px 15px rgba(255, 111, 0, 0.4)', textTransform: 'uppercase' },
    resultsContainer: { textAlign: 'center', padding: '20px' },
    finalScoreText: { fontSize: '1.5rem', color: '#555' },
    finalScoreNumber: { fontSize: '4.5rem', fontWeight: 'bold', color: '#bf360c', margin: '10px 0 30px 0', textShadow: '2px 2px 4px rgba(0,0,0,0.1)' },
    postQuizContainer: { borderTop: '1px solid rgba(255, 193, 7, 0.5)', paddingTop: '25px', marginTop: '25px' },
    postQuizQuestion: { fontSize: '1.2rem', color: '#333', marginBottom: '20px' },
    postQuizButtons: { display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' },
    infoBox: { backgroundColor: 'rgba(255, 255, 255, 0.7)', border: '1px solid rgba(255, 255, 255, 0.3)', borderRadius: '12px', padding: '25px', marginTop: '20px', maxWidth: '600px', margin: '20px auto', backdropFilter: 'blur(5px)', textAlign: 'center' },
    infoTitle: { color: '#bf360c', marginTop: '0', textAlign: 'center' },
    helplineBox: { backgroundColor: 'rgba(227, 242, 253, 0.8)', border: '1px solid #90caf9', borderRadius: '8px', padding: '15px', margin: '20px 0', textAlign: 'center' },
    websiteLink: { display: 'inline-block', padding: '10px 25px', backgroundColor: 'rgba(0, 123, 255, 0.8)', color: 'white', textDecoration: 'none', borderRadius: '8px', fontWeight: 'bold', marginTop: '10px', transition: 'all 0.3s ease' },
    audioControlsContainer: { position: 'fixed', bottom: '20px', right: '20px', display: 'flex', flexDirection: 'column', gap: '10px', zIndex: 1000 },
    audioButton: { width: '50px', height: '50px', borderRadius: '50%', border: '1px solid rgba(255, 255, 255, 0.4)', backgroundColor: 'rgba(255, 255, 255, 0.6)', backdropFilter: 'blur(10px)', boxShadow: '0 4px 15px rgba(0,0,0,0.1)', cursor: 'pointer', fontSize: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s ease' },
    matchGrid: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', maxWidth: '650px', margin: '20px auto' },
    matchColumn: { display: 'flex', flexDirection: 'column', gap: '10px' },
    matchItem: { padding: '15px', fontSize: '1rem', border: '2px solid #007bff', backgroundColor: 'rgba(255, 255, 255, 0.8)', color: '#007bff', borderRadius: '12px', cursor: 'pointer', transition: 'all 0.3s ease', minHeight: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' },
    matchItemSelected: { backgroundColor: '#007bff', color: 'white', transform: 'scale(1.05)', boxShadow: '0 6px 20px rgba(0, 123, 255, 0.4)' },
    matchItemMatched: { border: '2px solid #6c757d', backgroundColor: 'rgba(233, 236, 239, 0.8)', color: '#495057', cursor: 'not-allowed' },
    matchCorrect: { border: '2px solid #28a745', backgroundColor: 'rgba(212, 237, 218, 0.8)', color: '#155724' },
    matchIncorrect: { border: '2px solid #dc3545', backgroundColor: 'rgba(248, 215, 218, 0.8)', color: '#721c24' },
    mobile: {
        container: { padding: '20px', margin: '0 10px' },
        title: { fontSize: '1.8rem' },
        optionsGrid: { gridTemplateColumns: '1fr', gap: '10px' },
        matchGrid: { gridTemplateColumns: '1fr', gap: '10px' },
    }
};

export default Ujjwala;