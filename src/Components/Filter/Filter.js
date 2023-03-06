import { useDispatch, useSelector } from "react-redux";
import { filterCategory, getSelectedCategory } from "../../Redux/productsSlice";

const Filter = ({category}) => {
    const selectedCategory = useSelector(getSelectedCategory);
    const dispatch = useDispatch();
    return(
        <div>
            <h2 onClick={() => {dispatch(filterCategory(category))}} className={selectedCategory === category ? 'categoryButtonSelected categoryButton' : 'categoryButton'}>{category}</h2>
        </div>
    )
}
export default Filter;