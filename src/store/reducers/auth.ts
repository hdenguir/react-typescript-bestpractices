
import { EActionTypes } from '../types'
import { TAuthActions } from '../actions'

export interface IAUTHSTATE {
    user: any,
    loading: boolean,
    error: any
}
const initState = { user: null, error: null, loading: false }

const authReducer = (state: IAUTHSTATE = initState, action: TAuthActions): IAUTHSTATE => {
    const { type, payload } = action;

    switch (type) {
        case EActionTypes.LOGIN_SUCCESS:
        case EActionTypes.CHECK_AUTH:
            return {
                ...state,
                user: payload,
                loading: false
            }
        case EActionTypes.REGISTER_FAIL:
        case EActionTypes.LOGIN_FAIL:
            return {
                ...state,
                error: payload,
                loading: false
            }
        default:
            return state
    }
}

export default authReducer