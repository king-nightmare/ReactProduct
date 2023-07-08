import Classes from './ItemList.module.css';
import Item from '../Item/Item';

const ItemList =({products})=>{
    return(
        <div className={Classes.ItemListContainor}>
            {products.map((products)=>(
                <Item
                key={products.id}
                name={products.name}
                price={products.price}
                image={products.image}
                ></Item>
            ))}
        </div>
    )
}

export default ItemList;