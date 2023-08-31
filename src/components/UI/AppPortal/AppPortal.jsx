import { createPortal } from 'react-dom';

const AppPortal = (props) => {
    const {
        children,
        target = document.body
    } = props

    return createPortal(children, target)
};

export default AppPortal;