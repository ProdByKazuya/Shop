import NotFoundPage from "../../pages/404/NotFoundPage"
import CreateProductPage from "../../pages/CreateProductPage/CreateProductPage"
import MainPage from "../../pages/MainPage/MainPage"
import ProductsPage from "../../pages/ProductsPage/ProductsPage"

export const AppRoutes = {
    MAIN: 'main',
    PRODUCTS: 'products',
    CREATE_PRODUCT: 'create-product',
    NOT_FOUND: 'not-found'
}

export const routeConfig = {
    [AppRoutes.MAIN]: {
        path: '/',
        element: <MainPage />
    },
    [AppRoutes.PRODUCTS]: {
        path: '/products',
        element: <ProductsPage />
    },
    [AppRoutes.CREATE_PRODUCT]: {
        path: '/create-product',
        element: <CreateProductPage />
    },    [AppRoutes.NOT_FOUND]: {
        path: '/*',
        element: <NotFoundPage />
    },
    
}