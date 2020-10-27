import { get } from 'lodash';
import { change } from 'redux-form';

export const handleAllSelectedBox = (allChecked) => (dispatch, getState) => {
  // const values = get(getState(), `form.new-lead.values`, {});
  console.log('VALOR: ', allChecked);
  if(!(allChecked.target.value === "true")){
    dispatch(change('newLead', 'RPA', true));
    dispatch(change('newLead', 'Produto Digital', true));
    dispatch(change('newLead', 'Analytics', true));
    dispatch(change('newLead', 'BPM', true));
  }else{
    dispatch(change('newLead', 'RPA', false));
    dispatch(change('newLead', 'Produto Digital', false));
    dispatch(change('newLead', 'Analytics', false));
    dispatch(change('newLead', 'BPM', false));
  }
}

export const validateNewLead = () => (dispatch, getState) => {
  const formValues = get(getState(), `form.newLead.values`, {});
  return [
    "name",
    "phone",
    "email"
  ].every((item) => !!formValues[item]);
}

export const registerNewLead = () => (dispatch, getState) => {
  const formValues = get(getState(), `form.newLead.values`, {});
  const tagArray = getTags(formValues);
  const leadObj = {
    ...formValues,
    tags: tagArray,
    status: "Cliente em potencial"
  }

  const oldList = get(getState(), `leads.list`, []);
  const newList = [...oldList, leadObj];

  dispatch({type: "LEADS_SET_LIST", payload: newList})
}

const getTags = (values) => {
  let array = [];
  array = !!values["RPA"] ? [...array, "RPA"] : array;
  array = !!values["Produto Digital"] ? [...array, "Produto Digital"] : array;
  array = !!values["Analytics"] ? [...array, "Analytics"] : array;
  array = !!values["BPM"] ? [...array, "BPM"] : array;
  return array;
}