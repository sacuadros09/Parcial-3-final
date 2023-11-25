import { User } from "./user";


export type Observer = { render: () => void } & HTMLElement;


export type AppState ={
    users:User[]
}


export enum SomeActions {
    "SAVE_USER" = "SAVE_USER",
    "GET_USER" = "GET_USER",
}


export interface SaveUserAction {
    action: SomeActions.SAVE_USER
    payload: User
}


export interface GetUserAction{
    action: SomeActions.GET_USER
    payload: User[]
}


export type Actions=SaveUserAction|GetUserAction