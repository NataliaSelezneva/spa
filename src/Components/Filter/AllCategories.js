import Filter from "./Filter";

const AllCategories = () => {
    return(
        <div>
            {['Candles', 'Soap', 'Bombs', 'Oil', 'All'].map((category, id) =><Filter category={category} key={id}/>)}
        </div>
    )
}
export default AllCategories;