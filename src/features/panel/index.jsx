import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Panel = ({}) => {
  return (
    <>
      <button type="button" className="btn btn-dark" ><Link to="/create-lead" style={{textDecoration: 'none', color: 'white'}} >Novo Lead(+)</Link></button>
    </>
  )
}

const reduxState = state => ({

});

const reduxActions = {}

export default connect(reduxState, reduxActions)(Panel);