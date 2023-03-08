import React from 'react'
import "./Header.css"
import MenuIcon from '@mui/icons-material/Menu';
import { Avatar, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { ArrowDropDown } from '@mui/icons-material';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import { auth } from './firebase';
import { logout } from './features/userSlice';
function Header() {
  const user=useSelector(selectUser)
  const dispatch=useDispatch()
  const signOut=()=>{
    auth.signOut().then(()=>{
      dispatch(logout())
    })
  }
  return (
    <div className='header'>
      <div className='header_left'>
        <IconButton>
            <MenuIcon/>
        </IconButton>
        <img src="https://cdn.vox-cdn.com/thumbor/jJ_w_lWMMvGKoaLp_zaEXJpyZ9c=/0x0:1320x880/1400x788/filters:focal(660x440:661x441)/cdn.vox-cdn.com/uploads/chorus_asset/file/21939811/newgmaillogo.jpg"/>
      </div>
      <div className='header_middle'>
        <SearchIcon/>
        <input placeholder='Search Mail' type='text'/>
        <ArrowDropDown className='header_inputCaret'/>

      </div>
      <div className='header_right'>
        <IconButton>
            <AppsIcon/>
        </IconButton>
        <IconButton>
            <NotificationsIcon/>
        </IconButton>
        <Avatar src={user?.photoURL} onClick={signOut} className='header_avatar'/>
      </div>
    </div>
  )
}

export default Header
