// Quiz.jsx
import React, { useState, useEffect } from "react";
import "./Quiz.css";
import { questions } from "../data/data";

// Translations for the message
const quizMessages = {
  en: "Want to apply for the scheme? Play the game to know the required legal documents!",
  hi: "योजना के लिए आवेदन करना चाहते हैं? आवश्यक दस्तावेजों को जानने के लिए खेलें!",
  ta: "திட்டத்திற்கு விண்ணப்பிக்க விரும்புகிறீர்களா? தேவையான ஆவணங்களை அறிந்து கொள்ள விளையாடுங்கள்!",
  kn: "ಯೋಜನೆಗೆ ಅರ್ಜಿ ಹಾಕಬಹುದೇ? ಅಗತ್ಯವಿರುವ ದಾಖಲೆಗಳನ್ನು ತಿಳಿಯಲು ಆಟವಾಡಿ!",
  bn: "যোজনার জন্য আবেদন করতে চান? প্রয়োজনীয় নথি জানতে খেলুন!",
  gu: "યોજનામાં અરજી કરવા માંગો છો? જરૂરી દસ્તાવેજો જાણવા માટે રમો!",
  te: "పథకం కోసం దరఖాస్తు చేయాలనుకుంటున్నారా? అవసరమైన పత్రాలను తెలుసుకోవడానికి ఆట ఆడండి!",
  mr: "योजनेसाठी अर्ज करायचा आहे का? आवश्यक कागदपत्रे जाणून घेण्यासाठी खेळा!",
  pa: "ਯੋਜਨਾ ਲਈ ਅਰਜ਼ੀ ਦੇਣੀ ਚਾਹੁੰਦੇ ਹੋ? ਲੋੜੀਂਦੇ ਦਸਤਾਵੇਜ਼ਾਂ ਨੂੰ ਜਾਣਨ ਲਈ ਖੇਡੋ!",
  ml: "പദ്ധതിക്കായി അപേക്ഷിക്കണോ? ആവശ്യമായ രേഖകൾ അറിയാൻ കളിക്കൂ!",
  or: "ଯୋଜନା ପାଇଁ ଆବେଦନ କରିବାକୁ ଚାହୁଁଛନ୍ତି? ଆବଶ୍ୟକ ଦଲିଲଗୁଡ଼ିକୁ ଜାଣିବା ପାଇଁ ଖେଳନ୍ତୁ!"
};

export default function Quiz({ lang }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [answerChecked, setAnswerChecked] = useState(false);

  const currentQuestion = questions[currentQuestionIndex];
  const qData = currentQuestion.translations[lang] || currentQuestion.translations["en"];

  const handleOptionClick = (option) => {
    if (answerChecked) return;
    setSelectedOption(option);
  };

  const handleNext = () => {
    if (!answerChecked) {
      setAnswerChecked(true);
      if (selectedOption === qData.answer) {
        setScore((prev) => prev + 1);
      }
    } else {
      setAnswerChecked(false);
      setSelectedOption(null);
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex((prev) => prev + 1);
      } else {
        setShowScore(true);
      }
    }
  };

  const handleRestart = () => {
    setScore(0);
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setShowScore(false);
    setAnswerChecked(false);
  };

  useEffect(() => {
    if (showScore && score === questions.length) {
      alert("🎉 Perfect Score! Well done! 🎉");
    }
  }, [showScore, score]);

  const progressPercent = ((currentQuestionIndex + (answerChecked ? 1 : 0)) / questions.length) * 100;

  // Get the translated message
  const quizMessage = quizMessages[lang] || quizMessages["en"];

  return (
    <div className="quiz-container">
      <h1 className="quiz-title">Village Welfare Schemes Quiz</h1>

      <div className="progress-bar-background">
        <div className="progress-bar-fill" style={{ width: `${progressPercent}%` }}></div>
      </div>

      {showScore ? (
        <div className="score-container">
          <h2 className="score-text">
            Your Score: {score} / {questions.length}
          </h2>

          {/* Show message here */}
          <p className="quiz-message">{quizMessage}</p>

          <button className="restart-btn" onClick={handleRestart}>Restart Quiz</button>
        </div>
      ) : (
        <>
          <div className="question-count">
            Question {currentQuestionIndex + 1} of {questions.length}
          </div>

          <h2 className="question-text">{qData.question}</h2>

          <div className="options-grid">
            {qData.options.map((option) => {
              let optionClass = "option-btn";
              if (answerChecked) {
                if (option === qData.answer) optionClass += " correct";
                else if (option === selectedOption) optionClass += " incorrect";
              } else if (option === selectedOption) optionClass += " selected";

              return (
                <button
                  key={option}
                  onClick={() => handleOptionClick(option)}
                  disabled={answerChecked}
                  className={optionClass}
                  type="button"
                >
                  {option}
                </button>
              );
            })}
          </div>

          <div className="next-btn">
            <button onClick={handleNext} disabled={!selectedOption} type="button">
              {!answerChecked
                ? currentQuestionIndex === questions.length - 1
                  ? "Finish"
                  : "Check"
                : currentQuestionIndex === questions.length - 1
                ? "Show Score"
                : "Next"}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
