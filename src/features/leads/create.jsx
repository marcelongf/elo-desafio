import React from 'react';
import { reduxForm } from 'redux-form';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { validateNewLead, registerNewLead } from './actions'
import StringForm from './stringForm';
import OportunityForm from './oportunityForm';

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

  const [buttonClass, setButtonClass] = React.useState("btn btn-dark")


  return (
    <>
      <div className="container form_container" >
        <div className="form_title" ><h2>Novo Lead</h2></div>
        <img src={logo} alt="logo elogroup" style={{margin: '1em', marginBottom: '3em'}} />
        <form onSubmit={e => { e.preventDefault(); handleSubmit() }} >
          <div style={{ display: 'flex', alignContent: 'space-between' }}>
            <div className="form_wrapper">
              <StringForm />
            </div>
            <div className="form_wrapper">
              <OportunityForm />
            </div>
          </div>
          <button   
            type="submit"
            className={`${buttonClass}`}
            onMouseOver={() => setButtonClass("btn btn-light")}
            onMouseLeave={() => setButtonClass("btn btn-dark")}>Salvar</button>
        </form>
      </div>
    </>
  )
}


export default reduxForm({ form: 'newLead' })(Create);