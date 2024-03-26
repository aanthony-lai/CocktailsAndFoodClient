export type Drink = {
    strDrink: string;
    strDrinkThumb: string;
    idDrink: string;
}

export type Drinks = {
    drinks: Drink[];
}

export interface ExtendedDrink extends Drink {
    quantity: number;
}