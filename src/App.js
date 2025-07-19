import React, { useState } from 'react';
import './App.css';

const CAT_MESSAGES = ['냥이 화이팅! 😻', '귀여워!', '최고다!', '냥냥펀치!', '야옹~', '냥이짱!'];
const DOG_MESSAGES = ['댕댕이 파워! 🐾', '멋져!', '짱이야!', '왈왈!', '달려라!', '댕댕이짱!'];

function getRandomMessage(messages) {
  return messages[Math.floor(Math.random() * messages.length)];
}

function ProgressBar({ leftCount, rightCount }) {
  const total = leftCount + rightCount;
  const leftPercent = total === 0 ? 50 : (leftCount / total) * 100;
  const rightPercent = total === 0 ? 50 : (rightCount / total) * 100;
  return (
    <div className="progress-bar-container">
      <div className="progress-bar left" style={{ width: `${leftPercent}%` }} />
      <div className="progress-bar right" style={{ width: `${rightPercent}%` }} />
    </div>
  );
}

function App() {
  const [catCount, setCatCount] = useState(0);
  const [dogCount, setDogCount] = useState(0);
  const [catMsg, setCatMsg] = useState(getRandomMessage(CAT_MESSAGES));
  const [dogMsg, setDogMsg] = useState(getRandomMessage(DOG_MESSAGES));

  const total = catCount + dogCount;
  const catPercent = total === 0 ? 50 : Math.round((catCount / total) * 100);
  const dogPercent = total === 0 ? 50 : Math.round((dogCount / total) * 100);

  const handleCatClick = () => {
    setCatCount(catCount + 1);
    setCatMsg(getRandomMessage(CAT_MESSAGES));
  };
  const handleDogClick = () => {
    setDogCount(dogCount + 1);
    setDogMsg(getRandomMessage(DOG_MESSAGES));
  };

  return (
    <div className="battle-app">
      <h1 className="title">🐱 고양이 vs 강아지 🐶<br /><span className="subtitle">누가 더 많이 클릭될까?</span></h1>
      <div className="characters">
        <div className="side-info left">
          <div className="percent">{catPercent}%</div>
          <div className="cheer-msg cat-msg">{catMsg}</div>
        </div>
        <div className="character cat" onClick={handleCatClick}>
          <span className="emoji" role="img" aria-label="cat">🐱</span>
          <span className="count">{catCount}</span>
        </div>
        <div className="character dog" onClick={handleDogClick}>
          <span className="emoji" role="img" aria-label="dog">🐶</span>
          <span className="count">{dogCount}</span>
        </div>
        <div className="side-info right">
          <div className="percent">{dogPercent}%</div>
          <div className="cheer-msg dog-msg">{dogMsg}</div>
        </div>
      </div>
      <ProgressBar leftCount={catCount} rightCount={dogCount} />
      <div className="status">
        {catCount === dogCount
          ? '무승부!'
          : catCount > dogCount
          ? '고양이가 앞서고 있어요!'
          : '강아지가 앞서고 있어요!'}
      </div>
    </div>
  );
}

export default App;
