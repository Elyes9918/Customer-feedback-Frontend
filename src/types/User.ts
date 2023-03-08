import { ApiStatus } from "./ApiStatus";

export interface IUser {
    id?: string;
    email: string;
    password?: string;
    createdAt?: string;
    modifiedAt?:string;
    firstName?:string;
    lastName?:string;
    birthDate?:string;
    status?:string;
    address?:string;
    phoneNumber?:string
    company?:string;
    projectsId?: number[];
    feedbacksId?: number[];
    roles?: string[];
  }

export interface IUserForm{
  email?:string;
  password?:string;
}

interface IUserState{
    list: IUser[],
    listStatus: ApiStatus,
    LoginUserFormStatus:ApiStatus
}