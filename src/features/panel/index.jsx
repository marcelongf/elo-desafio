import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import ThemeButton from './../../common/themeButton';
import LeadCard from './../../common/dragLeadCard';
import Column from './column';
import { updateStatus } from './actions';

import './style.css'

const Panel = ({ leads }) => {

  const [firstLeadsList, setFirstLeadsList] = React.useState([]);
  const [secondLeadsList, setSecondLeadsList] = React.useState([]);
  const [thirdLeadsList, setThirdLeadsList] = React.useState([]);
  React.useEffect(() => {
    setFirstLeadsList(leads.filter((lead) => lead.status === 0).map((lead) => {
      return (<LeadCard lead={lead} clickFunc={updateStatus} />)
    }))
    setSecondLeadsList(leads.filter((lead) => lead.status === 1).map((lead) => {
      return (<LeadCard lead={lead} clickFunc={updateStatus} />)
    }))
    setThirdLeadsList(leads.filter((lead) => lead.status === 2).map((lead) => {
      return (<LeadCard lead={lead} clickFunc={updateStatus} />)
    }))
  }, [leads])

  return (
    <>
      <div className="container panel_container">
        <ThemeButton style={{ marginBottom: '1em' }} type="button"><Link to="/create-lead" style={{ textDecoration: 'none', color: 'white' }} >Novo Lead(+)</Link></ThemeButton>
        <div className='row' >
          <div className="col-md-4" >
            <Column title="Cliente em Potencial" listComp={firstLeadsList} index={0} />
          </div>
          <div className="col-md-4" >
            <Column title='Dados confirmados' listComp={secondLeadsList} index={1} />
          </div>
          <div className="col-md-4" >
            <Column title="Reunião Agendada" listComp={thirdLeadsList} index={2} />
          </div>
        </div>
      </div>
    </>
  )
}

const reduxState = state => ({
  leads: state.leads.list
});

const reduxActions = {}

export default connect(reduxState, reduxActions)(Panel);