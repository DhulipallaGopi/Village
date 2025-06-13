// src/data/data.js

import pmkisanImg from '../assets/PM-KISAN.png';
import pmayImg from '../assets/PMAY.png';
import ujjwalaImg from '../assets/UY.png';
import ayushmanBharatAbhaImg from '../assets/ABA.png';
import digitalIndiaImg from '../assets/DI.png';
import ayushmanBharatImg from '../assets/AB.png';
import startupIndiaImg from '../assets/SUI.png';
import nsapImg from '../assets/NSAP.png';
import mskImg from '../assets/MSK.png';

// This data is for other parts of your app (e.g., a different quiz)
export const questions = [
  { id: 1, translations: { en: { question: "Which document is essential to avail PM-Kisan scheme benefits?", options: ["Aadhaar Card", "Ration Card", "Voter ID", "Driving License"], answer: "Aadhaar Card" }, hi: { question: "पीएम-किसान योजना का लाभ लेने के लिए कौन सा दस्तावेज़ आवश्यक है?", options: ["आधार कार्ड", "राशन कार्ड", "वोटर आईडी", "ड्राइविंग लाइसेंस"], answer: "आधार कार्ड" }, /* ...other languages... */ } },
  { id: 2, translations: { en: { question: "What is the primary objective of the PM-Kisan scheme?", options: ["Providing urban employment", "Financial support to farmers", "Promoting digital literacy", "Developing infrastructure"], answer: "Financial support to farmers" }, hi: { question: "पीएम-किसान योजना का प्राथमिक उद्देश्य क्या है?", options: ["शहरी रोजगार प्रदान करना", "किसानों को वित्तीय सहायता", "डिजिटल साक्षरता को बढ़ावा देना", "बुनियादी ढांचे का विकास करना"], answer: "किसानों को वित्तीय सहायता" }, /* ...other languages... */ } },
];

export const languages = [
    { code: "en-US", label: "English" },
    { code: "hi-IN", label: "हिंदी (Hindi)" },
    { code: "ta-IN", label: "தமிழ் (Tamil)" },
    { code: "kn-IN", label: "ಕನ್ನಡ (Kannada)" },
    { code: "te-IN", label: "తెలుగు (Telugu)" },
    { code: "bn-IN", label: "বাংলা (Bengali)" },
    { code: "gu-IN", label: "ગુજરાતી (Gujarati)" },
    { code: "mr-IN", label: "मराठी (Marathi)" },
    { code: "ml-IN", label: "മലയാളം (Malayalam)" },
    { code: "pa-IN", label: "ਪੰਜਾਬੀ (Punjabi)" },
    { code: "or-IN", label: "ଓଡ଼ିଆ (Odia)" },
    { code: "as", label: "অসমীয়া (Assamese)" },
    { code: "sd", label: "سندھی (Sindhi)" },
    { code: "ur-IN", label: "اردو (Urdu)" },
    { code: "doi", label: "डोगरी (Dogri)" },
    { code: "sat", label: "ᱥᱟᱱᱛᱟᱞᱤ (Santali)" },
    { code: "mni", label: "ꯃৈতৈলোন (Manipuri)" },
    { code: "kok", label: "कोंकणी (Konkani)" },
    { code: "brx", label: "बर' (Bodo)" },
    { code: "mai", label: "मैथिली (Maithili)" },
    { code: "ks", label: "کٲشُر (Kashmiri)" },
    { code: "sa", label: "संस्कृत (Sanskrit)" }
];

export const footerTexts = {
  en: "© 2025 Village Resource Center. All rights reserved.",
  hi: "© 2025 ग्राम संसाधन केंद्र। सर्वाधिकार सुरक्षित।",
  ta: "© 2025 கிராம வளமையகம். அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.",
  kn: "© 2025 ಗ್ರಾಮ ಸಂಪತ್ತಿನ ಕೇಂದ್ರ. ಎಲ್ಲಾ ಹಕ್ಕುಗಳನ್ನು ಕಾಯ್ದಿರಿಸಲಾಗಿದೆ.",
  bn: "© 2025 গ্রাম সম্পদ কেন্দ্র। সর্বস্বত্ব সংরক্ষিত।",
  gu: "© 2025 ગ્રામ સંસાધન કેન્દ્ર. સર્વ હક્કો અનામત છે.",
  mr: "© 2025 ग्राम संसाधन केंद्र. सर्व हक्क राखीव.",
  ml: "© 2025 ഗ്രാമ വിഭവ കേന്ദ്രം. എല്ലാ അവകാശങ്ങളും പരിരക്ഷിച്ചിരിക്കുന്നു.",
  te: "© 2025 గ్రామ వనరుల కేంద్రం. అన్ని హక్కులు పరిరక్షించబడ్డాయి.",
  pa: "© 2025 ਪਿੰਡ ਸਰੋਤ ਕੇਂਦਰ। ਸਾਰੇ ਹੱਕ ਰਾਖਵੇਂ ਹਨ।",
  or: "© 2025 ଗ୍ରାମ ସଂସାଧନ କେନ୍ଦ୍ର | ସମସ୍ତ ଅଧିକାର ସଂରକ୍ଷିତ।",
  as: "© 2025 গাঁও সম্পদ কেন্দ্ৰ। সকলো অধিকাৰ সংৰক্ষিত।",
  sd: "© 2025 ڳوٺ وسيلن جو مرڪز. سڀ حق محفوظ آهن.",
  ur: "© 2025 دیہاتی وسائل مرکز۔ جملہ حقوق محفوظ ہیں۔",
  doi: "© 2025 गाँव संसाधन केंद्र। सर्वाधिकार सुरक्षित।",
  sat: "© 2025 ᱟᱹᱛᱩ ᱥᱟᱱᱟᱢ ᱠᱮᱱᱫᱽᱨᱟ᱾ ᱡᱷᱚᱛᱚ ᱟᱹᱭᱫᱟᱹᱨ ᱥᱟᱢᱵᱷᱲᱟᱣ ᱢᱮᱱᱟᱜ-ᱟ",
  mni: "© 2025 खुंगंग रिसोर्स सेंटर। হকশিং লিংজেল্লি।",
  kok: "© 2025 गाव साधन केंद्र. सर्व हक्क राखीव.",
  brx: "© 2025 गामि सम्पद मिरु। गासै मोनथायखौ लाखिनाय जाबाय।",
  mai: "© 2025 गाम संसाधन केंद्र। सर्वाधिकार सुरक्षित।",
  ks: "© 2025 گام وسیلہ مرکز۔ تمام حقوق چھ محفوظ۔",
  sa: "© 2025 ग्राम संसाधन केन्द्रम्। सर्वे अधिकाराः संरक्षिताः।"
};

export const buttonTexts = {
  en: { official: "Visit Official", play: "Play" },
  hi: { official: "सरकारी साइट", play: "खेलें" },
  ta: { official: "அதிகாரப்பூர்வ தளம்", play: "விளையாடு" },
  kn: { official: "ಅಧಿಕೃತ ಸೈಟ್", play: "ಆಡಿ" },
  bn: { official: "অফিসিয়াল সাইট", play: "খেলুন" },
  gu: { official: "સત્તાવાર સાઇટ", play: "રમો" },
  mr: { official: "अधिकृत साइट", play: "खेळा" },
  ml: { official: "ഔദ്യോഗിക സൈറ്റ്", play: "കളിക്കുക" },
  te: { official: "అధికారిక సైట్", play: "ఆడండి" },
  pa: { official: "ਅਧਿਕਾਰਤ ਸਾਈਟ", play: "ਖੇਡੋ" },
  or: { official: "ଅଫିସିଆଲ୍ ସାଇଟ୍", play: "ଖେଳନ୍ତୁ" },
  as: { official: "অফিচিয়েল চাইট", play: "খেলক" },
  sd: { official: "آفیشل سائيٽ", play: " کيڏو" },
  ur: { official: "آفیشل سائٹ", play: "کھیلیں" },
  doi: { official: "सरकारी साइट", play: "खेड़ो" },
  sat: { official: "ᱥᱚᱨᱠᱟᱨᱤ ठीका", play: "ᱮᱱᱮᱡ ᱢᱮ" },
  mni: { official: "ꯑꯣꯐꯤꯁꯤꯑꯦꯜ ꯋꯦꯕꯁꯥꯏꯠ", play: "ꯁꯥꯟꯅꯕꯥ" },
  kok: { official: "सरकारी साइट", play: "खेळ" },
  brx: { official: "सरखारी थाखाय", play: " गेले" },
  mai: { official: "सरकारी साइट", play: "खेलू" },
  ks: { official: "سرکٲرؠ سایٹ", play: "گِنُن" },
  sa: { official: " अधिकृतं जालस्थानम्", play: "क्रीडतु" }
};

export const schemes = [
  { id: 1, key: 'pmkisan', officialUrl: 'https://pmkisan.gov.in/', imageUrl: pmkisanImg, translations: { en: { name: 'PM-KISAN Scheme', description: 'Financial support for small and marginal farmers.' }, hi: { name: 'पीएम-किसान योजना', description: 'छोटे और सीमांत किसानों के लिए वित्तीय सहायता।' }, ta: { name: 'பிஎம்-கிசான் திட்டம்', description: 'சிறு மற்றும் குறு விவசாயிகளுக்கான நிதி உதவி.' }, kn: { name: 'ಪಿಎಂ-ಕಿಸಾನ್ ಯೋಜನೆ', description: 'ಸಣ್ಣ ಮತ್ತು ಅತಿ ಸಣ್ಣ ರೈತರಿಗೆ ಆರ್ಥಿಕ ನೆರವು.' }, te: { name: 'పీఎం-కిసాన్ పథకం', description: 'చిన్న మరియు సన్నకారు రైతులకు ఆర్థిక మద్దతు.' }, } },
  { id: 2, key: 'ujjwala', officialUrl: 'https://www.pmuy.gov.in/', imageUrl: ujjwalaImg, translations: { en: { name: 'Ujjwala Yojana', description: 'Providing LPG connections to women from BPL households.' }, hi: { name: 'उज्ज्वला योजना', description: 'बीपीएल परिवारों की महिलाओं को एलपीजी कनेक्शन प्रदान करना।' }, ta: { name: 'உஜ்வாலா யோஜனா', description: 'வறுமைக் கோட்டிற்கு கீழ் உள்ள குடும்பங்களைச் சேர்ந்த பெண்களுக்கு எல்பிஜி இணைப்புகளை வழங்குதல்.' }, kn: { name: 'ಉಜ್ವಲ ಯೋಜನೆ', description: 'BPL ಕುಟುಂಬಗಳ ಮಹಿಳೆಯರಿಗೆ LPG ಸಂಪರ್ಕಗಳನ್ನು ಒದಗಿಸುವುದು.' }, te: { name: 'ఉజ్వల యోజన', description: 'BPL కుటుంబాలలోని మహిళలకు LPG కనెక్షన్లను అందించడం.' }, } },
  { id: 3, key: 'pmpay', officialUrl: 'https://pmay-urban.gov.in/', imageUrl: pmayImg, translations: { en: { name: 'PMAY', description: 'Affordable housing for the urban and rural poor.' }, hi: { name: 'पीएमएवाई', description: 'शहरी और ग्रामीण गरीबों के लिए किफायती आवास.' }, ta: { name: 'பிஎம்ஏஒய்', description: 'நகர்ப்புற மற்றும் கிராமப்புற ஏழைகளுக்கு மலிவு விலை வீடுகள்.' }, kn: { name: 'ಪಿಎಂಎವೈ', description: 'ನಗರ ಮತ್ತು ಗ್ರಾಮೀಣ ಬಡವರಿಗೆ ಕೈಗೆಟುಕುವ ವಸತಿ.'}, te: { name: 'పిఎంఎవై', description: 'పట్టణ మరియు గ్రామీణ పేదలకు సరసమైన గృహాలు.'} } },
];