import React from 'react';
import image1 from '../../assets/images/1.svg';
import { Container, Box } from '@mui/material';
import { Input,Form } from 'antd';

import "./style.scss"

const Login = () => {
    return (
        <Container className="login">

            <img src={image1} className="login-image" />

            <h3 className="login-title"> Đăng nhập ngay</h3>

            <div className="login-form">
            </div>

        </Container>
    );
};

export default Login;


// margin-left: -277px;
//     width: 150%;