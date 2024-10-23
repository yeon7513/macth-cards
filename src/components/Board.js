import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTime, stageData } from '../redux/reducers';
import '../scss/board.scss';
import Card from './Card';
import Header from './Header';
import { Hidden } from './StyledComponent';
import Success from './Success';
import Try from './Try';

const cards = [
  { id: 1, emoji: '🍕', card: 'pizza', isFlipped: false, isMatch: false },
  { id: 2, emoji: '🍔', card: 'hamburger', isFlipped: false, isMatch: false },
  {
    id: 3,
    emoji: '🍟',
    card: 'french-fries',
    isFlipped: false,
    isMatch: false,
  },
  { id: 4, emoji: '🌭', card: 'hotdog', isFlipped: false, isMatch: false },
  { id: 5, emoji: '🍿', card: 'popcorn', isFlipped: false, isMatch: false },
  { id: 6, emoji: '🧂', card: 'salt', isFlipped: false, isMatch: false },
  { id: 7, emoji: '🥓', card: 'bacon', isFlipped: false, isMatch: false },
  { id: 8, emoji: '🥚', card: 'egg', isFlipped: false, isMatch: false },
  { id: 9, emoji: '🍳', card: 'fried-egg', isFlipped: false, isMatch: false },
  { id: 10, emoji: '🧇', card: 'waffle', isFlipped: false, isMatch: false },
  { id: 11, emoji: '🥞', card: 'pancake', isFlipped: false, isMatch: false },
  { id: 12, emoji: '🧈', card: 'butter', isFlipped: false, isMatch: false },
  { id: 13, emoji: '🍞', card: 'bread', isFlipped: false, isMatch: false },
  { id: 14, emoji: '🥐', card: 'croissant', isFlipped: false, isMatch: false },
  { id: 15, emoji: '🥨', card: 'pretzel', isFlipped: false, isMatch: false },
  { id: 16, emoji: '🥯', card: 'bagel', isFlipped: false, isMatch: false },
  { id: 17, emoji: '🥖', card: 'baguette', isFlipped: false, isMatch: false },
  { id: 18, emoji: '🧀', card: 'cheese', isFlipped: false, isMatch: false },
  { id: 19, emoji: '🥗', card: 'salad', isFlipped: false, isMatch: false },
  {
    id: 20,
    emoji: '🍗',
    card: 'fried-chicken',
    isFlipped: false,
    isMatch: false,
  },
  { id: 21, emoji: '🥪', card: 'sandwich', isFlipped: false, isMatch: false },
  { id: 22, emoji: '🌮', card: 'taco', isFlipped: false, isMatch: false },
  { id: 23, emoji: '🌯', card: 'burrito', isFlipped: false, isMatch: false },
  {
    id: 24,
    emoji: '🥫',
    card: 'canned-food',
    isFlipped: false,
    isMatch: false,
  },
  { id: 25, emoji: '🍱', card: 'lunch-box', isFlipped: false, isMatch: false },
  { id: 26, emoji: '🍙', card: 'rice-ball', isFlipped: false, isMatch: false },
  { id: 27, emoji: '🍜', card: 'noodle', isFlipped: false, isMatch: false },
  { id: 28, emoji: '🍤', card: 'shrimp', isFlipped: false, isMatch: false },
  { id: 29, emoji: '🍝', card: 'pasta', isFlipped: false, isMatch: false },
  { id: 30, emoji: '🥣', card: 'soup', isFlipped: false, isMatch: false },
  { id: 31, emoji: '🍧', card: 'shaved-ice', isFlipped: false, isMatch: false },
  { id: 32, emoji: '🍩', card: 'donut', isFlipped: false, isMatch: false },
  {
    id: 33,
    emoji: '🍰',
    card: 'piece-of-cake',
    isFlipped: false,
    isMatch: false,
  },
  { id: 34, emoji: '🧁', card: 'muffin', isFlipped: false, isMatch: false },
  { id: 35, emoji: '🍬', card: 'candy', isFlipped: false, isMatch: false },
  { id: 36, emoji: '🍭', card: 'lollipop', isFlipped: false, isMatch: false },
  { id: 37, emoji: '🍡', card: 'dango', isFlipped: false, isMatch: false },
  { id: 38, emoji: '🍫', card: 'chocolate', isFlipped: false, isMatch: false },
  { id: 39, emoji: '🍮', card: 'pudding', isFlipped: false, isMatch: false },
  { id: 40, emoji: '🍯', card: 'honey', isFlipped: false, isMatch: false },
  { id: 41, emoji: '🍵', card: 'tea', isFlipped: false, isMatch: false },
  { id: 42, emoji: '🧊', card: 'ice-cube', isFlipped: false, isMatch: false },
  { id: 43, emoji: '🍪', card: 'cookie', isFlipped: false, isMatch: false },
  { id: 44, emoji: '🎂', card: 'cake', isFlipped: false, isMatch: false },
  { id: 45, emoji: '🍛', card: 'curry', isFlipped: false, isMatch: false },
  { id: 46, emoji: '🍣', card: 'sushi', isFlipped: false, isMatch: false },
  { id: 47, emoji: '☕', card: 'coffee', isFlipped: false, isMatch: false },
  { id: 48, emoji: '🍹', card: 'cocktail', isFlipped: false, isMatch: false },
];

function Board() {
  const dispatch = useDispatch();
  const stage = useSelector((state) => state.STAGE.stage);
  const boardSize = useSelector((state) => state.STAGE.boardSize);
  const time = useSelector((state) => state.STAGE.time);
  const [board, setBoard] = useState({
    deck: [],
    openCardIndexArr: [],
  });
  const [isShowAllCards, setIsShowAllCards] = useState(true);
  const [startTime, setStartTime] = useState(0);
  const [clearTime, setClearTime] = useState(0);
  const [isClear, setIsClear] = useState(false);
  const [isTry, setIsTry] = useState(false);
  const [tryAgain, setTryAgain] = useState(false);

  // 보드의 크기에 따라 달라지는 덱
  const makeCardDeck = useCallback(
    (cards) => {
      let randomNumberArr = [];
      for (let i = 0; i < boardSize / 2; i++) {
        let randomNumber = getRandom(48, 0);

        if (randomNumberArr.indexOf(randomNumber) === -1) {
          randomNumberArr.push(randomNumber);
        } else {
          i--;
        }
      }
      randomNumberArr.push(...randomNumberArr);
      return shuffle(randomNumberArr).map((index) => cards[index]);
    },
    [boardSize]
  );
  function getRandom(max, min) {
    return parseInt(Math.random() * (max - min)) + min;
  }
  function shuffle(array) {
    return array.slice().sort(() => Math.random() - 0.5);
  }

  // open card manage
  const getOpenCardArr = useCallback(() => {
    return board.deck
      .map((el, i) => (el.isFlipped && !el.isMatch ? i : -1))
      .filter((index) => index !== -1);
  }, [board.deck]);

  // check card manage
  const checkCardMatch = useCallback(() => {
    const [firstIndex, secondIndex] = board.openCardIndexArr;
    if (
      firstIndex !== undefined &&
      secondIndex !== undefined &&
      firstIndex !== secondIndex
    ) {
      const firstCard = board.deck[firstIndex];
      const secondCard = board.deck[secondIndex];

      if (firstCard.card === secondCard.card) {
        setBoard((prevBoard) => ({
          ...prevBoard,
          deck: prevBoard.deck.map((card, index) =>
            index === firstIndex || index === secondIndex
              ? { ...card, isMatch: true }
              : card
          ),
          openCardIndexArr: [],
        }));
      } else {
        setTimeout(() => {
          setBoard((prevBoard) => ({
            ...prevBoard,
            deck: prevBoard.deck.map((card, index) =>
              index === firstIndex || index === secondIndex
                ? { ...card, isFlipped: false }
                : card
            ),
            openCardIndexArr: [],
          }));
        }, 800);
      }
    }
  }, [board.deck, board.openCardIndexArr]);

  // check open card
  useEffect(() => {
    const openCardArr = getOpenCardArr();
    if (openCardArr.length === 2) {
      checkCardMatch(openCardArr);
    }
  }, [board.openCardIndexArr, board.deck, getOpenCardArr, checkCardMatch]);

  // make deck
  useEffect(() => {
    const initialDeck = makeCardDeck(cards, boardSize);
    setBoard((prevBoard) => ({ ...prevBoard, deck: initialDeck }));
  }, [stage, boardSize, makeCardDeck]);

  // show All Cards
  const showAllCards = useCallback(() => {
    setIsShowAllCards(true);
  }, []);

  useEffect(() => {
    const showCard = setTimeout(() => {
      if (isShowAllCards === true) {
        setBoard((prevBoard) => ({
          ...prevBoard,
          deck: prevBoard.deck.map((card) => ({
            ...card,
            isFlipped: true,
          })),
        }));
      }
    }, 300);

    setTimeout(() => {
      setBoard((prevBoard) => ({
        ...prevBoard,
        deck: prevBoard.deck.map((card) => ({
          ...card,
          isFlipped: false,
        })),
      }));
      setIsShowAllCards(false);
    }, 3000);

    return () => {
      clearTimeout(showCard);
    };
  }, [isShowAllCards]);

  // game timer
  useEffect(() => {
    if (isShowAllCards === false) {
      let gameTimer;

      if (time > 0 && isClear === false) {
        gameTimer = setInterval(() => {
          dispatch(setTime(time - 1));
        }, 1000);
      } else if (isClear === true) {
        clearInterval(gameTimer);
      } else if (time === 0) {
        setIsClear(false);
        setIsTry(true);
      }

      return () => clearInterval(gameTimer);
    }
  }, [time, isClear, dispatch, isShowAllCards, showAllCards]);

  // clear and stage move
  let moveStage = useCallback(() => {
    if (stage < 5) {
      const newStage = stage + 1;
      const newBoardSize = boardSize + 4;
      const newTime = 60;

      dispatch(
        stageData({
          stage: newStage,
          boardSize: newBoardSize,
          time: newTime,
        })
      );

      setBoard((prevBoard) => ({
        ...prevBoard,
        deck: makeCardDeck(cards, newBoardSize),
      }));
      setIsClear(false);
      setIsTry(false);
      setIsShowAllCards(true);
    }
  }, [boardSize, dispatch, makeCardDeck, stage]);

  useEffect(() => {
    const gameClear = board.deck.every((card) => card.isMatch === true);
    setIsClear(() => {
      if (gameClear) {
        setIsTry(false);
        setStartTime(60);
        return true;
      }
      return false;
    });
  }, [
    board.deck,
    boardSize,
    stage,
    isClear,
    makeCardDeck,
    isTry,
    dispatch,
    time,
    moveStage,
  ]);

  // clear time update
  useEffect(() => {
    if (isClear && time > 0) {
      setClearTime(startTime - time);
    }
  }, [isClear, stage, time, startTime]);

  // reset Deck
  const resetDeck = useCallback(() => {
    if (tryAgain) {
      setBoard((prevBoard) => ({
        ...prevBoard,
        deck: makeCardDeck(cards, boardSize).map((card) => ({
          ...card,
          isFlipped: false,
          isMatch: false,
        })),
        openCardIndexArr: [],
      }));
      setTryAgain(false);
    }
  }, [boardSize, makeCardDeck, tryAgain]);

  // go to 1stage (reset)
  const onResetStage = () => {
    dispatch(
      stageData({
        stage: 1,
        boardSize: 8,
        time: 60,
      })
    );
    setTryAgain(true);
    setIsTry(false);
    setIsShowAllCards(true);
    resetDeck();
  };
  // retry stage
  const onRetryStage = () => {
    dispatch(
      stageData({
        stage,
        boardSize,
        time: 60,
      })
    );
    setTryAgain(true);
    setIsTry(false);
    setIsShowAllCards(true);
    resetDeck();
  };

  useEffect(() => {
    resetDeck();
  }, [resetDeck]);

  return (
    <>
      <Header />
      <section>
        <div className="info">
          <p>
            <span>{stage}</span> Stage
          </p>
          <p>
            <span>{time}</span> 초
          </p>
        </div>
        <Card
          board={board}
          setBoard={setBoard}
          isFlipped={board.deck.isFlipped}
          isMatch={board.deck.isMatch}
          isClickable={time > 0}
        />
        {isClear && !isTry ? (
          <Hidden $isHidden={isClear}>
            <Success
              clearTime={clearTime}
              stage={stage}
              moveStage={moveStage}
            />
          </Hidden>
        ) : isTry && !isClear ? (
          <Hidden $isHidden={isTry}>
            <Try onResetStage={onResetStage} onRetryStage={onRetryStage} />
          </Hidden>
        ) : null}
      </section>
    </>
  );
}

export default Board;
