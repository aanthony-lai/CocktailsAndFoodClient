import { CartItem } from "./CartItemType";

export type CartContextType = {
  cartCount: number;
  cartItems: CartItem[];
  AddToCart: (item: CartItem, itemId: string) => void;
  RemoveFromCart: (itemId : string) => void;
}

