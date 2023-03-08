import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Mail from './Mail';
import EmailList from './EmailList';
import './App.css';
import SendMail from './SendMail';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { selectSendMessageIsOpen } from './features/mailSlice';
import { login,selectUser } from './features/userSlice';
import Login from "./Login"
import { auth } from './firebase';
import { useEffect } from 'react';

function App() {
  const sendMessageIsOpen=useSelector(selectSendMessageIsOpen)
  const user=useSelector(selectUser)
  const dispatch=useDispatch();

  useEffect(()=>{
    auth.onAuthStateChanged(user=>{
        if(user){
            dispatch(login({
                displayName:user.displayName,
                email:user.email,
                photoURL:user.photoURL,
            }))
        }
    })
  },[])
  return (
    <Router>
      {!user?(
        <Login/>
      ):
      (<div className="app">
      <Header/>
      <div className='app_body'>
        <Sidebar/>
        <Routes>
          <Route path='/mail' element={<Mail/>}></Route>
          <Route path='/' element={<EmailList/>}></Route>
        </Routes>
      </div>
      {sendMessageIsOpen && <SendMail/>}
    </div>)
      }
    </Router>
  );
}

export default App;
