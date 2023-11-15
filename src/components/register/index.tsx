import React, { useEffect, useState } from 'react'
import { Container, Box, Typography } from '@mui/material';
import "./style.scss"
import { Checkbox, Form, Input, Button, Select } from 'antd';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import axios from 'axios';
import logo1 from '../../assets/images/8.svg';
import logo2 from '../../assets/images/9.svg';
import logo3 from '../../assets/images/10.svg';
import logo4 from '../../assets/images/11.svg';
import logo5 from '../../assets/images/12.svg';
import { apiRegister } from '../../apis/api';
import ConfirmDialog from '../dialog';
import imageSuccess from '../../assets/images/13.svg';
import imageFail from '../../assets/images/14.svg';
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from '../redux/store'



interface City {
    Id: string;
    Name: string;
    Districts: District[];
}

interface District {
    Id: string;
    Name: string;
    Wards: Ward[];
}

interface Ward {
    Id: string;
    Name: string;
}

interface IUser {
    userName: string,
    shopName: string,
    phoneNumber: string,
    password: string,
    confirmPassword: string,
    email: string,
    address: string,
    wards: string,
    district: string,
    province: string,
    acceptTerm: boolean
}

const Register = () => {

    const [form] = Form.useForm();


    const [cities, setCities] = useState<City[]>([]);
    const [selectedCity, setSelectedCity] = useState<string>('');
    const [districts, setDistricts] = useState<District[]>([]);
    const [selectedDistrict, setSelectedDistrict] = useState<string>('');
    const [wards, setWards] = useState<Ward[]>([]);
    const [selectedWard, setSelectedWard] = useState<string>('');
    const [isSuccessRegister, setIsSuccessRegister] = useState<boolean>(false)
    const [isFailRegister, setIsFailRegister] = useState<boolean>(false)

    // const authState = useSelector((state) => state.authState);

    const authState = useSelector((state: RootState) => state.authState)



    const onFinish = (values: IUser) => {
        apiRegister(values).then((res) => {
            const { data } = res
            if (!!data.success) {
                setIsSuccessRegister(true)
                return;
            }
            setIsFailRegister(true)
        })
    };


    const Item = styled(Paper)(({ theme }) => ({
        textAlign: 'center',
        fontWeight: 600,
        fontSize: '16px',
        color: "#0D0F11",
        borderRadius: "4px",
        paddingBottom: "16px",
        marginLeft: "24px",
        marginRight: "24px",
        marginBottom: "24px",
    }));



    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://raw.githubusercontent.com/kenzouno1/DiaGioiHanhChinhVN/master/data.json');
                setCities(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);


    useEffect(() => {
        form.resetFields()
    }, [isSuccessRegister])

    const handleCityChange = (e: any, data: any) => {
        const { label, value } = data;
        setSelectedCity(label);
        const selectedCityData: any = cities.find(city => city.Name === value);
        setDistricts(selectedCityData.Districts)
    };

    const handleDistrictChange = (e: any, data: any) => {
        const { label, value } = data;
        setSelectedDistrict(label);
        const selectedCityData: any = districts.find(district => district.Name === value);

        setWards(selectedCityData.Wards);
    };

    const handleWardChange = (e: any, data: any) => {
        const { label, value } = data;
        setSelectedWard(label);
    };

    return (
        <div className='register'>
            <div className='register-account'>
                {
                    authState.isLogin ?
                        (
                            <>
                                <Typography component='h5' sx={{ fontWeight: 600, fontSize: '25px', color: '#DCA245', textAlign: 'center', mt: "240px" }}>BẠN ĐÃ ĐĂNG NHẬP THÀNH CÔNG</Typography>
                                <Typography component='h5' sx={{ fontWeight: 600, fontSize: '16px', color: '#323A46', textAlign: 'center', mt: "52px" }}>Chào mừng <span style={{ color: "#DCA245" }}> {authState.user.userName}</span> đã quay trở lại hệ thống</Typography>
                            </>
                        )
                        :
                        (
                            <>
                                <Typography className='register-title' component='h5'>ĐĂNG KÝ TÀI KHOẢN </Typography>

                                <Form
                                    name="basic"
                                    onFinish={onFinish}
                                    autoComplete="off"
                                    className="register-form"
                                    form={form}
                                >
                                    <Grid container spacing={2}>
                                        <Grid item xs={4}>
                                            <p className='register-name'> Tên cửa hàng <span>*</span> </p>
                                            <Form.Item
                                                name="shopName"
                                                rules={[
                                                    { required: true },
                                                ]}
                                            >
                                                <Input
                                                    placeholder="Nhập tên cửa hàng..."
                                                />
                                            </Form.Item>
                                        </Grid>
                                        <Grid item xs={4}>
                                            <p className='register-name'>Số điện thoại <span>*</span> </p>
                                            <Form.Item
                                                name="phoneNumber"
                                                rules={[
                                                    { required: true },
                                                    {
                                                        pattern: /^(0[0-9]{9}|84[0-9]{8})$/,
                                                        message: "Do not format..."
                                                    }
                                                ]}
                                            >
                                                <Input
                                                    placeholder="Nhập số điện thoại"
                                                />
                                            </Form.Item>
                                        </Grid>
                                        <Grid item xs={4}>
                                            <span className='register-name'> Email</span>
                                            <Form.Item
                                                name="email"
                                                rules={[
                                                    {
                                                        type: 'email',
                                                        message: 'The input is not valid E-mail!',
                                                    },
                                                    {
                                                        required: true,
                                                        message: 'Please input your E-mail!',
                                                    },
                                                ]}
                                            >
                                                <Input
                                                    placeholder="Nhập email..."
                                                />
                                            </Form.Item>
                                        </Grid>

                                        <Grid item xs={4}>
                                            <p className='register-name'> Username <span>*</span> </p>
                                            <Form.Item
                                                name="userName"
                                                rules={[
                                                    { required: true },
                                                ]}
                                            >
                                                <Input
                                                    placeholder="Nhập tên..."
                                                />
                                            </Form.Item>
                                        </Grid>

                                        <Grid item xs={4}>
                                            <p className='register-name'> Mật khẩu <span>*</span>  </p>
                                            <Form.Item
                                                name="password"
                                                rules={[
                                                    {
                                                        required: true,
                                                        message: 'Please input your password!',
                                                    },
                                                    {
                                                        pattern: /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{9,}$/,
                                                        message:
                                                            'Password must be at least 9 characters and contain at least 1 number, 1 upper case, 1 lower case, and 1 special character',
                                                    },
                                                ]}
                                            >
                                                <Input.Password
                                                    placeholder="Nhập mật khẩu..."
                                                    autoComplete="new-password"
                                                />
                                            </Form.Item>
                                        </Grid>
                                        <Grid item xs={4}>
                                            <p className='register-name'> Xác nhận mật khẩu <span>*</span> </p>
                                            <Form.Item
                                                name="confirmPassword"
                                                dependencies={['password']}
                                                style={{ display: 'flex', flexDirection: 'column' }}
                                                rules={[
                                                    {
                                                        required: true,
                                                        message: 'Please confirm your password!',
                                                    },
                                                    ({ getFieldValue }) => ({
                                                        validator(_, value) {
                                                            if (!value || getFieldValue('password') === value) {
                                                                return Promise.resolve();
                                                            }
                                                            return Promise.reject(new Error('The new password that you entered do not match!'));
                                                        },
                                                    }),
                                                ]}
                                            >
                                                <Input.Password
                                                    placeholder="Xác nhận mật khẩu..."
                                                />
                                            </Form.Item>
                                        </Grid>

                                        <Grid item xs={12}>
                                            <p className='register-name'> Địa chỉ </p>
                                            <Form.Item
                                                name="address"
                                                rules={[
                                                    { required: true },
                                                ]}
                                            >
                                                <Input
                                                    placeholder="Nhập số nhà, toà nhà, tên đường...."
                                                />
                                            </Form.Item>
                                        </Grid>
                                        <Grid item xs={4}>
                                            <p className='register-name'> Thành phố </p>
                                            <Form.Item
                                                name="province"
                                                rules={[{ required: true }]}
                                            >
                                                <Select
                                                    placeholder="Chọn Thành phố"
                                                    value={selectedCity}
                                                    onChange={handleCityChange}
                                                    options={cities.map(city => ({ value: city.Name, label: city.Name }))}
                                                />
                                            </Form.Item>
                                        </Grid>
                                        <Grid item xs={4}>
                                            <p className='register-name'>Quận/ Huyện </p>
                                            <Form.Item
                                                name="district"
                                                rules={[{ required: true }]}
                                            >
                                                <Select
                                                    placeholder="Chọn Quận/ Huyện"
                                                    value={selectedDistrict}
                                                    onChange={handleDistrictChange}
                                                    options={districts.map(district => ({ value: district.Name, label: district.Name }))}
                                                />
                                            </Form.Item>
                                        </Grid>
                                        <Grid item xs={4}>
                                            <p className='register-name'> Phường/ Xã </p>
                                            <Form.Item
                                                name="wards"
                                                rules={[{ required: true }]}
                                            >
                                                <Select
                                                    placeholder="Chọn Phường/ Xã"
                                                    value={selectedWard}
                                                    onChange={handleWardChange}
                                                    options={wards.map(ward => ({ value: ward.Name, label: ward.Name }))}
                                                />
                                            </Form.Item>
                                        </Grid>

                                        <Grid item xs={9}>
                                            <Form.Item name="acceptTerm" valuePropName="checked" noStyle rules={[{ required: true, message: "kfkfk" }]}>
                                                <Checkbox>
                                                    <p style={{ fontWeight: 400, fontSize: "16px", color: "#000000" }}> Tôi đã đọc và đồng ý với <span style={{ color: "#FDBA4D" }}>Chính sách bảo mật thông tin</span></p>
                                                </Checkbox>
                                            </Form.Item>

                                        </Grid>

                                        <Grid item xs={3}>
                                            <Button htmlType="submit"
                                                style={{
                                                    backgroundColor: "#FDBA4D",
                                                    color: "#FFFFFF"
                                                }}
                                            >
                                                Đăng ký ngay
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </Form>

                            </>
                        )
                }
            </div>

            <div className='register-service'>
                <Typography className='register-service-title' component='h5'>DỊCH VỤ CỦA CHÚNG TÔI </Typography>
                <Grid container>
                    <Grid item xs={6}>
                        <Item>
                            <Box sx={{ pt: 2, pb: 1 }}>
                                <img src={logo1} />
                            </Box>
                            VIA EXPRESS
                        </Item>
                    </Grid>
                    <Grid item xs={6}>
                        <Item>
                            <Box sx={{ pt: 2, pb: 1 }}>
                                <img src={logo1} />
                            </Box>
                            VIA FAST
                        </Item>
                    </Grid>
                    <Grid item xs={6}>
                        <Item>
                            <Box sx={{ pt: 2, pb: 1 }}>
                                <img src={logo3} />
                            </Box>
                            VIA SUPER
                        </Item>
                    </Grid>
                    <Grid item xs={6} >
                        <Item>
                            <Box sx={{ pt: 2, pb: 1 }}>
                                <img src={logo4} />
                            </Box>
                            VIA FRESH
                        </Item>
                    </Grid>
                    <Grid item xs={12} sx={{ pb: "24px" }} >
                        <Item>
                            <Box sx={{ pt: 2, pb: 1 }}>
                                <img src={logo5} />
                            </Box>
                            VIA INTERNATIONAL
                        </Item>
                    </Grid>
                </Grid>
            </div>
            <ConfirmDialog
                open={isSuccessRegister}
                onClose={() => setIsSuccessRegister(false)}
                title="ĐĂNG KÝ THÀNH CÔNG"
                content="Để sử dụng dịch vụ thu hộ,
                bạn có muốn Ký kết hợp đồng điện tử ngay ?"
                image={imageSuccess}
                btnSuccess="Ký kết hợp đồng"
                btnFail="Đăng nhập"
                isSuccess={true}
            />
            <ConfirmDialog
                open={isFailRegister}
                onClose={() => setIsFailRegister(false)}
                title="ĐĂNG KÝ KHÔNG THÀNH CÔNG"
                content="Thông tin bạn đăng ký có thể đã trùng 
                với một tài khoản khác trong hệ thống"
                image={imageFail}
                btnSuccess="Thử lại"
                btnFail="Bỏ qua đăng ký"
                isSuccess={false}
            />
        </div >
    )
}

export default Register;
