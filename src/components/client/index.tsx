import React from 'react'
import { Container, Typography } from '@mui/material';
import "./style.scss"
import social from '../../assets/images/3.svg';



const Client = () => {
  return (
    <div className='client'>

      <Typography component="h6" className="client-title"> KHÁCH HÀNG TIÊU BIỂU </Typography>
      <div className='client-social'>
        <img src={social}/>
      </div>

    </div>
  )
}

export default Client
