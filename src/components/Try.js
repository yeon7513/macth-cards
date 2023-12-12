import React from 'react';

const Raindrop = ({ style }) => {
  return (
    <p className="raindrop" style={style}>
      {"\u2502"}
    </p>
  );
};

const makeRaindrop = () => {
  let animationDelay = "0s";
  let fontSize = "14px";
  const arr = Array.from("123456789123456789123456789");

  return arr.map((el, i) => {
    animationDelay = `${(Math.random() * 5).toFixed(2)}s`;
    fontSize = `${Math.floor(Math.random() * 20) + 10}px`;
    const style = {
      animationDelay,
      fontSize,
    };
  return <Raindrop key={i} style={style} />;  });
};


function Try({ onResetStage, onRetryStage }) {
  return (
    <>
      <div id="Rain">
        {makeRaindrop()}
      </div>
      <div className="popup-wrapper">
        <div className='popup'>
          <h3>Try Again...😢</h3>
          <p>힘내서 다시 해봐요!</p>
          <div className='btn'>
            <button onClick={onResetStage}>처음부터 다시 도전</button>
            <button onClick={onRetryStage}>해당 스테이지 다시 도전</button>
          </div>
        </div>
      </div>
    </>
  )
};

export default Try;