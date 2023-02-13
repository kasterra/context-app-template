import { createContext, Component, PropsWithChildren } from "react";
import { bookType } from "../types/bookType";
import { v4 as uuid } from "uuid";

interface BookContextType {
  books: bookType[];
  addBook: (title: string, author: string) => void;
  removeBook: (id: string) => void;
}

export const BookContext = createContext<BookContextType | null>(null);

class BookContextProvider extends Component<PropsWithChildren> {
  state: { books: bookType[] } = { books: [] as bookType[] };
  addBook = (title: string, author: string) =>
    this.setState({
      books: [...this.state.books, { title, author, id: uuid() }],
    });
  removeBook = (id: string) =>
    this.setState({ books: this.state.books.filter((book) => book.id !== id) });

  render() {
    console.log("aa", this.state);
    return (
      <BookContext.Provider
        value={{
          books: this.state.books,
          addBook: this.addBook,
          removeBook: this.removeBook,
        }}
      >
        {this.props.children}
      </BookContext.Provider>
    );
  }
}

export default BookContextProvider;
