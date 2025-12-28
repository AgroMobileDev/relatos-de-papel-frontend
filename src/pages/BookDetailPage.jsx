import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { books } from "../data/books.mock";
import { useCartStore } from "../store/useCartStore";

const BookDetailPage = () => {
  const { id } = useParams();
  const addToCart = useCartStore((state) => state.addToCart);
  const [showToast, setShowToast] = useState(false); // estado para mostrar el toast

  // Buscar el libro por ID
  const book = books.find((b) => b.id === parseInt(id));

  // Si no existe el libro
  if (!book) {
    return (
      <div className="max-w-6xl mx-auto px-6 py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Libro no encontrado</h2>
        <Link to="/home" className="text-primary hover:underline">
          Volver al catálogo
        </Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(book);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000); // ocultar el toast después de 2 segundos
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-8">
      {/* Toast */}
      {showToast && (
        <div className="fixed top-20 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50">
          ✓ {book.title} añadido al carrito
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Imagen */}
        <div className="flex justify-center">
          <img
            src={book.image}
            alt={book.title}
            className="w-64 h-auto object-contain rounded-lg shadow-lg"
          />
        </div>

        {/* Detalles */}
        <div>
          <h1 className="text-3xl font-bold mb-2">{book.title}</h1>
          <p className="text-text-muted mb-4">Por {book.author}</p>
          <p className="text-2xl font-bold text-primary mb-6">${book.price}</p>
          <p className="text-text-body mb-6">{book.description}</p>

          <button
            onClick={handleAddToCart}
            className="w-full bg-primary text-white py-3 rounded-lg font-bold hover:bg-primary-dark"
          >
            Añadir al carrito
          </button>

          <Link
            to="/home"
            className="block text-center mt-4 text-primary hover:underline"
          >
            ← Volver al catálogo
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookDetailPage;
