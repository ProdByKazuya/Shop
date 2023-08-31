import { AiTwotoneHome } from 'react-icons/ai'
import { SiPicartodottv } from 'react-icons/si'
import { BiAddToQueue } from 'react-icons/bi'

export const sidebarItemsList = [
    {
        path: '/',
        Icon: AiTwotoneHome,
        title: 'main_page_title'
    },
    {
        path: '/products',
        Icon: SiPicartodottv,
        title: 'products_page_title'
    },
    {
        path: '/create-product',
        Icon: BiAddToQueue,
        title: 'Добавить продукт'
    }
]