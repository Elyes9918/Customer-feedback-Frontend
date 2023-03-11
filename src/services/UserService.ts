import { IUser, IUserForm } from "../types/User";
import axios from "axios";

export const getToken = () => JSON.parse(localStorage.getItem('accessToken') || '{}');

const getAuthorizationHeader = `Bearer ${getToken()}`;

const apiUsersURL = "http://127.0.0.1:8000/api/v1/users"
const baseURL = "http://127.0.0.1:8000"


const authAxios = axios.create({
    baseURL:apiUsersURL,
    headers : {
        Authorization: getAuthorizationHeader,
    },
});

export const getUserListApi = async () => {
    return await authAxios.get<IUser[]>(apiUsersURL);
};

export const updateUserApi = async (id: number, data: IUser) => {
    const url = `${apiUsersURL}/${id}`;
    return await axios.patch(url, data);
};

