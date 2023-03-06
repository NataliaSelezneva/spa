import './App.css';
import Cart from './Components/Cart/Cart';
import AllCategories from './Components/Filter/AllCategories';
import Products from './Components/Range/Products';

function App() {
  return (
    <div className="App">
        <div className='block-categories'>
            <AllCategories />
            <Cart/>
        </div>
        <div>
            <Products />
        </div>
    </div>
  );
}

export default App;
