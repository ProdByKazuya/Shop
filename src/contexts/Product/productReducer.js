export const initialState = {
    products: [],
    product: {},
    loading: false,
    deleteLoading: false,
    error: null
}

export default (state = initialState, action) => {
    switch(action.type) {
        case 'GET_PRODUCTS_REQUEST': {
            return {
                ...state,
                loading: true
            }
        }
        case 'GET_PRODUCTS_SUCCESS': {
            return {
                ...state,
                products: action.payload,
                loading: false
            }
        }
        case 'GET_PRODUCTS_FAILURE': {
            return {
                ...state,
                error: action.payload,
                loading: false
            }
        }
        case 'GET_PRODUCT_REQUEST': {
            return {
                ...state,
                loading: true
            }
        }
        case 'GET_PRODUCT_SUCCESS': {
            return {
                ...state,
                product: action.payload,
                loading: false
            }
        }
        case 'GET_PRODUCT_FAILURE': {
            return {
                ...state,
                error: action.payload,
                loading: false
            }
        }
        case 'DELETE_PRODUCT_BY_ID_REQUEST': {
            return {
                ...state,
                deleteLoading: true
            }
        }
        case 'DELETE_PRODUCT_BY_ID_SUCCESS': {
            return {
                ...state,
                products: state.products.filter(product => product.id !== action.payload),
                deleteLoading: false
            }
        }
        case 'DELETE_PRODUCT_BY_ID_FAILURE': {
            return {
                ...state,
                error: action.payload,
                deleteLoading: false
            }
        }
        case 'CREATE_PRODUCT_SUCCESS': {
            return {
                ...state,
                products: [action.payload ,...state.products]
            }
        }
        default: return state
    }
}