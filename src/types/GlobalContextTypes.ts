import { CartItem } from "./CartItemType";

export type CartContextType = {
  cartItems: CartItem[];
  AddToCart: (item: CartItem) => void;
  RemoveFromCart: (cartItemId : string) => void;
}

