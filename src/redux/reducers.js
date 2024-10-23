import { createSlice } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

let stageReducer = createSlice({
  name: 'STAGE',
  initialState: {
    stage: 1,
    boardSize: 8,
    time: 60,
  },
  reducers: {
    stageData: (state, action) => {
      const { stage, boardSize, time } = action.payload;
      state.stage = stage;
      state.boardSize = boardSize;
      state.time = time;
    },
    setTime: (state, action) => {
      state.time = action.payload;
    },
  },
});

export const { stageData, setTime } = stageReducer.actions;

const rootReducer = combineReducers({
  STAGE: stageReducer.reducer,
});

export default rootReducer;
