import React from 'react';
import { reduxForm } from 'redux-form';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import Form from './form';
import { registerNewUser, validateNewUser } from './actions';

import logo from './../../assets/logo.png';
import './styles.css'

const Register = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (dispatch(validateNewUser())) {
      dispatch(registerNewUser(history));
    }
  }

  const [buttonClass, setButtonClass] = React.useState("btn btn-dark")

  return (
    <div className="container">
      <div className="register_container">
        <img src={logo} className='register_logo_img' />
        <form onSubmit={e => handleSubmit(e)}>
          <Form />
          <button
            className={`${buttonClass}`}
            onMouseOver={() => setButtonClass("btn btn-light")}
            onMouseLeave={() => setButtonClass("btn btn-dark")}
          >Registrar</button>
        </form>
      </div>
    </div>
  )
}

export default reduxForm({ form: 'register' })(Register);

