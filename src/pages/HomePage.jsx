import { useState } from "react";
import { books } from "../data/books.mock";
import BookCard from "../features/books/BookCard";

const HomePage = () => {
  const [search, setSearch] = useState("");
  //filtro de libros por titulo
  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div className="max-w-6xl mx-auto px-6 py-8">
      <h1 className="text-3xl font-bold text-text-main mb-6">
        Catálogo de Libros
      </h1>

      {/* barra de busqueda*/}
      <input
        type="text"
        placeholder="Buscar por título"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full md:w-96 px-4 py-2 border border-border rounded-lg mb-8"
      />
      {/*grid de libros*/}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredBooks.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
