import { useNavigate } from "react-router-dom";
import { useCartStore } from "../../store/useCartStore";
import CartItem from "./CartItem";

const CartDrawer = () => {
  const navigate = useNavigate();
  const cart = useCartStore((state) => state.cart);
  const getCartTotal = useCartStore((state) => state.getCartTotal);
  const clearCart = useCartStore((state) => state.clearCart);

  // Si el carrito está vacío
  if (cart.length === 0) {
    return (
      <div className="p-8 text-center">
        <p className="text-text-muted text-lg">Tu carrito está vacío</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow p-4">
      <h2 className="text-xl font-bold mb-4">Carrito de Compras</h2>

      {/* Lista de items */}
      <div className="divide-y divide-border">
        {cart.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>

      {/* Total */}
      <div className="mt-4 pt-4 border-t border-border">
        <div className="flex justify-between items-center mb-4">
          <span className="font-bold text-lg">Total:</span>
          <span className="font-bold text-xl text-primary">
            ${getCartTotal().toFixed(2)}
          </span>
        </div>

        {/* Boton Vaciar*/}
        <div className="flex gap-2">
          <button
            onClick={clearCart}
            className="flex-1 py-2 border border-border rounded hover:bg-gray-100"
          >
            Vaciar
          </button>
          {/* Boton Checkout*/}
          <button
            onClick={() => navigate("/checkout")}
            className="flex-1 py-2 bg-primary text-white rounded hover:bg-primary-dark"
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartDrawer;
