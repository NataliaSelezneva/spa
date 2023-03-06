import { useDispatch } from 'react-redux';
import dataProduct from '../../data/dataProduct';
import { removeItemFromCart } from '../../Redux/cartSlice';
import remove from '../Cart/remove.png'

const CartItem = ({cartItem}) => {
    const products = dataProduct.find(element => element.id === cartItem.productId);
    const dispatch = useDispatch();

    return(
        <div>
            <h3>{products.name}</h3>
            <p>{cartItem.quantity} {products.category}</p>
            <p>Price: $ {products.price * cartItem.quantity}</p>
            <span onClick={() => dispatch(removeItemFromCart({cartItemId: cartItem.id}))}>
                <img src={remove} width='20px' alt='removeCart'/>
            </span>
        </div>
    )
}
export default CartItem;