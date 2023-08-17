import { MdOutlineShoppingCartCheckout } from 'react-icons/md';
import { useCartContext } from '../../state/Cart.context';
import './cart.css';
import {useNavigate} from 'react-router-dom';

export const Cart = () => {
    const { getCartQty } = useCartContext();
    const navigate = useNavigate();

    return (
        <a>
            <MdOutlineShoppingCartCheckout className='iconoo' onClick={() => navigate("/cart")}/>
            {getCartQty ?  <span className="sp">({getCartQty})</span> : null}
            
        </a>
    )
}