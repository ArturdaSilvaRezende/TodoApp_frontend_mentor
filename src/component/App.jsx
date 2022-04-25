import React from "react";

//components
import Header from "./Header/Header";
import TodoApp from "./Todo/TodoApp";

//store
import StoreProvider from "../store/store";

const App = () => {
  return (
    <div>
      <StoreProvider>
        <Header />
        <TodoApp />
      </StoreProvider>
    </div>
  );
};

export default App;
