import { useContext } from "react";
import { BookContext } from "../contexts/BookContext";
import { bookType } from "../types/bookType";

interface Props {
  book: bookType;
}

const BookDetails = ({ book }: Props) => {
  const { removeBook } = useContext(BookContext)!;
  return (
    <li
      onClick={() => {
        removeBook(book.id);
      }}
    >
      <div className="title">{book.title}</div>
      <div className="author">{book.author}</div>
    </li>
  );
};

export default BookDetails;
