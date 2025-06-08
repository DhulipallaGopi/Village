// data.js
//DeploymentID:::::AKfycbxTMxeWJTBdOKsX3tZ979k_rOKOVRaqlNFxZFUmDBiDPVtKV7YOrkfe71N2lHsHAjY1
//webapp url:::https://script.google.com/macros/s/AKfycbw0cvCzFK1LXLTJ7ndHqtQAdyO897MpeyLR6HVnK6DaPF4aboxhi035DdvkmFlNwFUE/exec
import pmkisanImg0 from '../assets/PM-KISAN.png';
import pmkisanImg1 from '../assets/PMAY.png';
import pmkisanImg2 from '../assets/SBA.png';
import pmkisanImg3 from '../assets/UY.png';
import pmkisanImg4 from '../assets/ABA.png';
import pmkisanImg5 from '../assets/DI.png';
import pmkisanImg6 from '../assets/AB.png';
import pmkisanImg7 from '../assets/SUI.png';
import pmkisanImg8 from '../assets/NSAP.png';
import pmkisanImg9 from '../assets/MSK.png';

export const languages = [
  { code: "en", label: "English" },
  { code: "hi", label: "हिंदी" },
  { code: "ta", label: "தமிழ்" },
  { code: "kn", label: "ಕನ್ನಡ" },
  { code: "bn", label: "বাংলা" },
  { code: "gu", label: "ગુજરાતી" },
  { code: "mr", label: "मराठी" },
  { code: "ml", label: "മലയാളം" },
  { code: "te", label: "తెలుగు" },
  { code: "pa", label: "ਪੰਜਾਬੀ" },
  { code: "or", label: "ଓଡ଼ିଆ" },
  { code: "as", label: "অসমীয়া" },
  { code: "sd", label: "سندھی" },
  { code: "ur", label: "اردو" },
  { code: "doi", label: "डोगरी" },
  { code: "sat", label: "ᱥᱟᱱᱛᱟᱞᱤ" },
  { code: "mni", label: "ꯃৈতৈলোন" },
  { code: "kok", label: "कोंकणी" },
  { code: "brx", label: "बर' " },
  { code: "mai", label: "मैथिली" },
  { code: "ks", label: "کٲشُر" },
  { code: "sa", label: "संस्कृत" }
];

export const footerTexts = {
  "en": "© 2025 Village Resource Center. All rights reserved.",
  "hi": "© 2025 ग्राम संसाधन केंद्र। सर्वाधिकार सुरक्षित।",
  "ta": "© 2025 கிராம வளமையகம். அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.",
  "kn": "© 2025 ಗ್ರಾಮ ಸಂಪತ್ತಿನ ಕೇಂದ್ರ. ಎಲ್ಲಾ ಹಕ್ಕುಗಳನ್ನು ಕಾಯ್ದಿರಿಸಲಾಗಿದೆ.",
  "bn": "© 2025 গ্রাম সম্পদ কেন্দ্র। সর্বস্বত্ব সংরক্ষিত।",
  "gu": "© 2025 ગ્રામ સંસાધન કેન્દ્ર. સર્વ હક્કો અનામત છે.",
  "mr": "© 2025 ग्राम संसाधन केंद्र. सर्व हक्क राखीव.",
  "ml": "© 2025 ഗ്രാമ വിഭവ കേന്ദ്രം. എല്ലാ അവകാശങ്ങളും പരിരക്ഷിച്ചിരിക്കുന്നു.",
  "te": "© 2025 గ్రామ వనరుల కేంద్రం. అన్ని హక్కులు పరిరక్షించబడ్డాయి.",
  "pa": "© 2025 ਪਿੰਡ ਸਰੋਤ ਕੇਂਦਰ। ਸਾਰੇ ਹੱਕ ਰਾਖਵੇਂ ਹਨ।",
  "or": "© 2025 ଗ୍ରାମ ସଂସାଧନ କେନ୍ଦ୍ର | ସମସ୍ତ ଅଧିକାର ସଂରକ୍ଷିତ।",
  "as": "© 2025 গাঁও সম্পদ কেন্দ্ৰ। সকলো অধিকাৰ সংৰক্ষিত।",
  "sd": "© 2025 ڳوٺ وسيلن جو مرڪز. سڀ حق محفوظ آهن.",
  "ur": "© 2025 دیہاتی وسائل مرکز۔ جملہ حقوق محفوظ ہیں۔",
  "doi": "© 2025 गाँव संसाधन केंद्र। सर्वाधिकार सुरक्षित।",
  "sat": "© 2025 ᱜᱟᱢ ᱥᱟᱱᱛᱟᱞ ᱠᱮᱱᱰᱚᱨ | ᱵᱟᱝ ᱦᱟᱹᱞ ᱛᱮᱭᱟᱜ ᱠᱚᱱᱛᱮᱭ ᱵᱟᱭᱟᱢᱟᱜ",
  "mni": "© 2025 ꯂꯣꯏ ꯂꯩꯕ ꯑꯁꯤꯡ ꯑꯅꯤꯡꯁꯤꯡ ꯑꯃꯨꯛꯁꯤꯡ | ꯑꯃꯥ ꯅꯠꯇꯥꯔꯦꯜ",
  "kok": "© 2025 गाव साधन केंद्र. सर्व हक्क राखीव.",
  "brx": "© 2025 गॉंव रीसॉर्स सेंटर. समुहाइ हाख आरक्षित.",
  "mai": "© 2025 गाम संसाधन केंद्र। सर्वाधिकार सुरक्षित।",
  "ks": "© 2025 دیہاتی وسائل مرکز۔ جملہ حقوق محفوظ ہیں۔",
  "sa": "© 2025 ग्राम संसाधन केन्द्रम्। सर्वे अधिकाराः संरक्षिताः।"
};

export const buttonTexts = {
  en: { official: "Visit Official", play: "Play" },
  hi: { official: "सरकारी साइट", play: "खेलें" },
  ta: { official: "அதிகாரப்பூர்வ தளம்", play: "விளையாடு" },
  kn: { official: "ಸರ್ಕಾರಿ ತಾಣಕ್ಕೆ ಭೇಟಿ ನೀಡಿ", play: "ಆಡು" },
  bn: { official: "সরকারি সাইট", play: "খেলুন" },
  gu: { official: "સત્તાવાર મુલાકાત લો", play: "રમવું" },
  mr: { official: "सरकारी साइट", play: "खेळा" },
  ml: { official: "സര്‍ക്കാര്‍ സൈറ്റിലേക്ക് സന്ദര്‍ശിക്കുക", play: "കളിക്കുക" },
  te: { official: "సర్కారు సైట్‌కి వెళ్లండి", play: "ఆడండి" },
  pa: { official: "ਸਰਕਾਰੀ ਸਾਈਟ 'ਤੇ ਜਾਓ", play: "ਖੇਡੋ" },
  or: { official: "ସରକାରୀ ସାଇଟ୍କୁ ଯାଆନ୍ତୁ", play: "ଖେଳନ୍ତୁ" }
};

export const schemes =  [
  {
    id: 1,
    translations: {
      en: { name: "Pradhan Mantri Kisan Samman Nidhi (PM-KISAN)", description: "Income support scheme for farmers." },
      hi: { name: "प्रधान मंत्री किसान सम्मान निधि (PM-KISAN)", description: "किसानों के लिए आय सहायता योजना।" },
      ta: { name: "பிரதமர் மந்திரி கிசான் ஸம்மன் நிதிய் (PM-KISAN)", description: "விவசாயிகளுக்கு வருமான ஆதரவு திட்டம்." },
      kn: { name: "ಪ್ರಧಾನಮಂತ್ರಿ ಕೃಷಿಕರ ಸನ್ಮಾನ ನಿಧಿ (PM-KISAN)", description: "ಕೃಷಿಕರಿಗೆ ಆದಾಯ ಬೆಂಬಲ ಯೋಜನೆ." },
      bn: { name: "প্রধানমন্ত্রী কিষাণ সম্মান নিধি (PM-KISAN)", description: "কৃষকদের জন্য আয় সহায়তা কর্মসূচি।" },
      gu: { name: "પ્રધાનમંત્રી ખેડૂત સન્માન નિધિ (PM-KISAN)", description: "કૃષકો માટે આવક સહાય યોજના." },
      mr: { name: "प्रधानमंत्री किसान सम्मान निधी (PM-KISAN)", description: "शेतकऱ्यांसाठी उत्पन्न सहाय्यता योजना." },
      ml: { name: "പ്രധാനമന്ത്രി കിസാൻ സന്മാൻ നിധി (PM-KISAN)", description: "കർഷകർക്ക് വരുമാനം പിന്തുണ പദ്ധതി." },
      te: { name: "ప్రధాన మంత్రి కిసాన్ సన్మాన్ నిధి (PM-KISAN)", description: "వ్యవసాయులకు ఆదాయం మద్దతు పథకం." },
      pa: { name: "ਪ੍ਰਧਾਨ ਮੰਤਰੀ ਕਿਸਾਨ ਸਨਮਾਨ ਨਿਧਿ (PM-KISAN)", description: "ਕਿਸਾਨਾਂ ਲਈ ਆਮਦਨ ਸਹਾਇਤਾ ਯੋਜਨਾ।" },
      or: { name: "ପ୍ରଧାନମନ୍ତ୍ରୀ କିଷାଣ ସମ୍ମାନ ନିଧି (PM-KISAN)", description: "କୃଷକମାନଙ୍କ ପାଇଁ ଆୟ ସହାୟତା ଯୋଜନା।" },
      as: { name: "প্ৰধানমন্ত্ৰী কৃষক সন্মান নিধি (PM-KISAN)", description: "কৃষকসকলৰ বাবে আয় সহায়তা আঁচনি।" },
      ur: { name: "وزیراعظم کسان اعزاز فنڈ (PM-KISAN)", description: "کسانوں کے لیے آمدنی امدادی اسکیم۔" },
      sd: { name: "وزيراعظم ڪسان سڏاڻي نٿي (PM-KISAN)", description: "ڪسانن لاءِ آمدني مدد اسڪيم." },
      kok: { name: "प्रधानमंत्री किसान सम्मान निधि (PM-KISAN)", description: "शेतीदारांसाठी उत्पन्न सहाय्यता योजना." },
      ne: { name: "प्रधानमन्त्री किसान सम्मान निधि (PM-KISAN)", description: "किसानहरूको लागि आम्दानी सहायता योजना।" },
      ks: { name: "وزیراعظم کسان اعزاز فنڈ (PM-KISAN)", description: "کسانوں کے لیے آمدنی امدادی اسکیم۔" },
      mai: { name: "प्रधानमंत्री किसान सम्मान निधि (PM-KISAN)", description: "किसान सभक लेल आमदनी सहायता योजना।" },
      doi: { name: "प्रधान मंत्री किसान सम्मान निधि (PM-KISAN)", description: "किसानां खातिर आमदनी मदद योजना।" },
      bdo: { name: "प्रधानमंत्री किसान सम्मान निधि (PM-KISAN)", description: "किसान मनो आमदनी मदद योजना।" },
      mni: { name: "প্ৰধানমন্ত্ৰী কিসান সন্মান নিধি (PM-KISAN)", description: "কিসানবির ফোর আয় সহায়তা প্রকল্প।" }
    },
    officialUrl: "https://pmkisan.gov.in/",
    link: "https://www.bookwidgets.com/play/u0CkPZH5-iQAExKbP7gAAA/MGXNUMS/documents-requi?teacher_id=5240680502263808",
    imageUrl:pmkisanImg0
  },
  {
    id: 2,
    translations: {
      en: { name: "Pradhan Mantri Awas Yojana (PMAY)", description: "Affordable housing scheme for all." },
      hi: { name: "प्रधान मंत्री आवास योजना (PMAY)", description: "सभी के लिए किफायती आवास योजना।" },
      ta: { name: "பிரதமர் மந்திரி ஆவாஸ் யோஜனா (PMAY)", description: "அனைவருக்கும் குறைந்த செலவில் வீடு வழங்கும் திட்டம்." },
      kn: { name: "ಪ್ರಧಾನಮಂತ್ರಿ ಆವಾಸ್ ಯೋಜನೆ (PMAY)", description: "ಎಲ್ಲರಿಗೂ ಸಾದ್ಯವಾದ ಗೃಹ ಯೋಜನೆ." },
      bn: { name: "প্রধানমন্ত্রী আবাস যোজনা (PMAY)", description: "সবার জন্য সাশ্রয়ী আবাসন প্রকল্প।" },
      gu: { name: "પ્રધાનમંત્રી આવાસ યોજના (PMAY)", description: "બધા માટે સસ્તું ઘર યોજના." },
      mr: { name: "प्रधानमंत्री आवास योजना (PMAY)", description: "सर्वांसाठी परवडणारी घर योजना." },
      ml: { name: "പ്രധാനമന്ത്രി ആവാസ് പദ്ധതി (PMAY)", description: "എല്ലാവർക്കും സാമ്പത്തികമായി വസതി പദ്ധതിയാണിത്." },
      te: { name: "ప్రధాన మంత్రి ఆవాస్ యోజన (PMAY)", description: "అందరికీ తక్కువ ధరకే இల్లు అందించే పథకం." },
      pa: { name: "ਪ੍ਰਧਾਨ ਮੰਤਰੀ ਆਵਾਸ ਯੋਜਨਾ (PMAY)", description: "ਸਭ ਲਈ ਸਸਤਾ ਘਰ ਯੋਜਨਾ।" },
      or: { name: "ପ୍ରଧାନମନ୍ତ୍ରୀ ଆବାସ ଯୋଜନା (PMAY)", description: "ସମସ୍ତଙ୍କ ପାଇଁ ସସ୍ତା ଘର ଯୋଜନା।" },
    as: { name: "প্ৰধানমন্ত্ৰী আৱাস যোজনা (PMAY)", description: "সকলোৰ বাবে সুলভ ঘৰ যোজনা।" },
      ur: { name: "وزیراعظم رہائش سکیم (PMAY)", description: "سب کے لیے سستی رہائش اسکیم۔" },
      sd: { name: "وزيراعظم رهائشي اسڪيم (PMAY)", description: "سڀني لاءِ سستي رهائش اسڪيم." },
      kok: { name: "प्रधानमंत्री आवास योजना (PMAY)", description: "सर्वांसाठी परवडणारी घर योजना." },
      ne: { name: "प्रधानमन्त्री आवास योजना (PMAY)", description: "सबैका लागि सस्तो आवास योजना।" },
      ks: { name: "وزیراعظم رہائش سکیم (PMAY)", description: "سب کے لیے سستی رہائش اسکیم۔" },
      mai: { name: "प्रधानमंत्री आवास योजना (PMAY)", description: "सबके लिए सस्ता आवास योजना।" },
      doi: { name: "प्रधान मंत्री आवास योजना (PMAY)", description: "सबकूं सस्ता घर योजना।" },
      bdo: { name: "प्रधानमंत्री आवास योजना (PMAY)", description: "सभी के लिए सस्ता घर योजना." },
      mni: { name: "প্ৰধানমন্ত্ৰী আৱাস যোজনা (PMAY)", description: "সকলৰ বাবে সুলভ ঘৰ যোজনা।" }
    },
    officialUrl: "https://pmaymis.gov.in/",
    link: "https://quizizz.com/embed/quiz/6844138d15c7d3c3cda1dd61",
    imageUrl:pmkisanImg1
  },
  {
    id: 3,
    translations: {
      en: { name: "Swachh Bharat Abhiyan", description: "Clean India Mission for sanitation." },
      hi: { name: "स्वच्छ भारत अभियान", description: "स्वच्छता के लिए भारत मिशन।" },
      ta: { name: "சுவச்ச் பாரத் அபியான்", description: "சுகாதாரத்திற்கான இந்தியா மிஷன்." },
      kn: { name: "ಸ್ವಚ್ಛ ಭಾರತ ಅಭಿಯಾನ", description: "ಶುಚಿಗೊಳಿಸುವ ಭಾರತ ಮಿಷನ್." },
      bn: { name: "প্রধানমন্ত্রী কিষাণ সম্মান নিধি (PM-KISAN)", description: "কৃষকদের জন্য আয় সহায়তা কর্মসূচি।" },
      gu: { name: "પ્રધાનમંત્રી ખેડૂત સન્માન નિધિ (PM-KISAN)", description: "કૃષકો માટે આવક સહાય યોજના." },
      mr: { name: "प्रधानमंत्री किसान सम्मान निधी (PM-KISAN)", description: "शेतकऱ्यांसाठी उत्पन्न सहाय्यता योजना." },
      ml: { name: "പ്രധാനമന്ത്രി കിസാൻ സന്മാൻ നിധി (PM-KISAN)", description: "കർഷകർക്ക് വരുമാനം പിന്തുണ പദ്ധതി." },
      te: { name: "ప్రధాన మంత్రి కిసాన్ సన్మాన్ నిధి (PM-KISAN)", description: "వ్యవసాయులకు ఆదాయం మద్దతు పథకం." },
      pa: { name: "ਪ੍ਰਧਾਨ ਮੰਤਰੀ ਕਿਸਾਨ ਸਨਮਾਨ ਨਿਧਿ (PM-KISAN)", description: "ਕਿਸਾਨਾਂ ਲਈ ਆਮਦਨ ਸਹਾਇਤਾ ਯੋਜਨਾ।" },
      or: { name: "ପ୍ରଧାନମନ୍ତ୍ରୀ କିଷାଣ ସମ୍ମାନ ନିଧି (PM-KISAN)", description: "କୃଷକମାନଙ୍କ ପାଇଁ ଆୟ ସହାୟତା ଯୋଜନା।" },
      as: { name: "প্ৰধানমন্ত্ৰী কৃষক সন্মান নিধি (PM-KISAN)", description: "কৃষকসকলৰ বাবে আয় সহায়তা আঁচনি।" },
      ur: { name: "وزیراعظم کسان اعزاز فنڈ (PM-KISAN)", description: "کسانوں کے لیے آمدنی امدادی اسکیم۔" },
      sd: { name: "وزيراعظم ڪسان سڏاڻي نٿي (PM-KISAN)", description: "ڪسانن لاءِ آمدني مدد اسڪيم." },
      kok: { name: "प्रधानमंत्री किसान सम्मान निधि (PM-KISAN)", description: "शेतीदारांसाठी उत्पन्न सहाय्यता योजना." },
      ne: { name: "प्रधानमन्त्री किसान सम्मान निधि (PM-KISAN)", description: "किसानहरूको लागि आम्दानी सहायता योजना।" },
      ks: { name: "وزیراعظم کسان اعزاز فنڈ (PM-KISAN)", description: "کسانوں کے لیے آمدنی امدادی اسکیم۔" },
      mai: { name: "प्रधानमंत्री किसान सम्मान निधि (PM-KISAN)", description: "किसान सभक लेल आमदनी सहायता योजना।" },
      doi: { name: "प्रधान मंत्री किसान सम्मान निधि (PM-KISAN)", description: "किसानां खातिर आमदनी मदद योजना।" },
      bdo: { name: "प्रधानमंत्री किसान सम्मान निधि (PM-KISAN)", description: "किसान मनो आमदनी मदद योजना।" },
      mni: { name: "প্ৰধানমন্ত্ৰী কিসান সন্মান নিধি (PM-KISAN)", description: "কিসানবির ফোর আয় সহায়তা প্রকল্প।" }
    },
    officialUrl: "https://swachhbharat.mygov.in/",
    link: "https://www.bookwidgets.com/play/lOVjM3IQ-iQAFrPGGbgAAA/9GWEY9P/crosswords?teacher_id=5240680502263808",
    imageUrl:pmkisanImg2
  },
  {
    id: 4,
    translations: {
      en: { name: "Ujjwala Yojana", description: "Free LPG connections to women." },
      hi: { name: "उज्ज्वला योजना", description: "महिलाओं को मुफ्त एलपीजी कनेक्शन।" },
      ta: { name: "உஜ்ஜ்வலா யோஜனா", description: "பெண்களுக்கு இலவச எல்பிஜி இணைப்புகள்." },
      kn: { name: "ಉಜ್ಜ್ವಲಾ ಯೋಜನೆ", description: "ಹೆಂಗಸರಿಗೆ ಉಚಿತ LPG ಸಂಪರ್ಕ." },
      bn: { name: "উজ্জ্বলা যোজনা", description: "মহিলাদের জন্য বিনামূল্যে এলপিজি সংযোগ।" },
      gu: { name: "ઉज्जવલા યોજના", description: "મહિલાઓ માટે મફત LPG કનેક્શન." },
      mr: { name: "उज्ज्वला योजना", description: "महिलांसाठी मोफत LPG कनेक्शन." },
      ml: { name: "ഉജ്ജ്വല പദ്ധതി", description: "സ്ത്രീകൾക്ക് സൗജന്യ LPG കണക്ഷനുകൾ." },
      te: { name: "ఉజ్జ్వಲಾ యోజన", description: "స్త్రీలకు ఉచిత LPG కనెక్షన్లు." },
      pa: { name: "ਉੱਜਵਲਾ ਯੋਜਨਾ", description: "ਮਹਿਲਾਵਾਂ ਲਈ ਮੁਫ਼ਤ LPG ਕਨੈਕਸ਼ਨ।" },
      or: { name: "ଉଜ୍ଜ୍ୱଲା ଯୋଜନା", description: "ମହିଳାଙ୍କ ପାଇଁ ମାଗଣା LPG କନେକ୍ସନ୍।" },
      as: { name: "উজ্জ্বল যোজনা", description: "মহিলাসকলৰ বাবে বিনামূলীয়া এলপিজি সংযোগ।" },
      ur: { name: "اجوالہ یوجنا", description: "خواتین کے لیے مفت ایل پی جی کنکشن۔" },
      sd: { name: "اجوالا یوجنا", description: "خواتین لاءِ مفت LPG ڪنيڪشن." },
      kok: { name: "उज्ज्वला योजना", description: "महिलांसाठी मोफत LPG कनेक्शन." },
      ne: { name: "उज्ज्वला योजना", description: "महिलाहरूका लागि निशुल्क LPG जडान।" },
      ks: { name: "اجوالہ یوجنا", description: "خواتین کے لیے مفت ایل پی جی کنکشن۔" },
      mai: { name: "उज्ज्वला योजना", description: "महिलावन खातिर मुफ़्त LPG कनेक्शन।" },
      doi: { name: "उज्ज्वला योजना", description: "महिलan खातर मुफ़्त LPG कनेक्शन।" },
      bdo: { name: "उज्ज्वला योजना", description: "महिलावन खातिर मुफ़्त LPG कनेक्शन।" },
      mni: { name: "উজ্জ্বল যোজনা", description: "মহিলাবির ফোর বিনামূলীয়া LPG সংযোগ।" }
    },
    officialUrl: "https://www.pmujjwalayojana.com/",
    link: "https://www.bookwidgets.com/play/lOVjM3IQ-iQAFrPGGbgAAA/9GWEY9P/crosswords?teacher_id=5240680502263808",
    imageUrl:pmkisanImg3
  },
  {
    id: 5,
    translations: {
      en: { name: "Atmanirbhar Bharat Abhiyan", description: "Self-reliant India campaign." },
      hi: { name: "आत्मनिर्भर भारत अभियान", description: "स्वावलंबी भारत अभियान।" },
      ta: { name: "ஆத்மநிர்பர் பாரத் அபியான்", description: "சுயாதீன இந்தியா இயக்கம்." },
      kn: { name: "ಆತ್ಮನಿರ್ಭರ್ ಭಾರತ ಅಭಿಯಾನ", description: "ಸ್ವಾವಲಂಬಿ ಭಾರತ ಅಭಿಯಾನ." },
      bn: { name: "আত্মনির্ভর ভারত অভিযান", description: "স্বনির্ভর ভারত অভিযান।" },
      gu: { name: "આત્મનિર્ભર ભારત અભિયાન", description: "સ્વયંસાધન ભારત અભિયાન." },
      mr: { name: "आत्मनिर्भर भारत अभियान", description: "स्वावलंबी भारत अभियान." },
      ml: { name: "ആത്മനിർഭർ ഭാരത് അഭിയാൻ", description: "സ്വയംപര്യാപ്ത ഭാരത് കാമ്പയിൻ." },
      te: { name: "ఆత్మనిర్భర్ భారత్ అభియాన్", description: "స్వయం ఆధారిత భారత్ ప్రచారం." },
      pa: { name: "ਆਤਮਨਿਰਭਰ ਭਾਰਤ ਅਭਿਆਨ", description: "ਸਵੈ-ਨਿਰਭਰ ਭਾਰਤ ਮੁਹਿੰਮ।" },
      or: { name: "ଆତ୍ମନିର୍ଭର ଭାରତ ଅଭିଯାନ", description: "ସ୍ଵୟଂନିର୍ଭର ଭାରତ ଅଭିଯାନ।" },
      as: { name: "আত্মনির্ভৰ ভাৰত অভিযান", description: "স্বনির্ভৰ ভাৰত অভিযান।" },
      ur: { name: "آتم نربھر بھارت مہم", description: "خود کفیل بھارت مہم۔" },
      sd: { name: "آتم نربھر ڀارت مهم", description: "خودمختيار ڀارت مهم." },
      kok: { name: "आत्मनिर्भर भारत अभियान", description: "स्वावलंबी भारत अभियान." },
      ne: { name: "आत्मनिर्भर भारत अभियान", description: "आत्मनिर्भर भारत अभियान।" },
      ks: { name: "آتم نربھر بھارت مہم", description: "خود کفیل بھارت مہم۔" },
      mai: { name: "आत्मनिर्भर भारत अभियान", description: "स्वावलंबी भारत अभियान।" },
      doi: { name: "आत्मनिर्भर भारत अभियान", description: "स्वावलंबी भारत अभियान।" },
      bdo: { name: "आत्मनिर्भर भारत अभियान", description: "स्वावलंबी भारत अभियान।" },
      mni: { name: "আত্মনির্ভৰ ভাৰত অভিযান", description: "স্বনির্ভৰ ভাৰত অভিযান।" }
    },
    officialUrl: "https://atmanirbharbharat.mygov.in/",
    link: "https://www.bookwidgets.com/play/lOVjM3IQ-iQAFrPGGbgAAA/9GWEY9P/crosswords?teacher_id=5240680502263808",
    imageUrl:pmkisanImg4
  },
  {
    id: 6,
    translations: {
      en: { name: "Digital India", description: "Transforming India into a digitally empowered society." },
      hi: { name: "डिजिटल इंडिया", description: "भारत को डिजिटल रूप से सशक्त बनाना।" },
      ta: { name: "டிஜிட்டல் இந்தியா", description: "இந்தியாவை டிஜிட்டல் மூலம் வலுவான சமூகவாக்கமாக மாற்றுதல்." },
      kn: { name: "ಡಿಜಿಟಲ್ ಇಂಡಿಯಾ", description: "ಭಾರತವನ್ನು ಡಿಜಿಟಲ್ ಶಕ್ತಿಶಾಲಿ ಸಮಾಜವಾಗಿ ಪರಿವರ್ತಿಸುವುದು." },
      bn: { name: "ডিজিটাল ইন্ডিয়া", description: "ভারতকে ডিজিটালি ক্ষমতায়িত সমাজে রূপান্তর করা।" },
      gu: { name: "ડિજિટલ ઇન્ડિયા", description: "ભારતને ડિજિટલ રીતે સશક્ત સમાજ બનાવવું." },
      mr: { name: "डिजिटल इंडिया", description: "भारताला डिजिटल समर्थ समाजात रूपांतरित करणे." },
      ml: { name: "ഡിജിറ്റൽ ഇന്ത്യ", description: "ഇന്ത്യയെ ഡിജിറ്റൽ സമർത്ഥമായ സമൂഹമാക്കുക." },
      te: { name: "డిజిటల్ ఇండియా", description: "భారతాన్ని డిజిటల్ సాధికారత ఉన్న సమాజంగా మార్చడం." },
      pa: { name: "ਡਿਜੀਟਲ ਇੰਡੀਆ", description: "ਭਾਰਤ ਨੂੰ ਡਿਜੀਟਲ ਤਾਕਤਵਰ ਸਮਾਜ ਵਿੱਚ ਬਦਲਣਾ।" },
      or: { name: "ଡିଜିଟାଲ୍ ଇଣ୍ଡିଆ", description: "ଭାରତକୁ ଡିଜିଟାଲ୍ ସମ୍ପ୍ରତିଷ୍ଠିତ ସମାଜରେ ପରିଣତ କରିବା।" },
      as: { name: "ডিজিটাল ইণ্ডিয়া", description: "ভাৰতক ডিজিটেল সক্ষম সমাজলৈ ৰূপান্তৰ।" },
      ur: { name: "ڈیجیٹل انڈیا", description: "بھارت کو ڈیجیٹل طور پر مستحکم معاشرہ بنانا۔" },
      sd: { name: "ڊيجيٽل انڊيا", description: "ڀارت کي ڊجيٽل طور تي بااختيار سماج بڻائڻ." },
      kok: { name: "डिजिटल इंडिया", description: "भारताला डिजिटल समर्थ समाजात रूपांतरित करणे." },
      ne: { name: "डिजिटल इंडिया", description: "भारतलाई डिजिटल सशक्त समाजमा परिवर्तन गर्ने।" },
      ks: { name: "ڈیجیٹل انڈیا", description: "بھارت کو ڈیجیٹل طور پر مستحکم معاشرہ بنانا۔" },
      mai: { name: "डिजिटल इंडिया", description: "भारत के डिजिटल सशक्त समाज में बदलना।" },
      doi: { name: "डिजिटल इंडिया", description: "भारत नूं डिजिटल सशक्त समाज बनाना।" },
      bdo: { name: "डिजिटल इंडिया", description: "भारत के डिजिटल सशक्त समाज में बदलना।" },
      mni: { name: "ডিজিটাল ইণ্ডিয়া", description: "ভাৰতক ডিজিটেল সক্ষম সমাজলৈ ৰূপান্তৰ।" }
    },
    officialUrl: "https://digitalindia.gov.in/",
    link: "https://www.bookwidgets.com/play/lOVjM3IQ-iQAFrPGGbgAAA/9GWEY9P/crosswords?teacher_id=5240680502263808",
    imageUrl:pmkisanImg5
  },
  {
    id: 7,
    translations: {
      en: { name: "Ayushman Bharat", description: "National health protection scheme." },
      hi: { name: "आयुष्मान भारत", description: "राष्ट्रीय स्वास्थ्य सुरक्षा योजना।" },
      ta: { name: "ஆயுஷ்மான் பாரத்", description: "தேசிய சுகாதார பாதுகாப்பு திட்டம்." },
      kn: { name: "ಆಯುಷ್ಮಾನ್ ಭಾರತ", description: "ರಾಷ್ಟ್ರೀಯ ಆರೋಗ್ಯ ರಕ್ಷಣೆ ಯೋಜನೆ." },
      bn: { name: "আয়ুষ্মান ভারত", description: "জাতীয় স্বাস্থ্য সুরক্ষা কর্মসূচি।" },
      gu: { name: "આયુષ્માન ભારત", description: "રાષ્ટ્રીય આરોગ્ય સુરક્ષા યોજના." },
      mr: { name: "आयुष्मान भारत", description: "राष्ट्रीय आरोग्य सुरक्षा योजना." },
      ml: { name: "ആയുഷ്മാൻ ഭാരത്", description: "ദേശീയ ആരോഗ്യ സംരക്ഷണ പദ്ധതി." },
      te: { name: "ఆయుష్మాన్ భారత్", description: "జాతీయ ఆరోగ్య రక్షణ పథకం." },
      pa: { name: "ਆਯੁਸ਼ਮਾਨ ਭਾਰਤ", description: "ਕੌਮੀ ਸਿਹਤ ਸੁਰੱਖਿਆ ਯੋਜਨਾ।" },
      or: { name: "ଆୟୁଷ୍ମାନ ଭାରତ", description: "ରାଷ୍ଟ୍ରୀୟ ସ୍ୱାସ୍ଥ୍ୟ ସୁରକ୍ଷା ଯୋଜନା।" },
      as: { name: "আয়ুষ্মান ভাৰত", description: "ৰাষ্ট্ৰীয় স্বাস্থ্য সুৰক্ষা আঁচনি।" },
      ur: { name: "آیو شمان بھارت", description: "قومی صحت تحفظ اسکیم۔" },
      sd: { name: "آیوشمان بھارت", description: "قومی صحت تحفظ سکیم." },
      kok: { name: "आयुष्मान भारत", description: "राष्ट्रीय आरोग्य सुरक्षा योजना." },
      ne: { name: "आयुष्मान भारत", description: "राष्ट्रिय स्वास्थ्य सुरक्षा योजना।" },
      ks: { name: "آیو شمان بھارت", description: "قومی صحت تحفظ اسکیم۔" },
      mai: { name: "आयुष्मान भारत", description: "राष्ट्रीय स्वास्थ्य सुरक्षा योजना।" },
      doi: { name: "आयुष्मान भारत", description: "राष्ट्रीय स्वास्थ्य सुरक्षा योजना।" },
      bdo: { name: "आयुष्मान भारत", description: "राष्ट्रीय स्वास्थ्य सुरक्षा योजना." },
      mni: { name: "আয়ুষ্মান ভাৰত", description: "ৰাষ্ট্ৰীয় স্বাস্থ্য সুৰক্ষা আঁচনি।" }
    },
    officialUrl: "https://health.gov.in/ayushmanbharat-national-health-protection-mission",
    link: "https://www.bookwidgets.com/play/lOVjM3IQ-iQAFrPGGbgAAA/9GWEY9P/crosswords?teacher_id=5240680502263808",
    imageUrl:pmkisanImg6
  },
  {
    id: 8,
    translations: {
      en: { name: "Stand Up India", description: "Promotes entrepreneurship among SC/ST and women." },
      hi: { name: "स्टैंड अप इंडिया", description: "अत्यल्पसंख्यक/अनुसूचित जाति और महिलाओं में उद्यमिता को बढ़ावा।" },
      ta: { name: "ஸ்டேண்ட் அப் இந்தியா", description: "குடியரசு/சிறுபான்மை மற்றும் பெண்களில் தொழில்முனைவோரை ஊக்குவிக்கும்." },
      kn: { name: "ಸ್ಟ್ಯಾಂಡ್ ಅಪ್ ಇಂಡಿಯಾ", description: "SC/ST ಮತ್ತು ಮಹಿಳೆಯರ ಉದ್ಯಮಶೀಲತೆಯನ್ನು ಉತ್ತೇಜಿಸುವುದು." },
      bn: { name: "স্ট্যান্ড আপ ইন্ডিয়া", description: "SC/ST এবং নারীদের Entreprenueurship প্রচার।" },
      gu: { name: "સ્ટેન્ડ અપ ઇન્ડિયા", description: "SC/ST અને મહિલાઓમાં ઉદ્યોગસાહસને પ્રોત્સાહન." },
      mr: { name: "स्टँड अप इंडिया", description: "SC/ST व महिला उद्योजकता वाढवणे." },
      ml: { name: "സ്റ്റാൻഡ് അപ് ഇന്ത്യ", description: "SC/ST ഉം സ്ത്രീകളും സംരംഭകത്വം പ്രോത്സാഹിപ്പിക്കുന്നു." },
      te: { name: "స్టాండ్ అప్ ఇండియా", description: "SC/ST మరియు మహిళలలో వ్యాపారాన్ని ప్రోత్సహించడం." },
      pa: { name: "ਸਟੈਂਡ ਅਪ ਇੰਡੀਆ", description: "SC/ST ਅਤੇ ਔਰਤਾਂ ਵਿਚ ਉਦਯੋਗਪਤੀਪਨ ਨੂੰ ਵਧਾਉਣਾ।" },
      or: { name: "ଷ୍ଟ୍ୟାଣ୍ଡ ଅପ୍ ଇଣ୍ଡିଆ", description: "SC/ST ଓ ମହିଳାମାନେ ପାଇଁ ଉଦ୍ୟମୀତ୍ୱ ପ୍ରୋତ୍ସାହନ।" },
      as: { name: "ষ্টেণ্ড আপ ইণ্ডিয়া", description: "SC/ST আৰু মহিলাসকলৰ উদ্যোগ প্ৰচাৰ।" },
      ur: { name: "اسٹینڈ اپ انڈیا", description: "SC/ST اور خواتین میں کاروباری صلاحیت کو فروغ دینا۔" },
      sd: { name: "اسٽينڊ اپ انڊيا", description: "SC/ST ۽ عورتن ۾ ڪاروباري صلاحيت کي وڌائڻ." },
      kok: { name: "स्टँड अप इंडिया", description: "SC/ST व महिला उद्योजकता वाढवणे." },
      ne: { name: "स्टैंड अप इंडिया", description: "SC/ST र महिलामाझ उद्यमशीलता प्रवर्द्धन।" },
      ks: { name: "اسٹینڈ اپ انڈیا", description: "SC/ST اور خواتین میں کاروباری صلاحیت کو فروغ دینا۔" },
      mai: { name: "स्टैंड अप इंडिया", description: "SC/ST अउर महिला में उद्यमिता बढ़ावा।" },
      doi: { name: "स्टैंड अप इंडिया", description: "SC/ST ते महिलावन विच उद्यमिता बढ़ावा।" },
      bdo: { name: "स्टैंड अप इंडिया", description: "SC/ST आनि महिला मनो उद्यमिता बढ़ावा." },
      mni: { name: "ষ্টেণ্ড আপ ইণ্ডিয়া", description: "SC/ST অমং মহিলাবির উদ্যোগ প্রচাৰ।" }
    },
    officialUrl: "https://standupmitra.in/",
    link: "https://www.bookwidgets.com/play/lOVjM3IQ-iQAFrPGGbgAAA/9GWEY9P/crosswords?teacher_id=5240680502263808",
    imageUrl:pmkisanImg7
  },
  {
    id: 9,
    translations: {
      en: { name: "National Social Assistance Programme (NSAP)", description: "Social assistance for the elderly and disabled." },
      hi: { name: "राष्ट्रीय सामाजिक सहायता कार्यक्रम (NSAP)", description: "बुजुर्गों और विकलांगों के लिए सामाजिक सहायता।" },
      ta: { name: "தேசிய சமூக உதவி திட்டம் (NSAP)", description: "மூதாதை மற்றும் மாற்றுத்திறனாளிகளுக்கு சமூக உதவி." },
      kn: { name: "ರಾಷ್ಟ್ರೀಯ ಸಾಮಾಜಿಕ ಸಹಾಯ ಕಾರ್ಯಕ್ರಮ (NSAP)", description: "ಜ老人 ಮತ್ತು ಅಂಗವಿಕಲರಿಗೆ ಸಾಮಾಜಿಕ ಸಹಾಯ." },
      bn: { name: "জাতীয় সামাজিক সহায়তা কর্মসূচি (NSAP)", description: "বয়স্ক ও প্রতিবন্ধীদের জন্য সামাজিক সহায়তা।" },
      gu: { name: "રાષ્ટ્રીય સામાજિક સહાયતા કાર્યક્રમ (NSAP)", description: "વૃદ્ધ અને વિકલાંગ માટે સામાજિક સહાય." },
      mr: { name: "राष्ट्रीय सामाजिक सहाय्यता कार्यक्रम (NSAP)", description: "वृद्ध व अपंगांसाठी सामाजिक सहाय्यता." },
      ml: { name: "ദേശീയ സാമൂഹിക സഹായ പദ്ധതി (NSAP)", description: "മുതിർന്നവർക്കും വൈകല്യബാധിതർക്കും സാമൂഹിക സഹായം." },
      te: { name: "జాతీయ సామాజిక సహాయం కార్యక్రమం (NSAP)", description: "వృద్ధులు మరియు వికలాంగులకు సామాజిక సహాయం." },
      pa: { name: "ਰਾਸ਼ਟਰੀ ਸਮਾਜਿਕ ਸਹਾਇਤਾ ਕਾਰਜਕ੍ਰਮ (NSAP)", description: "ਵੱਡਿਆਂ ਅਤੇ ਅਪਾਹਜਾਂ ਲਈ ਸਮਾਜਿਕ ਸਹਾਇਤਾ।" },
      or: { name: "ରାଷ୍ଟ୍ରୀୟ ସାମାଜିକ ସହାୟତା କାର୍ଯ୍ୟକ୍ରମ (NSAP)", description: "ବୃଦ୍ଧ ଓ ଅପଙ୍ଗଙ୍କ ପାଇଁ ସାମାଜିକ ସହାୟତା।" },
      as: { name: "ৰাষ্ট্ৰীয় সমাজিক সহায়তা কাৰ্যক্রম (NSAP)", description: "বৃদ্ধ আৰু অৱশক্তসকলৰ বাবে সমাজিক সহায়তা।" },
      ur: { name: "قومی سماجی امداد پروگرام (NSAP)", description: "بزرگ اور معذور افراد کے لیے سماجی امداد۔" },
      sd: { name: "قومي سماجي امداد پروگرام (NSAP)", description: "بزرگ ۽ معذور ماڻهن لاءِ سماجي امداد." },
      kok: { name: "राष्ट्रीय सामाजिक सहायता कार्यक्रम (NSAP)", description: "वृद्ध व अपंगांसाठी सामाजिक सहाय्यता." },
      ne: { name: "राष्ट्रिय सामाजिक सहायता कार्यक्रम (NSAP)", description: "बृद्ध र अपांगहरूका लागि सामाजिक सहायता।" },
      ks: { name: "قومی سماجی امداد پروگرام (NSAP)", description: "بزرگ اور معذور افراد کے لیے سماجی امداد۔" },
      mai: { name: "राष्ट्रीय सामाजिक सहायता कार्यक्रम (NSAP)", description: "बुजुर्ग आ विकलांगन खातिर सामाजिक सहायता।" },
      doi: { name: "राष्ट्रीय सामाजिक सहायता कार्यक्रम (NSAP)", description: "बुजुर्ग आ विकलांगन खातर सामाजिक सहायता।" },
      bdo: { name: "राष्ट्रीय सामाजिक सहायता कार्यक्रम (NSAP)", description: "बुजुर्ग आ विकलांग मनो सामाजिक सहायता." },
      mni: { name: "ৰাষ্ট্ৰীয় সমাজিক সহায়তা কাৰ্যক্রম (NSAP)", description: "বৃদ্ধ অমং অৱশক্তসকলৰ বাবে সমাজিক সহায়তা।" }
    },
    officialUrl: "https://socialjustice.gov.in/nsap",
    link: "https://www.bookwidgets.com/play/lOVjM3IQ-iQAFrPGGbgAAA/9GWEY9P/crosswords?teacher_id=5240680502263808",
    imageUrl:pmkisanImg8
  },
  {
    id: 10,
    translations: {
      en: { name: "Mahila Shakti Kendra", description: "Empowering rural women through community participation." },
      hi: { name: "महिला शक्ति केंद्र", description: "सामुदायिक भागीदारी के माध्यम से ग्रामीण महिलाओं को सशक्त बनाना।" },
      ta: { name: "மகிலா சக்தி கேந்திரா", description: "சமூக பங்கேற்பு மூலம் கிராமப்புற பெண்களை அதிகாரப்பூர்வமாக மாற்றுதல்." },
      kn: { name: "ಮಹಿಳಾ ಶಕ್ತಿ ಕೇಂದ್ರ", description: "ಸಮುದಾಯದ ಪಾಲ್ಗೊಳ್ಳುವಿಕೆಯಿಂದ ಗ್ರಾಮೀಣ ಮಹಿಳೆಯರನ್ನು ಶಕ್ತಿಶಾಲಿಯಾಗಿಸುವುದು." },
      bn: { name: "মহিলা শক্তি কেন্দ্র", description: "সামাজিক অংশগ্রহণের মাধ্যমে গ্রামীণ মহিলাদের ক্ষমতায়ন।" },
      gu: { name: "મહિલા શક્તિ કેન્દ્ર", description: "સામુદાયિક ભાગીદારીથી ગ્રામિણ મહિલાઓને સશક્ત બનાવવું." },
      mr: { name: "महिला शक्ती केंद्र", description: "समुदायाच्या सहभागाने ग्रामीण महिलांना सशक्त बनवणे." },
      ml: { name: "മഹിളാ ശക്തി കേന്ദ്രം", description: "സമൂഹ പങ്കാളിത്തത്തിലൂടെ ഗ്രാമീണ സ്ത്രീകളെ ശക്തിപ്പെടുത്തുക." },
      te: { name: "మహిళా శక్తి కేంద్రము", description: "సమాజ భాగస్వామ్యంతో గ్రామీణ మహిళలను శక్తివంతం చేయడం." },
      pa: { name: "ਮਹਿਲਾ ਸ਼ਕਤੀ ਕੇਂਦਰ", description: "ਸਮੁਦਾਇਕ ਭਾਗੀਦਾਰੀ ਰਾਹੀਂ ਪੇਂਡੂ ਔਰਤਾਂ ਨੂੰ ਸਸ਼ਕਤ ਬਣਾਉਣਾ।" },
      or: { name: "ମହିଳା ଶକ୍ତି କେନ୍ଦ୍ର", description: "ସମୁଦାୟୀୟ ଅଂଶଗ୍ରହଣ ଦ୍ୱାରା ଗ୍ରାମୀଣ ମହିଳାମାନଙ୍କୁ ସଶକ୍ତ କରିବା।" },
      as: { name: "মহিলা শক্তি কেন্দ্ৰ", description: "সামাজিক অংশগ্ৰহণৰ জৰিয়তে গাঁওমাঠৰ মহিলাসকলক শক্তিশালী কৰা।" },
      ur: { name: "مہیلا شکتی مرکز", description: "کمیونٹی شمولیت کے ذریعے دیہی خواتین کو بااختیار بنانا۔" },
      sd: { name: "مهاڻا طاقت سينٽر", description: "ڪميونٽي شموليت ذريعي ڳوٺاڻن عورتن کي بااختيار بڻائڻ." },
      kok: { name: "महिला शक्ती केंद्र", description: "समुदायाच्या सहभागाने ग्रामीण महिलांना सशक्त बनवणे." },
      ne: { name: "महिला शक्ति केन्द्र", description: "सामुदायिक सहभागबाट ग्रामीण महिलाहरूलाई सशक्त बनाउने।" },
      ks: { name: "مہیلا شکتی مرکز", description: "کمیونٹی شمولیت کے ذریعے دیہی خواتین کو بااختیار بنانا۔" },
      mai: { name: "महिला शक्ति केंद्र", description: "समुदायिक सहभाग से ग्रामीण महिलन के सशक्त बनाना।" },
      doi: { name: "महिला शक्ति केंद्र", description: "समुदायिक सहभाग तों ग्रामीण महिलan क सशक्त बनाना।" },
      bdo: { name: "महिला शक्ति केंद्र", description: "समुदायिक सहभाग से ग्रामीण महिला मनो सशक्त बनाना।" },
      mni: { name: "মহিলা শক্তি কেন্দ্ৰ", description: "সামাজিক অংশগ্ৰহণদ্বারা গাঁওমাঠী মহিলাবির শক্তিশালী কৰা।" }
    },
    officialUrl: "https://wcd.nic.in/schemes/mahila-shakti-kendra",
    link: "https://www.bookwidgets.com/play/lOVjM3IQ-iQAFrPGGbgAAA/9GWEY9P/crosswords?teacher_id=5240680502263808",
    imageUrl:pmkisanImg9
  }
];
export const questions = [
  {
    id: 1,
    translations: {
      en: {
        question: "Which document is essential to avail PM-Kisan scheme benefits?",
        options: ["Aadhaar Card", "Ration Card", "Voter ID", "Driving License"],
        answer: "Aadhaar Card",
      },
      hi: {
        question: "पीएम-किसान योजना का लाभ लेने के लिए कौन सा दस्तावेज़ आवश्यक है?",
        options: ["आधार कार्ड", "राशन कार्ड", "वोटर आईडी", "ड्राइविंग लाइसेंस"],
        answer: "आधार कार्ड",
      },
      te: {
        question: "PM-Kisan పథకం ప్రయోజనాలను పొందడానికి అవసరమైన పత్రం ఏమిటి?",
        options: ["ఆధార్ కార్డు", "రేషన్ కార్డు", "ఓటర్ ID", "డ్రైవింగ్ లైసెన్స్"],
        answer: "ఆధార్ కార్డు",
      },
      ta: {
        question: "PM-Kisan திட்ட நன்மைகளை பெற தேவையான ஆவணம் எது?",
        options: ["ஆதார் அட்டை", "ரேஷன் அட்டை", "வாக்காளர் அடையாள அட்டை", "டிரைவிங் லைசன்ஸ்"],
        answer: "ஆதார் அட்டை",
      },
      kn: {
        question: "PM-Kisan ಯೋಜನೆಯ ಲಾಭ ಪಡೆಯಲು ಯಾವ ದಾಖಲೆ ಅಗತ್ಯವಿದೆ?",
        options: ["ಆಧಾರ್ ಕಾರ್ಡ್", "ರೇಷನ್ ಕಾರ್ಡ್", "ವೋಟರ್ ಐಡಿ", "ಡ್ರೈವಿಂಗ್ ಲೈಸೆನ್ಸ್"],
        answer: "ಆಧಾರ್ ಕಾರ್ಡ್",
      },
      ml: {
        question: "PM-Kisan പദ്ധതിയുടെ ലാഭം ലഭിക്കാനാവശ్యമായ രേഖ ഏത്?",
        options: ["ആധാർ കാർഡ്", "റേഷൻ കാർഡ്", "വോട്ടർ ഐഡി", "ഡ്രൈവിങ് ലൈസൻസ്"],
        answer: "ആധാർ കാർഡ്",
      },
    },
  },
  {
    id: 2,
    translations: {
      en: {
        question: "What is the primary objective of the PM-Kisan scheme?",
        options: ["Providing urban employment", "Financial support to farmers", "Promoting digital literacy", "Developing infrastructure"],
        answer: "Financial support to farmers",
      },
      hi: {
        question: "पीएम-किसान योजना का प्राथमिक उद्देश्य क्या है?",
        options: ["शहरी रोजगार प्रदान करना", "किसानों को वित्तीय सहायता", "डिजिटल साक्षरता को बढ़ावा देना", "बुनियादी ढांचे का विकास करना"],
        answer: "किसानों को वित्तीय सहायता",
      },
      te: {
        question: "PM-Kisan పథకం యొక్క ప్రాథమిక లక్ష్యం ఏమిటి?",
        options: ["పట్టణ ఉపాధి కల్పించడం", "రైతులకు ఆర్థిక సహాయం", "డిజిటల్ అక్షరాస్యతను ప్రోత్సహించడం", "మౌలిక సదుపాయాలను అభివృద్ధి చేయడం"],
        answer: "రైతులకు ఆర్థిక సహాయం",
      },
      ta: {
        question: "PM-Kisan திட்டத்தின் முக்கிய நோக்கம் என்ன?",
        options: ["நகர்ப்புற வேலைவாய்ப்பு வழங்குதல்", "விவசாயிகளுக்கு நிதி உதவி", "டிஜிட்டல் கல்வியறிவை மேம்படுத்துதல்", "உள்கட்டமைப்பை மேம்படுத்துதல்"],
        answer: "விவசாயிகளுக்கு நிதி உதவி",
      },
      kn: {
        question: "PM-Kisan ಯೋಜನೆಯ ಪ್ರಾಥಮಿಕ ಉದ್ದೇಶವೇನು?",
        options: ["ನಗರ ಉದ್ಯೋಗ ಒದಗಿಸುವುದು", "ರೈತರಿಗೆ ಆರ್ಥಿಕ ನೆರವು", "ಡಿಜಿಟಲ್ ಸಾಕ್ಷರತೆಯನ್ನು ಉತ್ತೇಜಿಸುವುದು", "ಮೂಲಸೌಕರ್ಯ ಅಭಿವೃದ್ಧಿಪಡಿಸುವುದು"],
        answer: "ರೈತರಿಗೆ ಆರ್ಥಿಕ ನೆರವು",
      },
      ml: {
        question: "PM-Kisan പദ്ധതിയുടെ പ്രാഥമിക ലക്ഷ്യം എന്താണ്?",
        options: ["നഗര തൊഴിൽ നൽകൽ", "കർഷകർക്ക് സാമ്പത്തിക സഹായം", "ഡിജിറ്റൽ സാക്ഷരത പ്രോത്സാഹിപ്പിക്കുക", "അടിസ്ഥാന സൗകര്യങ്ങൾ വികസിപ്പിക്കുക"],
        answer: "കർഷകർക്ക് സാമ്പത്തിക സഹായം",
      },
    },
  },
  {
    id: 3,
    translations: {
      en: {
        question: "How much financial assistance is provided per year under PM-Kisan?",
        options: ["₹4,000", "₹6,000", "₹8,000", "₹10,000"],
        answer: "₹6,000",
      },
      hi: {
        question: "पीएम-किसान के तहत प्रति वर्ष कितनी वित्तीय सहायता प्रदान की जाती है?",
        options: ["₹4,000", "₹6,000", "₹8,000", "₹10,000"],
        answer: "₹6,000",
      },
      te: {
        question: "PM-Kisan కింద సంవత్సరానికి ఎంత ఆర్థిక సహాయం అందించబడుతుంది?",
        options: ["₹4,000", "₹6,000", "₹8,000", "₹10,000"],
        answer: "₹6,000",
      },
      ta: {
        question: "PM-Kisan திட்டத்தின் கீழ் ஒரு வருடத்திற்கு எவ்வளவு நிதி உதவி வழங்கப்படுகிறது?",
        options: ["₹4,000", "₹6,000", "₹8,000", "₹10,000"],
        answer: "₹6,000",
      },
      kn: {
        question: "PM-Kisan ಅಡಿಯಲ್ಲಿ ಪ್ರತಿ ವರ್ಷಕ್ಕೆ ಎಷ್ಟು ಆರ್ಥಿಕ ನೆರವು ನೀಡಲಾಗುತ್ತದೆ?",
        options: ["₹4,000", "₹6,000", "₹8,000", "₹10,000"],
        answer: "₹6,000",
      },
      ml: {
        question: "PM-Kisan പദ്ധതി പ്രകാരം ഒരു വർഷം എത്ര സാമ്പത്തിക സഹായം നൽകുന്നു?",
        options: ["₹4,000", "₹6,000", "₹8,000", "₹10,000"],
        answer: "₹6,000",
      },
    },
  },
  {
    id: 4,
    translations: {
      en: {
        question: "In how many installments is the PM-Kisan amount disbursed annually?",
        options: ["One", "Two", "Three", "Four"],
        answer: "Three",
      },
      hi: {
        question: "पीएम-किसान राशि प्रति वर्ष कितनी किस्तों में वितरित की जाती है?",
        options: ["एक", "दो", "तीन", "चार"],
        answer: "तीन",
      },
      te: {
        question: "PM-Kisan మొత్తం సంవత్సరానికి ఎన్ని వాయిదాలలో పంపిణీ చేయబడుతుంది?",
        options: ["ఒకటి", "రెండు", "మూడు", "నాలుగు"],
        answer: "మూడు",
      },
      ta: {
        question: "PM-Kisan தொகை வருடத்திற்கு எத்தனை தவணைகளில் வழங்கப்படுகிறது?",
        options: ["ஒன்று", "இரண்டு", "மூன்று", "நான்கு"],
        answer: "மூன்று",
      },
      kn: {
        question: "PM-Kisan ಮೊತ್ತವನ್ನು ವಾರ್ಷಿಕವಾಗಿ ಎಷ್ಟು ಕಂತುಗಳಲ್ಲಿ ವಿತರಿಸಲಾಗುತ್ತದೆ?",
        options: ["ಒಂದು", "ಎರಡು", "ಮೂರು", "ನಾಲ್ಕು"],
        answer: "ಮೂರು",
      },
      ml: {
        question: "PM-Kisan തുക വർഷം തോറും എത്ര ഗഡുക്കളായി വിതരണം ചെയ്യുന്നു?",
        options: ["ഒന്ന്", "രണ്ട്", "മൂന്ന്", "നാല്"],
        answer: "മൂന്ന്",
      },
    },
  },
  {
    id: 5,
    translations: {
      en: {
        question: "Which ministry is responsible for implementing the PM-Kisan scheme?",
        options: ["Ministry of Finance", "Ministry of Agriculture & Farmers Welfare", "Ministry of Rural Development", "Ministry of Home Affairs"],
        answer: "Ministry of Agriculture & Farmers Welfare",
      },
      hi: {
        question: "पीएम-किसान योजना को लागू करने के लिए कौन सा मंत्रालय जिम्मेदार है?",
        options: ["वित्त मंत्रालय", "कृषि एवं किसान कल्याण मंत्रालय", "ग्रामीण विकास मंत्रालय", "गृह मंत्रालय"],
        answer: "कृषि एवं किसान कल्याण मंत्रालय",
      },
      te: {
        question: "PM-Kisan పథకాన్ని అమలు చేయడానికి ఏ మంత్రిత్వ శాఖ బాధ్యత వహిస్తుంది?",
        options: ["ఆర్థిక మంత్రిత్వ శాఖ", "వ్యవసాయం & రైతుల సంక్షేమ మంత్రిత్వ శాఖ", "గ్రామీణాభివృద్ధి మంత్రిత్వ శాఖ", "హోం వ్యవహారాల మంత్రిత్వ శాఖ"],
        answer: "వ్యవసాయం & రైతుల సంక్షేమ మంత్రిత్వ శాఖ",
      },
      ta: {
        question: "PM-Kisan திட்டத்தை செயல்படுத்துவதற்கு எந்த அமைச்சகம் பொறுப்பு?",
        options: ["நிதி அமைச்சகம்", "வேளாண்மை மற்றும் விவசாயிகள் நல அமைச்சகம்", "ஊரக வளர்ச்சி அமைச்சகம்", "உள்துறை அமைச்சகம்"],
        answer: "வேளாண்மை மற்றும் விவசாயிகள் நல அமைச்சகம்",
      },
      kn: {
        question: "PM-Kisan ಯೋಜನೆಯನ್ನು ಜಾರಿಗೊಳಿಸಲು ಯಾವ ಸಚಿವಾಲಯ ಜವಾಬ್ದಾರಿಯಾಗಿದೆ?",
        options: ["ಹಣಕಾಸು ಸಚಿವಾಲಯ", "ಕೃಷಿ ಮತ್ತು ರೈತರ ಕಲ್ಯಾಣ ಸಚಿವಾಲಯ", "ಗ್ರಾಮೀಣಾಭಿವೃದ್ಧಿ ಸಚಿವಾಲಯ", "ಗೃಹ ಸಚಿವಾಲಯ"],
        answer: "ಕೃಷಿ ಮತ್ತು ರೈತರ ಕಲ್ಯಾಣ ಸಚಿವಾಲಯ",
      },
      ml: {
        question: "PM-Kisan പദ്ധതി നടപ്പിലാക്കാൻ ഏത് മന്ത്രാലയമാണ് ഉത്തരവാദി?",
        options: ["ധനകാര്യ മന്ത്രാലയം", "കൃഷി & കർഷക ക്ഷേമ മന്ത്രാലയം", "ഗ്രാമവികസന മന്ത്രാലയം", "ആഭ്യന്തര മന്ത്രാലയം"],
        answer: "കൃഷി & കർഷക ക്ഷേമ മന്ത്രാലയം",
      },
    },
  },
];