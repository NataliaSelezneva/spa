import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../Redux/cartSlice";
import ChangeQuantity from "../Cart/ChangeQuantity";

const Product = ({product}) => {

    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();

    return(
        <div className="block-product">
            <h2>{product.name}</h2>
            <img className="image-style" src={`${product.image}.jpg`}  alt='product'/>
            <h3>$ {product.price}</h3>

            <ChangeQuantity quantity={quantity} setQuantity={setQuantity}/>
            <button className="style-button" onClick={() =>{dispatch(addItemToCart({product, quantity}))}}>Add to cart</button>
        </div>
    )
}
export default Product;