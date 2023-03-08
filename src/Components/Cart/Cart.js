import { useSelector } from 'react-redux';
import imageCart from '../Cart/shopping-cart.png';
import CartItem from './CartItem';
import { getCartItems, getTotalPrice } from '../../Redux/cartSlice';


const Cart = () => {

    const cartItems = useSelector(getCartItems);
    const totalPrice = useSelector(getTotalPrice);
    return(
        <div>
            <img src={imageCart} alt='cart' width='50px'/>
            <h2>TOTAL: $ {totalPrice}</h2>
            {cartItems.map(cartItem => <CartItem cartItem={cartItem}  key={cartItem.id} /> )}
        </div>
    )
}
export default Cart;