import React from "react";
import Navbar from "./components/Navbar";
import BookList from "./components/BookList";
import NewBookForm from "./components/NewBookForm";

function App() {
  return (
    <div className="App">
      <Navbar />
      <BookList />
      <NewBookForm />
    </div>
  );
}

export default App;
