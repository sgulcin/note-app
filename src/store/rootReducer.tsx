import { combineReducers } from '@reduxjs/toolkit';
import noteItemReducer from './noteItemSlice';

const rootReducer = combineReducers({
  noteItem: noteItemReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;