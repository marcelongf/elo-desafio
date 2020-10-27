import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Field } from 'redux-form';
import Input from '../../common/Input';

import { handleAllSelectedBox } from './actions';

import oportunities from './oportunities.json';

const OportunityForm = () => {
  const dispatch = useDispatch();
  const formValues = useSelector(state => state.form.newLead ? (state.form.newLead.values ? state.form.newLead.values : {}) : {});

  const [allCheck, setAllCheck] = React.useState(false);
  React.useEffect(() => {
    console.log('repassou')
    setAllCheck(formValues.allChecked);
  }, [formValues.allChecked])

  const [rowsComp, setRowsComp] = React.useState([]);
  React.useEffect(() => {
    setRowsComp(oportunities.list.map((oportinuty) => {
      return (<tr>
        <th><Field
          component="input"
          type="checkbox"
          name={`${oportinuty.name}`}
          checked={allCheck ? true : null}
        /></th>
        <td>{`${oportinuty.label}`}</td>
      </tr>)
    }))
  }, [allCheck])

  return (
    <>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">
              <Field
                component="input"
                type="checkbox"
                name="allChecked"
                // onClick={() => handleCheckAll()}
                onChange={(e) => { dispatch(handleAllSelectedBox(e)) }}
              />
            </th>
            <th scope='col'></th>
          </tr>
        </thead>
        <tbody>
          {rowsComp}
        </tbody>
      </table>
    </>
  )
}

export default OportunityForm;
