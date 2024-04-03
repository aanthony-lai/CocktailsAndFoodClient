export type Drink = {
    strDrink: string;
    strDrinkThumb: string;
    idDrink: string;
    price: number;
}

export type Drinks = {
    drinks: Drink[];
}

export interface ExtendedDrink extends Drink {
    quantity: number;
}