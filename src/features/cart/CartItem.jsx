import { useCartStore } from "../../store/useCartStore";

const CartItem = ({ item }) => {
  const addToCart = useCartStore((state) => state.addToCart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const decreaseQuantity = useCartStore((state) => state.decreaseQuantity);

  return (
    <div className="flex items-center gap-4 p-4 border-b border-border">
      {/* Imagen */}
      <img
        src={item.image}
        alt={item.title}
        className="w-16 h-20 object-cover rounded"
      />

      {/* Info */}
      <div className="grow">
        <h3 className="font-bold text-sm">{item.title}</h3>
        <p className="text-text-muted text-xs">{item.author}</p>
        <p className="text-primary font-bold">${item.price}</p>
      </div>

      {/* Cantidad */}
      <div className="flex items-center gap-2">
        <button
          onClick={() => decreaseQuantity(item.id)}
          className="w-6 h-6 bg-primary text-white rounded"
        >
          -
        </button>
        <span className="font-bold">{item.quantity}</span>
        <button
          onClick={() => addToCart(item)}
          className="w-6 h-6 bg-primary text-white rounded"
        >
          +
        </button>
      </div>

      {/* Eliminar */}
      <button
        onClick={() => removeFromCart(item.id)}
        className="text-red-500 hover:text-red-700"
      >
        ✕
      </button>
    </div>
  );
};

export default CartItem;
