import { Drink } from "./DrinksType";
import { Dish } from "./FoodType";


export type CartItem = {
    itemId: string;
    name: string;
    image: string;
    quantity: number;
    singlePrice: number;
    totalPrice: number;
}