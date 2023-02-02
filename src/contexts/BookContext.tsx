import { createContext, Component, PropsWithChildren } from "react";
import { bookType } from "../types/bookType";
import { v4 as uuid } from "uuid";

interface BookContextType {
  books: bookType[];
  addBook: (title: string, author: string) => void;
  removeBook: (id: string) => void;
}

export const BookContext = createContext<BookContextType | null>(null);

class BookContextProvider extends Component<PropsWithChildren, bookType[]> {
  state: bookType[] = [];
  addBook = (title: string, author: string) =>
    this.setState([...this.state, { title, author, id: uuid() }]);
  removeBook = (id: string) =>
    this.setState(this.state.filter((book) => book.id !== id));

  render() {
    return (
      <BookContext.Provider
        value={{
          books: this.state,
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
