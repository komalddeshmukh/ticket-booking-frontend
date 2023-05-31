import React from 'react'
import AuthForms from '../Auth/AuthForms'
import { sendAdminAuthRequest } from '../../api-helpers/api-helpers';
import { useDispatch } from 'react-redux';
import { adminActions } from '../../store';

function Admin() {
  const dispatch=useDispatch();
  const onResReceived =(data)=>{
    console.log(data);
    dispatch(adminActions.login());
    localStorage.setItem("adminId", data.id);
    localStorage.setItem("token", data.token);
  };
const getData=(data)=>{
console.log("Admin", data);
sendAdminAuthRequest (data.inputs)
.then(onResReceived)
.catch(err=>console.log(err));
};
  return (
    <div>
      <AuthForms onSubmit={getData} isAdmin={true}/>
    </div>
  );
};

export default Admin
