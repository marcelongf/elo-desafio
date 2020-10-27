import React from 'react';
import { Field } from 'redux-form';
import Input from './../../common/Input';

const Form = () => {
  return (
    <>
      <div>
        <Field
          component={Input}
          name="user"
          text="Usuário *"
        />
        <Field
          component={Input}
          name="password"
          text="Password *"
        />
        <Field
          component={Input}
          name="password_confirmation"
          text="Confirmação password *"
        />
      </div>
    </>
  )
}

export default Form;

