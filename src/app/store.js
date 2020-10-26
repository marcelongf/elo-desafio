import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import {reducer as toastrReducer} from 'react-redux-toastr'

export default configureStore({
  reducer: {
    counter: counterReducer,
    toastr: toastrReducer
  },
});
