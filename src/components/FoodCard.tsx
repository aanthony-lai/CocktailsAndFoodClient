import styles from "./FoodCard.module.css"
import { Dish } from "../types/FoodType"
import { AddProduct } from "./AddProduct"

export const FoodCard = ( props: Dish ) => {
    return(
        <div className={styles.productCard}>
            <h3>{props.title}</h3>
            <AddProduct itemId={props._id} image={props.imageUrl}/>
            <img src={props.imageUrl} className={styles.productImg} />
        </div>
    )
}