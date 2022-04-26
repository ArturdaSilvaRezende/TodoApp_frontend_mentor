import React, { useContext, useState } from "react";

//custom style
import "./style/TodoForm.css";

//store
import { StoreContext } from "../../store/store";

const TodoForm = (props) => {
  const { TodoState } = useContext(StoreContext);

  const { addTodo } = props;

  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit} className="TodoApp__form">
      <button
        type="submit"
        style={{
          border: `1px solid ${TodoState ? "hsl(233, 11%, 84%)" : "#37394e"}`,
        }}
      >
        {" "}
      </button>
      <input
        type="text"
        className="input"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        style={{
          backgroundColor: TodoState ? "hsl(0, 0%, 98%)" : "hsl(235, 24%, 19%)",
        }}
      />
    </form>
  );
};

export default TodoForm;
