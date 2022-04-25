import React, { createContext, useCallback, useRef, useState } from "react";

//handles
import { HandleColors } from "./handleColors/HandleColors";

//context
export const StoreContext = createContext();

const StoreProvider = ({ children }) => {
  const [TodoState, setTodoState] = useState(!false);

  const TodoBgRef = useRef(null);

  const ChangeColors = useCallback(() => {
    HandleColors(TodoState, TodoBgRef, setTodoState);
  }, [TodoState, TodoBgRef]);

  return (
    <>
      <StoreContext.Provider
        value={{
          TodoState,
          TodoBgRef,
          ChangeColors: () => ChangeColors(),
        }}
      >
        {children}
      </StoreContext.Provider>
    </>
  );
};

export default StoreProvider;
