import { useCartStore } from "../../store/useCartStore";
import { useNavigate } from "react-router-dom";

/**
 * Tarjeta de libro con imagen, título, precio y botón de añadir.
 */
const BookCard = ({ book }) => {
  const navigate = useNavigate();
  const addToCart = useCartStore((state) => state.addToCart);
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      {/* imagen */}
      <img
        src={book.image}
        alt={book.title}
        className="w-full h-48 object-contain mb-4 cursor-pointer hover:opacity-80"
        onClick={() => navigate(`/book/${book.id}`)}
      />
      {/* titulo */}
      <h3
        className="font-bold cursor-pointer hover:text-primary"
        onClick={() => navigate(`/book/${book.id}`)}
      >
        {book.title}
      </h3>
      <p className="text-text-body">{book.author}</p>
      <p className="text-primary font-bold">${book.price}</p>
      {/*boton agregar carrito*/}
      <button
        onClick={() => addToCart(book)}
        className="w-full bg-primary text-white py-2 rounded hover:bg-primary-dark"
      >
        Añadir al carrito
      </button>
    </div>
  );
};

export default BookCard;
