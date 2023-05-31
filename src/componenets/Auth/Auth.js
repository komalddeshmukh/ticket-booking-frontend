import React from 'react'
import AuthForms from './AuthForms'
import { sendUserAuthRequest } from '../../api-helpers/api-helpers';
import { useDispatch } from 'react-redux';
import { userActions } from '../../store';

const Auth = () => {
  const dispatch=useDispatch();
  const onResReceived =(data)=>{
    console.log(data);
    dispatch(userActions.login());
    localStorage.setItem("userId", data.id);
  };
  const getData=(data)=>{
    console.log(data);
    sendUserAuthRequest(data.inputs, data.signup)
   .then(onResReceived)
    .catch((err)=> console.log(err));
  };
  return (
    <div>
      <AuthForms onSubmit={getData} isAdmin={false}/>
    </div>
  )
}

export default Auth

