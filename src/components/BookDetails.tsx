import { bookType } from "../types/bookType";

interface Props {
  book: bookType;
}

const BookDetails = ({ book }: Props) => {
  return (
    <li onClick={() => {}}>
      <div className="title">{book.title}</div>
      <div className="author">{book.author}</div>
    </li>
  );
};

export default BookDetails;
