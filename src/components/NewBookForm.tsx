import { useContext, useState } from "react";
import { BookContext } from "../contexts/BookContext";

const NewBookForm = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const { addBook } = useContext(BookContext)!;

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    addBook(title, author);
    setTitle("");
    setAuthor("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="book title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="author name"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <input type="submit" value="add book" />
    </form>
  );
};

export default NewBookForm;
