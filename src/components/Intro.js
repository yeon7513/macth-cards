import { faQuestion, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Hidden } from './StyledComponent';

function Intro() {
  const [info, setInfo] = useState(false);

  const infoOpen = () => {
    setInfo(true);
  };
  const infoClose = () => {
    setInfo(false);
  };

  const bgHandler = (e) => {
    if(e.target.classList.contains('info-how')) {
      infoClose();
    }
  }

  return (
    <div className='intro'>
      <div className="intro-title">
        <h1>
          <span>Let's</span>
          <span>Match</span>
          <span>Cards!</span>
        </h1>
      </div>
      <div className="intro-info">
        <button onClick={infoOpen} className='info-open'>
          <span className='sign'><FontAwesomeIcon icon={faQuestion} /></span>
          <span className='open-text'>how&nbsp;to&nbsp;play</span>
        </button>
        {info === true && (
          <Hidden $isHidden={info} className={`info-how ${info ? 'fadeIn' : 'fadeOut'}`} onClick={bgHandler}>
            <div className="info-contents">
              <div className="info-title">
                <h2>게임 방법</h2>
                <button onClick={infoClose} className='info-close'>
                  <FontAwesomeIcon icon={faXmark} />
                </button>
              </div>
              <div className="info-rule">
                <p>
                  제한 시간 안에 모든 카드의 짝을 맞춰보세요!
                </p>
                <ul>
                  <li>🎈 규칙</li>
                  <li>
                    - 보드에는 같은 그림의 카드가 2장씩 있습니다.
                  </li>
                  <li>
                    - 같은 그림의 짝을 모두 맞추면 스테이지가 클리어됩니다.
                  </li>
                  <li>
                    - 제한시간이 다 되면 실패합니다.
                  </li>
                  <li>
                    - 스테이지는 총 5개로 이루어져 있습니다.
                  </li>
                  <li>
                    - 스테이지를 클리어 할 때 마다 카드가 8장씩 늘어납니다.
                  </li>
                </ul>
              </div>
            </div>
          </Hidden>
        )}
      </div>
      <div className='intro-link'>
        <Link to='/board' className='item button-parrot'>
          <span className='btn-text'>Play games
            <span className='parrot'></span>
            <span className='parrot'></span>
            <span className='parrot'></span>
            <span className='parrot'></span>
            <span className='parrot'></span>
            <span className='parrot'></span>
          </span>
        </Link>
      </div>

    </div>
  )
};

export default Intro;