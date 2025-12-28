import { Link, useNavigate } from "react-router-dom";
import { useCartStore } from "../store/useCartStore";
import CartItem from "../features/cart/CartItem";

const CheckoutPage = () => {
  const navigate = useNavigate();
  const cart = useCartStore((state) => state.cart);
  const getCartTotal = useCartStore((state) => state.getCartTotal);
  const clearCart = useCartStore((state) => state.clearCart);

  // Si el carrito está vacío
  if (cart.length === 0) {
    return (
      <div className="max-w-6xl mx-auto px-6 py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Tu carrito está vacío</h2>
        <Link to="/home" className="text-primary hover:underline">
          Volver al catálogo
        </Link>
      </div>
    );
  }

  const handleConfirmOrder = () => {
    alert("¡Pedido confirmado! Gracias por tu compra.");
    clearCart();
    navigate("/home");
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-8">
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Lista de productos */}
        <div className="lg:col-span-2 bg-white rounded-lg shadow p-4">
          <h2 className="text-xl font-bold mb-4">Resumen del pedido</h2>
          {cart.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>

        {/* Resumen de pago */}
        <div className="bg-white rounded-lg shadow p-6 h-fit">
          <h2 className="text-xl font-bold mb-4">Total</h2>
          <div className="flex justify-between mb-6">
            <span className="text-lg">Total a pagar:</span>
            <span className="text-2xl font-bold text-primary">
              ${getCartTotal().toFixed(2)}
            </span>
          </div>
          <button
            onClick={handleConfirmOrder}
            className="w-full bg-primary text-white py-3 rounded-lg font-bold hover:bg-primary-dark"
          >
            Confirmar Pedido
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
