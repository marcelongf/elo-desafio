import { LocalDining } from '@material-ui/icons';
import {get} from 'lodash';
import {toastr} from 'react-redux-toastr';

export const updateStatus = (lead) => (dispatch, getState) => {
  const oldList = get(getState(), `leads.list`, []);
  const newList = oldList.map((currLead) => {
    if((currLead.id === lead.id) && (lead.status < 2) ) {
      return {...lead, status: lead.status + 1}
    }
    return currLead;
  })
  try {
    dispatch({type: "LEADS_SET_LIST", payload: newList});
  } catch (error) {
    toastr.warning('Não foi possivel atualizar Lead');
  }
}

export const validateDragNDrop = (leadId, colIndex) => (dispatch, getState) => {
  console.log(leadId, colIndex);
  const lead = get(getState(), `leads.list`, []).find((currLead) => currLead.id === leadId);
  if(!lead){
    toastr.error('Erro com o Card');
    return;
  }
  if((lead.status === 0) && (colIndex === 2)){
    toastr.warning('Um card não pode pular nenhuma coluna!');
    return;
  }
  if(lead.status > colIndex){
    toastr.warning('Um card não pode voltar de coluna!');
    return;
  }
  if(lead.status === colIndex){
    return;
  }
  toastr.success("Card atualizado com sucesso");
  return dispatch(updateStatus(lead));
}