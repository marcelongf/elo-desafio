import { toastr } from 'react-redux-toastr';
import { reset } from 'redux-form';
import { get } from 'lodash';

export const registerNewUser = (history) => async (dispatch, getState) => {
  toastr.success('Registro efetuado com sucesso!');
  const { values } = get(getState(), `form.register`, {})
  console.log("JSON para o servidor: ", values);
  // try {
  //   const {data} = await axios.post(URL PARA CRIAÇÃO DE NOVO USUÁRIO, values)
  // } catch (error) {
  //   toastr.error('Erro ao se registrar');
  // }
  reset('register');
  history.push('/panel');
}

export const validateNewUser = () => (dispatch, getState) => {
  const values = get(getState(), `form.register.values`, {});

  if(![
    "user",
    "password",
    "password_confirmation"
  ].every((field) => !!values[field])){
    toastr.warning('Todos os campos devem ser preenchidos');
    return false
  }
  
  if(values.password.length < 8){
    toastr.warning('A senha deve ter 8 digitos');
    return false
  }
  
  if(!(values.password === values.password_confirmation)){
    toastr.warning('As senhas devem ser iguais');
    return false
  }

  const regex = /\W|_/;
  if(!regex.test(values.password)){
    toastr.warning('A senha deve conter algum caractér especial');
    return false
  }
  return true;

}