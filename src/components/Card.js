import React from 'react';
import { CardBack, CardFront } from './StyledComponent';
import '../scss/card.scss';

function Card({ board, setBoard, isClickable }) {
  const {openCardIndexArr} = board;
  
  const handleCardClick = index => {
    if (isClickable && openCardIndexArr.length < 2 && !board.deck[index].isFlipped && !board.deck[index].isMatch) {
      setBoard(prevBoard => {
        const updatedDeck = prevBoard.deck.map((item, i) => {
          if (i === index) {
            return { ...item, isFlipped: !item.isFlipped }; 
          }
          return item;
        });

        return {
          ...prevBoard,
          deck: updatedDeck,
          openCardIndexArr: [...prevBoard.openCardIndexArr, index]
        };
      });
    }
  };

  return (
    <div className='card-wrap'>
      {board.deck.map((item, index) => {
        return (
          <div 
            className='card'
            key={`${index}-${item.id}-${item.card}`}
            onClick={() => handleCardClick(index)}
          >
            <CardBack className='card-back' $isFlipped={item.isFlipped} $isMatch={item.isMatch}>
              <div className="card-back--hover"></div>
            </CardBack>
            <CardFront className='card-front' $isFlipped={item.isFlipped} $isMatch={item.isMatch}>
              {item.isMatch === true ? (
                <div className="card-front--matched">
                  <div className="card-front-inner"></div>
                </div>
              ) : ('')}
              <span>{item.emoji}</span>
            </CardFront>
          </div>
        )
      })}
    </div>
  )
};

export default Card;