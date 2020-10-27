import { configureStore } from '@reduxjs/toolkit';

import {reducer as toastrReducer} from 'react-redux-toastr'
import { reducer as formReducer } from 'redux-form'


export default configureStore({
  reducer: {
    toastr: toastrReducer,
    form: formReducer,
  },
});
