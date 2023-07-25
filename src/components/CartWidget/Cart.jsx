import { MdOutlineShoppingCartCheckout } from 'react-icons/md';
import './cart.css';
export const Cart = () => {
    return (
        <a>
            <MdOutlineShoppingCartCheckout className='iconoo' />
            <span className='sp'>2</span>
        </a>
    )
}