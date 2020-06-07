import { EActionTypes } from '../types';
import { AppActions } from '../actions';

export interface IAuthState {
    readonly user: string;
    readonly loading: boolean;
    readonly error: any;
}

const initState: IAuthState = { user: '', error: null, loading: false };

const authReducer = (state: IAuthState = initState, action: AppActions): IAuthState => {
    const { type, payload } = action;

    switch (type) {
        case EActionTypes.LOGIN_SUCCESS:
        case EActionTypes.CHECK_AUTH:
            return {
                ...state,
                user: payload,
                loading: false
            };
        case EActionTypes.REGISTER_FAIL:
        case EActionTypes.LOGIN_FAIL:
            return {
                ...state,
                error: payload,
                loading: false
            };
        default:
            return state;
    }
};

export default authReducer;
