/**
 * CheckoutPage
 * ------------------------------------------------------------------
 * Página de checkout con método de pago y resumen final.
 * Solo muestra PaymentMethod + CheckoutSummary.
 * Adaptado de ronny_andrade con colores del design system.
 */
import { Link } from "react-router-dom";
import { useCartStore } from "../store/useCartStore";
import PaymentMethod from "../features/checkout/PaymentMethod";
import CheckoutSummary from "../features/checkout/CheckoutSummary";

const CheckoutPage = () => {
  const cart = useCartStore((state) => state.cart);

  // Si el carrito está vacío
  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4">
        <h1 className="text-2xl font-bold text-text-main mb-4">
          Tu carrito está vacío
        </h1>
        <Link to="/home" className="text-primary hover:underline">
          Volver a la tienda
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8 lg:py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header de Checkout */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold text-text-main">Checkout</h1>
          <div className="flex items-center gap-2">
            <span className="text-text-muted font-medium">Checkout Seguro</span>
            <span className="text-success">🔒</span>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Columna Izquierda: Método de pago */}
          <div className="flex-1 lg:flex-2">
            <PaymentMethod />
          </div>

          {/* Columna Derecha: Resumen */}
          <div className="flex-1">
            <CheckoutSummary />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
