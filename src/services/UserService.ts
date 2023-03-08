import HttpService from "./HttpService";
import ApiConfig from "./ApiConfig";
import { IUser, IUserForm } from "../types/User";


export const getUserListApi = async () => {
    return await HttpService.get<IUser[]>(ApiConfig.user,{ withCredentials: true });
};

export const RegisterUserApi = async (data: IUserForm) => {
    const url = `${ApiConfig.api}api/register`;
    return await HttpService.post<IUser>(url, data,{ withCredentials: true });
};

export const LoginUserApi = async (data: IUserForm) => {
    const url = `${ApiConfig.api}api/login_check`;
    return await HttpService.post<IUser>(url, data,{ withCredentials: true });
};

export const updateUserApi = async (id: number, data: IUser) => {
    const url = `${ApiConfig.user}/${id}`;
    return await HttpService.patch(url, data,{ withCredentials: true });
};


export const logoutUserApi = async() => {
    const url = `${ApiConfig.api}logout`;
    return await HttpService.get(url,{ withCredentials: true })
}