import { bookType } from "../types/bookType";
import BookDetails from "./BookDetails";

const BookList = () => {
  const books: bookType[] = [];
  return books.length ? (
    <div className="book-list">
      <ul>
        {books.map((book) => {
          return <BookDetails book={book} key={book.id} />;
        })}
      </ul>
    </div>
  ) : (
    <div className="empty">No books to read. Hello free time :).</div>
  );
};

export default BookList;
