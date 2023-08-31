export const initialState = {
    loading: false,
    error: null,
    user: JSON.parse(localStorage.getItem('user')) || {}
}

export default (state = initialState, action) => {
    switch(action.type) {
        case 'REGISTER_REQUEST': {
            return {
                ...state,
                loading: true
            }
        }
        case 'REGISTER_SUCCESS': {
            return {
                ...state,
                loading: false,
                user: action.payload
            }
        }
        case 'REGISTER_FAILURE': {
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        }
        case 'AUTH_REQUEST': {
            return {
                ...state,
                loading: true
            }
        }
        case 'AUTH_SUCCESS': {
            return {
                ...state,
                loading: false,
                user: action.payload
            }
        }
        case 'AUTH_FAILURE': {
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        }
        case 'LOGOUT': {
            return {
                loading: false,
                error: null,
                user: {}
            }
        }
        default: return state
    }
}