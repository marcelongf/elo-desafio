import {get} from 'lodash';
import {toastr} from 'react-redux-toastr';

export const updateStatus = (lead) => (dispatch, getState) => {
  const oldList = get(getState(), `leads.list`, []);
  const newList = oldList.map((currLead) => {
    if((currLead.id === lead.id) && (lead.status < 2) ) {
      return {...lead, status: lead.status + 1}
    }
    return lead;
  })
  try {
    dispatch({type: "LEADS_SET_LIST", payload: newList});
  } catch (error) {
    toastr.warning('Não foi possivel atualizar Lead');
  }
}