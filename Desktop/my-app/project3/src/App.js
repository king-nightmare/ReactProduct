
import './App.css';
import FirstNav from './UI/FirstNav/FirstNav';
import ItemList from './ListOFItem/ItemList';
import watchImage from './assets/watch.webp';
import product1Image from './assets/images.jpeg';
import product2Image from './assets/lovepik-skin-care-products-png-image_400420780_wh300.png';

const products =[
  { id: 1,
    name: 'Watch',
    price: '$40',
    image:watchImage},
    { id: 1,
      name: 'shoes',
      price: '$60',
      image: product1Image},
      { id: 1,
        name: 'Brand',
        price: '$80',
        image: product2Image},
]

function App() {
  return (
    <div className="App">
      <FirstNav />
      <ItemList products={products} />
    </div>
  );
}

export default App;
