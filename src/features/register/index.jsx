import React from 'react';
import { reduxForm } from 'redux-form';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import Form from './form';
import { registerNewUser, validateNewUser } from './actions';

const Register = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    if(dispatch(validateNewUser())){
      dispatch(registerNewUser(history));
    }
  }

  return (
    <div className="container" >
      <form onSubmit={e => handleSubmit(e)}>
        <Form />
        <button className="btn btn-success" >Registrar</button>
      </form>
    </div>
  )
}

export default reduxForm({ form: 'register' })(Register);

