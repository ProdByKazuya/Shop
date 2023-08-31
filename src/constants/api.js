const API_URL = 'http://localhost:5000'

const API = {
    PRODUCTS: '/products',
    REGISTER: '/register',
    LOGIN: '/login'
}

const API_PRODUCTS = API_URL + API.PRODUCTS
const API_REGISTER = API_URL + API.REGISTER
const API_LOGIN = API_URL + API.LOGIN

export {
    API_PRODUCTS,
    API_REGISTER,
    API_LOGIN
}