import api from "@/services/api";

import {
    LoginPayload,
    SignupPayload,
    AuthResponse,
} from "../types/auth";

export const login = async (

    payload: LoginPayload

): Promise<AuthResponse> => {

    const { data } = await api.post(

        "/auth/login",

        payload

    );

    return data;

};

export const signup = async (

    payload: SignupPayload

): Promise<AuthResponse> => {

    const { data } = await api.post(

        "/auth/signup",

        payload

    );

    return data;

};

export const getCurrentUser = async () => {

    const { data } = await api.get(

        "/auth/me"

    );

    return data;

};