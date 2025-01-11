import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { useState, useEffect } from 'react'
import { Header } from './Header/Header.jsx'
import { Admin } from './Admin/Admin.jsx'
import { Footer } from './Footer/Footer.jsx'
import './styles.css'
const USER_URL = "http://localhost:3000/api/users/self"
const USER_ROLE_URL = "http://localhost:3000/api/users/rol"
const ROOM_URL = "http://localhost:3000/api/patients?room="

export function App(){
  const [isAsideVisible, setIsAsideVisible] = useState(false);
  const [isAsideNotifVisible, setIsAsideNotifVisible] = useState(false);
  const [isPasswordModalVisible, setIsPasswordModalVisible] = useState(false);
  const [roles, setRoles] = useState([])

  useEffect(()=>{
    fetch(USER_ROLE_URL)
    .then(res=>res.json())
    .then(res=>{
      setRoles(res.roles)
    })
  },[])

  const toggleAside = () => {
    setIsAsideVisible(!isAsideVisible);
  };

  const toggleNotifAside = () => {
    setIsAsideNotifVisible(!isAsideNotifVisible);
  };

  const togglePasswordModal = () => {
    setIsPasswordModalVisible(!isPasswordModalVisible);
  };

  const downAsides = ()=>{
    if (isAsideNotifVisible) toggleNotifAside(!isAsideNotifVisible)
    else toggleAside()
  }

  const isSomeAside = (isAsideVisible || isAsideNotifVisible)


  return (
    <>
      < Header downAsides={downAsides} toggleNotifAside={toggleNotifAside} toggleAside={toggleAside} isAsideVisible={isSomeAside} isNormalAsideVisible={isAsideVisible} title="Administración"/>
      < Admin />
      < Footer />
    </>
  );
};

