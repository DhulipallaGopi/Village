// src/games/StandUpIndiaGame.jsx
import React, { useState, useEffect, useCallback, useRef } from 'react';
import './StandUpIndiaGame.css'; // Import the game-specific CSS

// --- Self-contained Audio Engine using Web Audio API ---
const audioContext = new (window.AudioContext || window.webkitAudioContext)();
const playSound = (type) => {
  if (!audioContext || audioContext.state === 'suspended') {
    audioContext.resume().catch(e => console.error("Audio context resume failed", e));
  }
  const oscillator = audioContext.createOscillator();
  const gainNode = audioContext.createGain();
  oscillator.connect(gainNode);
  gainNode.connect(audioContext.destination);
  const now = audioContext.currentTime;
  switch (type) {
    case 'select': oscillator.type = 'sine'; oscillator.frequency.setValueAtTime(600, now); gainNode.gain.setValueAtTime(0.3, now); gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.3); break;
    case 'wrong': oscillator.type = 'square'; oscillator.frequency.setValueAtTime(150, now); gainNode.gain.setValueAtTime(0.2, now); gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.5); break;
    case 'cash': oscillator.type = 'sine'; oscillator.frequency.setValueAtTime(800, now); oscillator.frequency.exponentialRampToValueAtTime(1200, now + 0.1); gainNode.gain.setValueAtTime(0.2, now); gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.1); break;
    case 'place': oscillator.type = 'triangle'; oscillator.frequency.setValueAtTime(440, now); gainNode.gain.setValueAtTime(0.3, now); gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.2); break;
    case 'success': oscillator.type = 'sine'; oscillator.frequency.setValueAtTime(523.25, now); oscillator.frequency.linearRampToValueAtTime(783.99, now + 0.2); gainNode.gain.setValueAtTime(0.3, now); gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.4); break;
    case 'fail': oscillator.type = 'sawtooth'; oscillator.frequency.setValueAtTime(440, now); oscillator.frequency.exponentialRampToValueAtTime(100, now + 0.8); gainNode.gain.setValueAtTime(0.2, now); gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.8); break;
    default: break;
  }
  oscillator.start(now);
  oscillator.stop(now + 1);
};


// --- Self-contained SVG Assets ---
const Shanti = (props) => <svg viewBox="0 0 100 150" {...props}><circle cx="50" cy="30" r="15" fill="#f4a261" /><path d="M 35 45 C 40 60, 60 60, 65 45 L 60 120 L 40 120 Z" fill="#e76f51" /><rect x="30" y="115" width="40" height="35" fill="#e76f51"/><circle cx="50" cy="30" r="4" fill="black" /></svg>;
const Raju = (props) => <svg viewBox="0 0 100 150" {...props}><circle cx="50" cy="30" r="15" fill="#2a9d8f" /><rect x="35" y="45" width="30" height="60" fill="#264653" /><rect x="30" y="105" width="40" height="45" fill="#264653" /><circle cx="50" cy="30" r="4" fill="black" /></svg>;
const WrongChar = (props) => <svg viewBox="0 0 100 150" {...props}><circle cx="50" cy="30" r="15" fill="#e9c46a" /><rect x="35" y="45" width="30" height="95" fill="#f4a261" /><circle cx="50" cy="30" r="4" fill="black" /><path d="M35 20 L65 40 M65 20 L35 40" stroke="#e76f51" strokeWidth="5" /></svg>;
const Bank = (props) => <svg viewBox="0 0 200 150" {...props}><rect x="10" y="50" width="180" height="100" fill="#e9c46a"/><path d="M10 50 L100 10 L190 50" fill="#f4a261" stroke="#e76f51" strokeWidth="4" /><rect x="85" y="70" width="30" height="80" fill="#e76f51"/><circle cx="100" cy="60" r="15" fill="white" stroke="#264653" strokeWidth="2"/><text x="95" y="65" fontSize="15" fill="#264653">₹</text></svg>;
const Cart = (props) => <svg viewBox="0 0 120 50" {...props}><rect x="0" y="10" width="120" height="20" fill="#e76f51" rx="5"/><circle cx="25" cy="40" r="10" fill="#264653"/><circle cx="95" cy="40" r="10" fill="#264653"/></svg>;

// CORRECTED: Each stackable item is now wrapped in an <svg> tag.
const Samosa = (props) => <svg {...props} preserveAspectRatio="none"><rect width="100%" height="100%" fill="#f4a261" /></svg>;
const SewingMachine = (props) => <svg {...props} preserveAspectRatio="none"><rect width="100%" height="100%" fill="#2a9d8f" /></svg>;
const Computer = (props) => <svg {...props} preserveAspectRatio="none"><rect width="100%" height="100%" fill="#264653" /></svg>;


// --- Game Scene Components ---
const CharacterSelect = ({ onSelect }) => (<div className="scene character-select-scene animate-fade-in"><div className="instructions"><span role="img" aria-label="hand pointing down">👇</span><span>Choose Your Hero</span><span role="img" aria-label="hand pointing down">👇</span></div><div className="character-options"><div className="character-card" onClick={() => onSelect('shanti')}><Shanti /></div><div className="character-card" onClick={() => onSelect('raju')}><Raju /></div><div className="character-card" onClick={() => onSelect('wrong')}><WrongChar /><div className="cross-overlay">❌</div></div></div><Bank className="bank-image" /></div>);
const LoanMela = ({ onComplete }) => { const [p, setP] = useState(0); const hC = () => { playSound('cash'); setP(pr => { const nP = pr + 20; if (nP >= 100) { setTimeout(() => { playSound('success'); onComplete(); }, 300); return 100; } return nP; }); }; return (<div className="scene loan-mela-scene animate-fade-in"><div className="instructions">Tap Fast to Get Loan!</div><div className="loan-progress-container"><div className="loan-progress-bar" style={{ width: `${p}%` }}>{p === 100 && '₹✅'}</div></div><button className="catch-button" onClick={hC} disabled={p === 100}>Catch Money!</button></div>); };
const GameOver = ({ score, onPlayAgain }) => (<div className="scene game-over-scene animate-fade-in"><div className="game-over-title">Game Over!</div><div className="final-score">Your Business Height: {score}</div><button className="play-again-button" onClick={onPlayAgain}>Build Again!</button></div>);
const StackingGame = ({ onGameOver }) => {
    const [stack, setStack] = useState([]);
    const [fallingItem, setFallingItem] = useState({ x: 0, width: 150, Component: Samosa, speed: 2 });
    const [isGameOver, setGameOver] = useState(false);
    const score = stack.length;
    const gameAreaRef = useRef();
    const requestRef = useRef();

    const gameLoop = useCallback(() => {
        if (isGameOver) return;
        setFallingItem(prev => {
            const gameWidth = gameAreaRef.current?.clientWidth || window.innerWidth;
            let newX = prev.x + prev.speed;
            let newSpeed = prev.speed;
            if (newX + prev.width > gameWidth || newX < 0) {
                newSpeed = -prev.speed;
                newX = prev.x + newSpeed;
            }
            return { ...prev, speed: newSpeed, x: newX };
        });
        requestRef.current = requestAnimationFrame(gameLoop);
    }, [isGameOver]);

    useEffect(() => { requestRef.current = requestAnimationFrame(gameLoop); return () => cancelAnimationFrame(requestRef.current); }, [gameLoop]);

    const placeItem = () => {
        if (isGameOver) return;
        const lastItem = stack[stack.length - 1] || { x: (gameAreaRef.current?.clientWidth / 2) - 60, width: 120 };
        const currentItem = { ...fallingItem };
        const overhang = Math.abs(currentItem.x - lastItem.x);
        const newWidth = lastItem.width - overhang;
        if (newWidth <= 0) { setGameOver(true); playSound('fail'); setTimeout(() => onGameOver(score), 1000); return; }
        playSound('place');
        setStack(prev => [...prev, { x: Math.max(currentItem.x, lastItem.x), width: newWidth, Component: currentItem.Component }]);
        const itemComps = [Samosa, SewingMachine, Computer];
        setFallingItem({ x: 0, width: newWidth, Component: itemComps[Math.floor(Math.random() * itemComps.length)], speed: (Math.random() > 0.5 ? 1 : -1) * (score / 2 + 2) });
    };

    return (<div className="stacking-game-scene" onClick={placeItem}><div ref={gameAreaRef} className={`game-area ${isGameOver ? 'animate-shake' : ''}`}><div className="game-score">{score}</div><Cart className="base-cart" />{stack.map((item, index) => (<item.Component key={index} className="stack-item" style={{ left: `${item.x}px`, width: `${item.width}px`, bottom: `${30 + index * 30}px`}} />))}{!isGameOver && (<fallingItem.Component className="falling-item" style={{ left: `${fallingItem.x}px`, width: `${fallingItem.width}px`, top: `calc(80% - ${stack.length * 30}px)` }} />)}</div></div>);
};


// --- Main Game Component ---
function StandUpIndiaGame() {
  const [gameState, setGameState] = useState('characterSelect'); // characterSelect, loanMela, stacking, gameOver
  const [score, setScore] = useState(0);

  const handleCharacterSelect = (hero) => {
    if (hero === 'wrong') { playSound('wrong'); }
    else { playSound('select'); setGameState('loanMela'); }
  };
  const handleLoanComplete = () => setGameState('stacking');
  const handleGameOver = (finalScore) => { setScore(finalScore); setGameState('gameOver'); };
  const handlePlayAgain = () => { playSound('select'); setGameState('characterSelect'); };

  const renderGameState = () => {
    switch (gameState) {
      case 'characterSelect': return <CharacterSelect onSelect={handleCharacterSelect} />;
      case 'loanMela': return <LoanMela onComplete={handleLoanComplete} />;
      case 'stacking': return <StackingGame onGameOver={handleGameOver} />;
      case 'gameOver': return <GameOver score={score} onPlayAgain={handlePlayAgain} />;
      default: return <CharacterSelect onSelect={handleCharacterSelect} />;
    }
  };

  return (
    <div className="standup-game-container">
      {renderGameState()}
    </div>
  );
}

export default StandUpIndiaGame;