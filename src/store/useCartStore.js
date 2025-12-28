import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useCartStore = create(
  persist(
    (set, get) => ({
      //ESTADOS
      cart: [],
      //ACCIONES

      //addToCart: añade libros al carrito
      addToCart: (book) => {
        const { cart } = get(); //lee carrito actual
        const existingItem = cart.find((item) => item.id === book.id); //busca libro existente
        if (existingItem) {
          //si existe libro aumentar quantity
          set({
            cart: cart.map((item) =>
              item.id === book.id
                ? { ...item, quantity: item.quantity + 1 } //copia propiedades del libro que entra como argumento y aumenta quantity
                : item
            ),
          });
        } else {
          //si no existe agrega quantity
          set({ cart: [...cart, { ...book, quantity: 1 }] }); //copia propiedades del libro que entra como argumento y agrega quantity: 1
        }
      },
      //removeFromCart: elimina libro del carrito por su id
      removeFromCart: (bookId) => {
        const { cart } = get(); //lee carrito actual
        set({ cart: cart.filter((item) => item.id !== bookId) }); //actualiza carrito quitando el libro
      },
      //clearCart: vacia el carrito
      clearCart: () => {
        set({ cart: [] });
      },
      //getTotalItems: retorna total de libros
      getTotalItems: () => {
        const { cart } = get(); //lee carrito actual
        return cart.reduce((total, item) => total + item.quantity, 0); //suma todas las quantity
      },
      //getCartTotal: retorna total en dinero
      getCartTotal: () => {
        const { cart } = get(); //lee carrito actual
        return cart.reduce(
          (total, item) => total + item.price * item.quantity,
          0
        ); //calcula valor total en dinero
      },
    }),
    { name: "cart-storage" } //nombre del storage
  )
);
