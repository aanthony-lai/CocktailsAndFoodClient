// import React, { ReactNode, createContext, useState } from "react";
// import { CartContextType } from "./types/GlobalContextTypes";
// import { CartItem } from "./types/CartItemType";

// export const ShoppingCartContext = createContext<CartContextType>({
//   cartCount: 0,
//   cartItems: [],
//   AddToCart: (item: CartItem, itemId: string) => {},
//   RemoveFromCart: (itemId: string) => {},
// });

// type ShoppingCartProviderProps = {
//     children: ReactNode;
// }

// export const ShoppingCartProvider: React.FC<ShoppingCartProviderProps> = ({children}) => {
//   const [cartItems, setCartItems] = useState<CartItem[]>([]);
//   const [cartCount, setCartCount] = useState<number>(0);

//   const AddToCart = (item: CartItem, itemId: string): void => {
//     setCartItems((currentItems) => {
//       const itemIndex = currentItems.findIndex(
//         (item) => item.itemId === itemId
//       );

//       if (itemIndex !== -1) {
//         setCartCount((currentCount) => cartCount + 1);
//         return currentItems.map((item, index) =>
//           index === itemIndex ? { ...item, quantity: item.quantity + 1 } : item
//         );
//       } else {
//         setCartCount((currentCount) => cartCount + 1);
//         return [...currentItems, { ...item, quantity: 1 }];
//       }
//     });
//   };

//   const RemoveFromCart = (itemId: string): void => {
//     setCartItems((currentItems) => {
//       const itemIndex = currentItems.findIndex(
//         (item) => item.itemId === itemId
//       );

//       if (itemIndex !== -1) {
//         setCartCount((currentCount) => cartCount - 1);
//         return currentItems
//           .map((item, index) =>
//             index === itemIndex
//               ? { ...item, quantity: item.quantity - 1 }
//               : item
//           )
//           .filter((item) => item.quantity > 0);
//       } else {
//         return [...currentItems];
//       }
//     });
//   };

//   return (
//     <ShoppingCartContext.Provider value={{cartCount, cartItems, AddToCart, RemoveFromCart}}>
//         {children}
//     </ShoppingCartContext.Provider>
//   )
// };
