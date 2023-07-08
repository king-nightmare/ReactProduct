import Classes from './Card.module.css'

const Card = (props)=>{
    return(
        <div className={Classes.CardLook}>
            {props.children}
        </div>
    )
}
export default Card;