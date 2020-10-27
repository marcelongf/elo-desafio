import React from 'react';
import { reduxForm } from 'redux-form';
import { useDispatch } from 'react-redux';

import { validateNewLead, registerNewLead } from './actions'
import StringForm from './stringForm';
import OportunityForm from './oportunityForm';

const Create = ({}) => {
  const dispatch = useDispatch();

  const handleSubmit = () => {
    if(dispatch(validateNewLead())){
      dispatch(registerNewLead())
    };
  }

  return (
    <>
      <form onSubmit={e => {e.preventDefault(); handleSubmit()}} >
        <StringForm />
        <OportunityForm />
        <button type="submit" className="btn btn-dark" >Salvar</button>
      </form>
    </>
  )
}


export default reduxForm({form: 'newLead'})(Create);