import React, { useEffect } from 'react';
import image1 from '../../assets/images/1.svg';
import { Container, Typography, Box, Grid } from '@mui/material';
import "./style.scss"
import { Checkbox, Form, Input, Button } from 'antd';
import { Rule } from 'rc-field-form/lib/interface';
import { apiLogin } from '../../apis/api';
import { setIsLogin, setUser } from '../redux/authSlice';
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from '../redux/store'
import image2 from '../../assets/images/logo.png';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

interface ILogin {
    userName: string;
    password: string;
}


const Login = () => {

    const dispatch = useDispatch()
    const authState = useSelector((state: RootState) => state.authState)
    const [form] = Form.useForm();

    const onFinish = (values: ILogin) => {
        apiLogin(values).then((res) => {
            const { data } = res;
            if (!!data.success) {
                dispatch(setIsLogin(true))
                dispatch(setUser(data.content))
                form.resetFields()
            }
        })
    };

    // const validateUsername = (rule: Rule, value: string) => {
    //     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    //     const phoneRegex = /^(0[0-9]{9}|84[0-9]{8})$/;

    //     if (!emailRegex.test(value) && !phoneRegex.test(value)) {
    //         return Promise.reject('Please enter a valid email or phone number!');
    //     }
    //     return Promise.resolve();
    // };

    return (
        <Container className="login">
            <img src={image1} className="login-image" />
            {
                (!!authState.isLogin) ?
                    (
                        <>
                            <Box sx={{ position: 'absolute', top: '71px', left: '175px' }}>
                                <Typography sx={{ mb: "16px", color: "#FFFFFF", fontSize: "18px", fontweight: 600 }}> TÌM KIẾM NỘI DUNG</Typography>
                                <Box sx={{ backgroundColor: "#FFFFFF", minWidth: "700px" }}>
                                    <Box sx={{ ml: "28px", pb: '28px' }}>
                                        <Typography sx={{ position: "relative", color: "#191D23", fontSize: "16px", fontweight: 400, top: '20px' }}> Nhập thông tin cần tìm</Typography>
                                        <Input
                                            style={{ width: "87%", marginRight: "17px" }}
                                            placeholder="Tên người dùng, số điện thoại hoặc email"
                                        />
                                        <Button htmlType="submit" style={{ color: '#FFFFFF', backgroundColor: "#FDBA4D", marginTop: "20px" }} >
                                            Tìm
                                        </Button>
                                    </Box>
                                </Box>
                            </Box>

                            {/*  */}
                            <Box sx={{ position: "absolute", top: "49px", right: "-200px" }}>
                                <Box sx={{ maxWidth: "300px", textAlign: 'center' }}>
                                    <Typography sx={{ mb: "16px", color: "#FFFFFF", fontSize: "18px", fontweight: 600 }}> Xin chào bạn</Typography>
                                    <Typography sx={{ mb: "16px", color: "#FFFFFF", fontSize: "18px", fontweight: 600 }}> {authState.user.userName}</Typography>
                                    <Box>
                                        <img src={image2} />
                                    </Box>
                                    <Button
                                        style={{ color: '#FFFFFF', backgroundColor: "#FDBA4D", marginTop: '18px' }}
                                        onClick={() => {
                                            localStorage.clear()
                                            dispatch(setIsLogin(false))
                                            dispatch(setUser(null))
                                        }}
                                    >
                                        Thoát
                                    </Button>
                                </Box>
                            </Box>
                        </>
                    )
                    :
                    (
                        <>
                            <h3 className="login-title"> Đăng nhập ngay!</h3>
                            <Form
                                name="basic"
                                onFinish={onFinish}
                                autoComplete="off"
                                className="login-form"
                                form={form}
                            >
                                <Grid container>
                                    <Grid item xs={5} sx={{ pl: 3 }}>
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

                                    <Grid item xs={5} sx={{ pl: 3 }}>
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
                        </>
                    )
            }
        </Container>
    );
};

export default Login;
