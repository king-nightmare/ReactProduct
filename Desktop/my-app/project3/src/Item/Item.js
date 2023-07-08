import Classes from './Item.module.css'

const Item = ({name,price,image})=>{
    return(
        <div className={Classes.ItemContainor}>
            <img className={Classes.ItemImg} src={image}></img>
            <h3 className={Classes.ItemName}>Name:  {name}</h3>
            <h3 className={Classes.ItemPrice}>Price:  {price}</h3>
        </div>
    )
}
export default Item;