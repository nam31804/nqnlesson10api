
import './App.css';
import NqnListUsers from './components/NqnListUsers';
import axios from './api/nqnApi'
import { useEffect } from 'react';
function NqnApp() {
  // doc du lieu tu api
  const nqnGetAllUsers = async ()=>{
    const nqnResponse = await axios.get("nqnUsers");
    console.log("Api data:",nqnResponse.data);
    NqnListUsers(nqnResponse.data)
  }
  useEffect(()=>{
    nqnGetAllUsers();
    console.log("State Data:",NqnListUsers)
  },[])
  return (
    <div className="container border my-3">
      <h1>Lam viec voi MockApi</h1>
      <hr/>
      <NqnListUsers renderNqnlistUsers={NqnListUsers}/>
    </div>
  );
}

export default NqnApp;
