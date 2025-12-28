import { useCartStore } from "../../store/useCartStore";

const BookCard = ({ book }) => {
  //usar useCartStore
  const addToCart = useCartStore((state) => state.addToCart);
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <img
        src={book.image}
        alt={book.title}
        className="w-full h-48 object-contain mb-4"
      />
      <h3 className="font-bold">{book.title}</h3>
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
