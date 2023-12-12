import React from 'react';
import ReactConfetti from 'react-confetti';

function Success({ clearTime, stage, moveStage}) {
  let successText = '';
  switch (stage) {
    case 1 :
      successText = '아직 쉽죠?';
      break;
    case 2 :
      successText = '실력이 엄청나요!';
      break;
    case 3 :
      successText = '이제 더 어려워져요.';
      break;
    case 4 :
      successText = '여기까지 깨다니..';
      break;
    case 5 :
      successText = '탈인간급 두뇌입니다!';
      break;
    default : 
      successText = '';
  }

  return (
    <>
      <ReactConfetti 
        numberOfPieces={50}
        colors={['#EB5353', '#F9D923', '#36AE7C', '#187498']}
      />
      <div className="popup-wrapper">
        <div className='popup'>
          <h3>{stage} Stage 클리어! 🤗</h3>
          <div className='clearTime'>
            <p>{clearTime}초만에 클리어!</p>
          </div>
          <p>{successText}</p>
          <div className="btn">
            <button onClick={moveStage}>다음 스테이지 도전</button>
          </div>
        </div>
      </div>
    </>
  )
};

export default Success;