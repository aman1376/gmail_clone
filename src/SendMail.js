import React from 'react'
import "./SendMail.css"
import CloseIcon from '@mui/icons-material/Close';
import { Button } from '@mui/material';
import { useForm } from 'react-hook-form';
import { closeSendMessage } from './features/mailSlice';
import { useDispatch } from 'react-redux';
import { db } from './firebase';
import firebase from 'firebase/compat/app'
function SendMail() {
  const {register,handleSubmit,watch,formState:{errors}}=useForm();
  const dispatch=useDispatch()
  const onSubmit=(item)=>{
    console.log(item);
    db.collection('emails').add({
        to:item.To,
        subject:item.Subject,
        message:item.Message,
        timestamp:firebase.firestore.FieldValue.serverTimestamp()
    })
    dispatch(closeSendMessage())
  };
  return (
    <div className='sendMail'>
        <div className='sendMail_header'>
            <h3>New Message</h3>
            <CloseIcon className='sendMail_close' onClick={()=>dispatch(closeSendMessage())}/>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input name="To" placeholder='To' type="email" {...register("To",{required:true})} /> {errors.To && <p className='sendMail_error'>To is required!</p>}
            <input name='Subject' placeholder='Subject' type="text" {...register("Subject",{required:true})}/>{errors.Subject && <p className='sendMail_error'>Subject is required</p>}
            <input name='Message' placeholder='Message' type="text" className='sendMail_message' {...register("Message",{required:true})}/>{errors.Message && <p className='sendMail_error'>Message is required</p>}
            <div className='sendMail_options'>
                <Button className="sendMail_send" variant="contained" color='primary' type="submit">Send</Button>
            </div>
        </form>
    </div>
  )
}

export default SendMail
