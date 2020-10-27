import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import ThemeButton from './../../common/themeButton';
import LeadCard from './../../common/leadCard';
import { updateStatus } from './actions';

import './style.css'

const Panel = ({ leads }) => {

  const [leadsList, setLeadsList] = React.useState([]);
  React.useEffect(() => {
    setLeadsList(leads.map((lead) => {
      const comp = (<LeadCard lead={lead} clickFunc={updateStatus} />);
      switch (lead.status) {
        case 0:
          return (
            <tr>
              <td>{comp}</td>
              <td></td>
              <td></td>
            </tr>
          )
        case 1:
          return (
            <tr>
              <td></td>
              <td>{comp}</td>
              <td></td>
            </tr>
          )
        case 2:
          return (
            <tr>
              <td></td>
              <td></td>
              <td>{comp}</td>
            </tr>
          )
      }
    }))
  }, [leads])

  return (
    <>
      <div className="container panel_container">
        <ThemeButton style={{marginBottom: '1em'}} type="button"><Link to="/create-lead" style={{ textDecoration: 'none', color: 'white' }} >Novo Lead(+)</Link></ThemeButton>
        <table className="table table-bordered">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Cliente em Potencial</th>
              <th scope="col">Dados Confirmados</th>
              <th scope="col">Reunião Agendada</th>
            </tr>
          </thead>
          <tbody>
            {leadsList}
          </tbody>
        </table>
      </div>
    </>
  )
}

const reduxState = state => ({
  leads: state.leads.list
});

const reduxActions = {}

export default connect(reduxState, reduxActions)(Panel);