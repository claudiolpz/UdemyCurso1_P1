import api from '../config/axios';
import type {RegisterForm, LoginForm} from '../types'

export async function authRegister(request: RegisterForm) {
    const response = await api.post(`/auth/register`, request);
    return response;
}
export async function authLogin(request: LoginForm) {
    const response = await api.post(`/auth/login`, request);
    localStorage.setItem('AUTH_TOKEN', response.data.token);
    return response;
}