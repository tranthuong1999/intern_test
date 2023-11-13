

import axios from "axios";

const BASE_URL = "https://dev-fe-exam.viajsc.com/ExamUser"

export const apiLogin = async (args: { userName: string, password: string }) => {
    const { userName, password } = args;
    const data = await axios.post(`${BASE_URL}/login`, {
        userName,
        password
    })
    return data;
}

export const apiRegister = async (args: {
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

}) => {
    const { userName, shopName, phoneNumber, password, confirmPassword, email, wards, district, address,province, acceptTerm } = args;
    const data = await axios.post(`${BASE_URL}/register-user`, {
        userName,
        shopName,
        phoneNumber,
        password,
        confirmPassword,
        email,address,
        wards, district, province, acceptTerm

    })
    return data;
}