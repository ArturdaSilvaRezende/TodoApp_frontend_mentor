import React, { useContext } from "react";

//custom style
import "./style/TodoControl.css";

//images
import IconCheck from "../../assets/icon-check.svg";
import IconCross from "../../assets/icon-cross.svg";

//store
import { StoreContext } from "../../store/store";

const TodoControl = (props) => {
  const { todo, index, completeTodo, removeTodo } = props;
  const { TodoState } = useContext(StoreContext);

  return (
    <div
      className="TodoApp__control"
      style={{
        backgroundColor: TodoState ? "hsl(0, 0%, 98%)" : "#25273c",
        borderTop: `1px solid ${TodoState ? "hsl(233, 11%, 84%)" : "#37394e"}`,
      }}
    >
      <p
        className="TodoApp__control-text"
        style={{
          textDecoration: todo.isCompleted ? "line-through" : "",
          color: TodoState ? "#5c5c68" : "#999bb2",
        }}
        onClick={() => completeTodo(index)}
      >
        {" "}
        {todo.text}
      </p>

      <div className="TodoApp__btn-container">
        <button
          className={`TodoApp__btn-complete ${
            todo.isCompleted ? `TodoApp__check` : ``
          }`}
          onClick={() => completeTodo(index)}
          style={{
            border: `1px solid ${TodoState ? "hsl(233, 11%, 84%)" : "#37394e"}`,
          }}
        >
          {todo.isCompleted ? <img src={IconCheck} alt="icon-check" /> : ""}
        </button>
        <button
          className="TodoApp__btn-remove"
          onClick={() => removeTodo(index)}
        >
          <img src={IconCross} alt="icon-check" />
        </button>
      </div>
    </div>
  );
};

export default TodoControl;
