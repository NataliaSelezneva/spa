import Product from "./Product";
import dataProduct from '../../data/dataProduct';
import { useSelector } from "react-redux";
import { getSelectedCategory } from "../../Redux/productsSlice";

const Products = () => {
    const selectedCategory = useSelector(getSelectedCategory);
    return(
        <div>
            {dataProduct
            .filter(product => {
                if(selectedCategory === 'All') return true;
                return selectedCategory === product.category
            })
            .map((product, id) => <Product product={product} key={product.id} />)}
        </div>
    )
}
export default Products;