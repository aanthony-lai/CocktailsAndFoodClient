import styles from "./FoodCard.module.css"
import { Dish } from "../types/FoodType"
import { AddProduct } from "./AddProduct"

export const FoodCard = ( props: Dish ) => {
    return(
        <div className={styles.productCard}>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
            <AddProduct itemId={props._id} image={props.imageUrl} 
                name={props.title} price={props.timeInMins * 5} />
            <img src={props.imageUrl} className={styles.productImg} />
        </div>
    )
}