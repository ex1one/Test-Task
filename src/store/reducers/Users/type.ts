export interface IAddress {
    street: string;
    city: string;
    zipcode: number;
}

export interface ICompany{
    name: string;
}

export interface IUser{
    id: number;
    name: string;
    username: string;
    email: string;
    address: IAddress;
    phone: number;
    website: string;
    company: ICompany;
}

export interface IUsersState {
    users: IUser[],
    loading: boolean;
    error: string | null;
}

export enum UsersActionTypes {
    FETCH_USERS = "FETCH_USERS",
    FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS",
    FETCH_USERS_ERROR = "FETCH_USERS_ERROR",
    FETCH_USERS_UPDATE = "FETCH_USERS_UPDATE",
}

interface FetchUsers {
    type: UsersActionTypes.FETCH_USERS,
    payload: []
}

interface FetchUsersSuccess {
    type: UsersActionTypes.FETCH_USERS_SUCCESS,
    payload: IUser[]
}

interface FetchUsersError {
    type: UsersActionTypes.FETCH_USERS_ERROR,
    payload: string;
}

export type UsersAction = FetchUsers | FetchUsersSuccess | FetchUsersError;
