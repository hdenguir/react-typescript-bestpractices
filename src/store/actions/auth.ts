import { EActionTypes } from '../types'

export interface IAction {
    type: EActionTypes;
}

export interface ICheckAuthAction extends IAction {
    type: EActionTypes.CHECK_AUTH;
    payload: any;
}

export interface ILoginSuccessAction extends IAction {
    type: EActionTypes.LOGIN_SUCCESS;
    payload: any;
}
export interface ILoginFailAction extends IAction {
    type: EActionTypes.LOGIN_FAIL;
    payload: any;
}
export interface IRegisterSuccessAction extends IAction {
    type: EActionTypes.REGISTER_SUCCESS;
    payload: any;
}
export interface IRegisterFailAction extends IAction {
    type: EActionTypes.REGISTER_FAIL;
    payload: any;
}

export type TAuthActions = ICheckAuthAction | ILoginSuccessAction | ILoginFailAction | IRegisterSuccessAction | IRegisterFailAction

export const checkLogin = (user: any): ICheckAuthAction => ({
    type: EActionTypes.CHECK_AUTH,
    payload: user
});