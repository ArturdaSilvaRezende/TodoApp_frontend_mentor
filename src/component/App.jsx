import React from "react";

//components
import Header from "./Header/Header";
import TodoApp from "./Todo/TodoApp";
import Footer from "./Footer/Footer";

//store
import StoreProvider from "../store/store";

const App = () => {
  return (
    <div>
      <StoreProvider>
        <Header />
        <TodoApp />
        <Footer />
      </StoreProvider>
    </div>
  );
};

export default App;
