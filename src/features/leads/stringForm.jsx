import React from 'react';
import { Field } from 'redux-form';
import Input from '../../common/Input';

const StringForm = () => {
  const [checked, setChecked] = React.useState(true)
  return (
    <>
      <div style={{width: '80%', margin: '0 auto'}}>
        <Field
          component={Input}
          name="name"
          text="Nome *"
        />
        <Field
          component={Input}
          name="phone"
          text="Telefone *"
        />
        <Field
          component={Input}
          name="email"
          text="Email *"
        />
        
      </div>
    </>
  )
}

export default StringForm;

