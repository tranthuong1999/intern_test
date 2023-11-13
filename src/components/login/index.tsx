import React from 'react';
import image1 from '../../assets/images/1.svg';
import { Container, Box, Grid } from '@mui/material';
import "./style.scss"
import { Checkbox, Form, Input, Button } from 'antd';
import { Rule } from 'rc-field-form/lib/interface';
import { apiLogin } from '../../apis/api';

interface ILogin {
    userName: string;
    password: string;
}


const Login = () => {

    const onFinish = (values: ILogin) => {
        apiLogin(values).then((datas) => {
            const { data } = datas;
            console.log("data", data)
        })
    };


    const validateUsername = (rule: Rule, value: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex = /^(0[0-9]{9}|84[0-9]{8})$/;

        if (!emailRegex.test(value) && !phoneRegex.test(value)) {
            return Promise.reject('Please enter a valid email or phone number!');
        }
        return Promise.resolve();
    };


    return (
        <Container className="login">
            <img src={image1} className="login-image" />
            <h3 className="login-title"> Đăng nhập ngay!</h3>
            <Form
                name="basic"
                onFinish={onFinish}
                autoComplete="off"
                className="login-form"
            >
                <Grid container>
                    <Grid item xs={5} sx={{ pl:3}}>
                        <p> Tên người dùng </p>
                        <Form.Item
                            name="userName"
                            rules={[
                                { required: true },
                            ]}
                            style={{ display: 'flex', flexDirection: 'column' }}
                        >
                            <Input
                                style={{ width: "290px" }}
                                placeholder="Nhập tên..."
                            />
                        </Form.Item>
                    </Grid>

                    <Grid item xs={5} sx={{ pl:3}}>
                        <p> Mật khẩu </p>
                        <Form.Item
                            name="password"
                            rules={[{ required: true, message: 'Please input your password!' }]}
                        >
                            <Input.Password
                                style={{ width: "250px" }}
                                placeholder="Nhập mật khẩu..."
                            />
                        </Form.Item>
                    </Grid>

                    <Grid item xs={2}>
                        <Button htmlType="submit" style={{ color: '#FFFFFF', backgroundColor: "#FDBA4D", marginTop: "20px" }} >
                            Đăng nhập
                        </Button>
                    </Grid>
                </Grid>
            </Form>
            <div className="login-forget-password">
                Quên mật khẩu
            </div>
        </Container>
    );
};

export default Login;
