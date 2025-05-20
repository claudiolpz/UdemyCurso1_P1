import api from '../config/axios';
import type {RegisterForm} from '../types'

export async function authRegister(request: RegisterForm) {
    const response = await api.post(`/auth/register`, request);
    return response;
}