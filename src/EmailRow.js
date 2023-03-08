import { Checkbox, IconButton } from '@mui/material'
import React from 'react'
import './EmailRow.js'
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import LabelImportantOutlinedIcon from '@mui/icons-material/LabelImportantOutlined';
import "./EmailRow.css"
import {useNavigate} from "react-router-dom"
import { selectMail } from './features/mailSlice.js';
import { useDispatch } from 'react-redux';

function EmailRow({id,title,subject,description,time}) {
  const history=useNavigate();
  const dispatch=useDispatch();
  const openMail=()=>{
    dispatch(selectMail({
      id,
      title,
      subject,
      description,
      time,
    }))
    history("/mail")
  }
  return (
    <div onClick={openMail} className='emailRow'>
      <div className='emailRow_options'>
        <Checkbox/>
        <IconButton>
            <StarBorderOutlinedIcon/>
        </IconButton>
        <IconButton>
            <LabelImportantOutlinedIcon/>
        </IconButton>
      </div>
      <h3 className='emailRow_title'>{title}</h3>
      <div className='emailRow_message'>
        <h4>
            {subject}{" "}
            <span className='emailRow_description'>
                -{description}
            </span>
        </h4>
      </div>
      <p className='emailRow_time'>{time}</p>
    </div>
  )
}

export default EmailRow
