import React from 'react'
import "./style.scss"
import { Button, Typography, Box, IconButton } from '@mui/material';
import facebook from '../../assets/images/fb.svg';
import ig from '../../assets/images/ig.svg';
import tiktok from '../../assets/images/tiktok.svg';
import youtube from '../../assets/images/youtube.svg';
import link from '../../assets/images/link.svg';
import image4 from '../../assets/images/4.svg';
import mail from '../../assets/images/mail.svg';
import phone from '../../assets/images/phone.svg';
import address from '../../assets/images/address.svg';
import logo from '../../assets/images/5.svg';
import qr from '../../assets/images/qr.svg';
import AppStore from '../../assets/images/6.svg';
import CHPlay from '../../assets/images/7.svg';



const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-top'>
        <div className='footer-development'>
          <Box sx={{ mb: 2 }}>
            <img src={logo} />
          </Box>
          <Typography component="h4" className='footer-title'>CÔNG TY CỔ PHẦN ĐẦU TƯ VÀ PHÁT TRIỂN ỨNG DỤNG THÔNG MINH VIỆT </Typography>
          <Typography component="p" className='footer-desc' >Mã Số Thuế: 0106494214 </Typography>
          <Typography component="p" className='footer-desc'>Ngày hoạt động: 27/03/2014 </Typography>
          <Typography component="p" className='footer-desc'>Sở Kế Hoạch và Đầu Tư Thành Phố Hà Nội </Typography>
          <div className='footer-social'>
            <div className='footer-social-all'> <img src={facebook} style={{ marginTop: "6px" }} /></div>
            <div className='footer-social-all'> <img src={ig} style={{ marginTop: "6px" }} /></div>
            <div className='footer-social-all'> <img src={tiktok} style={{ marginTop: "6px" }} /></div>
            <div className='footer-social-all'> <img src={youtube} style={{ marginTop: "8px" }} /></div>
            <div className='footer-social-all'> <img src={link} style={{ marginTop: "6px" }} /></div>
          </div>
        </div>
        <div className='footer-contact'>
          <Typography component="h4" className='footer-title' sx={{ mb: 2 }}>LIÊN HỆ</Typography>
          <Typography component="h4" className='footer-title' sx={{ mb: 1 }}>
            <span style={{ marginRight: '8px' }}>
              <img src={mail} />
            </span>
            contact@viajsc.com
          </Typography>
          <Typography component="h4" className='footer-title' sx={{ mb: 1 }}>
            <span style={{ marginRight: '4px' }}>
              <img src={phone} />
            </span>
            1900 9999
          </Typography>
          <Typography component="h4" className='footer-title' sx={{ maxWidth: '445px', mb: 3 }}>
            <span style={{ marginRight: '8px' }}>
              <img src={address} />
            </span>
            16, Ngõ 204, Trần Duy Hưng, Trung Hòa, Cầu Giấy, HN
          </Typography>
          <img src={image4} />
        </div>
        <div className='footer-download'>
          <Typography component="h5" className='footer-title' sx={{ mb: 2 }}>TẢI ỨNG DỤNG</Typography>

          <Box sx={{ display: 'flex', justifyContent: "space-between" }}>
            <Box>
              <img src={qr} />
            </Box>
            <Box sx={{ ml: "20px", display: 'flex', flexDirection: "column" , position:"relative"}}>
              <Button
                variant="contained"
                sx={{ background: "#000000",mb:1, width: '109px', height: "31px", fontSize: "5px", pt: "0px", "&:hover": { background: "#000000", cursor: "pointer" } }}
                startIcon={<IconButton style={{position:"absolute" , top:"-5px" ,left:"-3px"}}> <img src={AppStore} /></IconButton>}
              >
                <span> </span>Download on the <br />
                <Typography component="p" sx={{ position: "absolute", fontSize: "10px", top: "15px" }}>AppStore </Typography>
              </Button>

              <Button
                variant="contained"
                sx={{ background: "#000000", width: '109px', height: "31px", fontSize: "5px", pt: "0px", "&:hover": { background: "#000000", cursor: "pointer" } }}
                startIcon={<IconButton style={{position:"absolute" , top:"-5px" ,left:"2px"}}> <img src={CHPlay} /></IconButton>}
              >
                <span> </span>GET IT ON <br />
                <Typography component="p" sx={{ position: "absolute", fontSize: "10px", top: "15px" , left:"30px" }}>Google Play </Typography>
              </Button>
            </Box>
          </Box>

          <div>
          </div>
        </div>
      </div>
      <Typography component="h4" sx={{ textAlign: 'center', fontWeight: 600, fontSize: "13px", color: "#FFFFFF", mb: 1 }}> CHÍNH SÁCH BẢO MẬT</Typography>
      <Typography component="h4" sx={{ textAlign: 'center', fontWeight: 400, fontSize: "13px", color: "#FFFFFF", pb: 2 }}>Copyright © 2021 VIA JSC. All rights reserved.</Typography>


    </div>
  )
}

export default Footer
