import { configureStore } from '@reduxjs/toolkit';

import {reducer as toastrReducer} from 'react-redux-toastr';
import { reducer as formReducer } from 'redux-form';
import leadsReducer from './../features/leads/reducer';

export default configureStore({
  reducer: {
    toastr: toastrReducer,
    form: formReducer,
    leads: leadsReducer,
  },
});
