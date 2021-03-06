import React from 'react';
import { reduxForm } from 'redux-form';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { validateNewLead, registerNewLead } from './actions'
import StringForm from './stringForm';
import OportunityForm from './oportunityForm';
import ThemeButton from './../../common/themeButton';

import './styles.css'
import logo from './../../assets/logo.png';

const Create = ({ }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const handleSubmit = () => {
    if (dispatch(validateNewLead())) {
      dispatch(registerNewLead(history))
    };
  }

  return (
    <>
      <div className="container form_container" >
        <div className="form_title" ><h2>Novo Lead</h2></div>
        <img src={logo} alt="logo elogroup" style={{margin: '1em', marginBottom: '3em'}} />
        <form onSubmit={e => { e.preventDefault(); handleSubmit() }} >
          <div style={{ display: 'flex', alignContent: 'space-between', marginTop: '-1em' }}>
            <div className="form_wrapper">
              <StringForm />
            </div>
            <div className="form_wrapper">
              <OportunityForm />
            </div>
          </div>
          <ThemeButton   
            type="submit"
            style={{marginTop: '1em'}}
          >Salvar</ThemeButton>
        </form>
      </div>
    </>
  )
}


export default reduxForm({ form: 'newLead' })(Create);