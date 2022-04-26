import React, { useContext, useState } from "react";

//components
import TodoControl from "./TodoControl";
import TodoForm from "./TodoForm";

//custom style
import "./style/TodoApp.css";
import "./style/TodoFooter.css";

//store
import { StoreContext } from "../../store/store";

const TodoApp = (props) => {
  const { TodoState } = useContext(StoreContext);
  const [todos, setTodos] = useState([
    {
      text: "Complete online JavaScript course",
      isCompleted: false,
    },
    {
      text: "Jog around the park 3x",
      isCompleted: false,
    },
    {
      text: "10 minutes meditation",
      isCompleted: false,
    },
    {
      text: "Read for 1 hour",
      isCompleted: false,
    },
    {
      text: "Pick up graceries",
      isCompleted: false,
    },
    {
      text: "Complete Todo App on Frontend Mentor",
      isCompleted: false,
    },
  ]);

  const [filterTodos, setFilterTodos] = useState(todos);

  const addTodo = (text) => {
    const newTodos = [...todos, { text, isCompleted: false }];
    setTodos(newTodos);
    setFilterTodos(newTodos);
  };

  const completeTodo = (index) => {
    const newTodos = [...todos];

    if (newTodos[index].isCompleted === false) {
      newTodos[index].isCompleted = true;
      return setTodos(newTodos);
    } else {
      newTodos[index].isCompleted = false;
      return setTodos(newTodos);
    }
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];

    if (newTodos[index].isCompleted === false) {
      return alert("Please mark 'todo' item as complete first!");
    } else {
      newTodos.splice(index, 1);
      setTodos(newTodos);
    }
  };

  const removeComplete = (index) => {
    setTodos(index.filter((item) => item.isCompleted !== true));
  };

  //handle filter

  const filterComplete = (index) => {
    setTodos(index.filter((item) => item.isCompleted === true));
  };
  const filterActive = (index) => {
    setTodos(index.filter((item) => item.isCompleted === false));
  };
  const filterAll = (text) => {
    const newTodos = [...filterTodos];
    setTodos(newTodos);
  };

  return (
    <div
      className="TodoApp"
      style={{
        backgroundColor: TodoState ? "#f4f4f6" : "hsl(235, 21%, 11%)",
      }}
    >
      {/* Input */}
      <TodoForm addTodo={addTodo} />

      {/* TodoList */}
      <div className="TodoApp__list">
        {todos.map((todo, index) => (
          <TodoControl
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
        ))}
      </div>

      {/* TodoClear */}
      <div
        className="TodoApp__clear"
        style={{
          backgroundColor: TodoState ? "hsl(0, 0%, 98%)" : "hsl(235, 24%, 19%)",
          borderTop: `1px solid ${
            TodoState ? "hsl(233, 11%, 84%)" : "#37394e"
          }`,
          color: TodoState ? "#bdbcc2" : "#50526b",
        }}
      >
        <p>{todos.length} items left</p>
        <div
          className="TodoApp__filter"
          style={{
            backgroundColor: TodoState
              ? "hsl(0, 0%, 98%)"
              : "hsl(235, 24%, 19%)",

            color: TodoState ? "#bdbcc2" : "#50526b",
          }}
        >
          <p className="font-weigth-700" onClick={() => filterAll(todos)}>
            All
          </p>
          <p className="font-weigth-700" onClick={() => filterActive(todos)}>
            Active
          </p>
          <p className="font-weigth-700" onClick={() => filterComplete(todos)}>
            Completed
          </p>
        </div>
        <p
          className="TodoApp__clear-task"
          onClick={() => removeComplete(todos)}
        >
          Clear Completed
        </p>
      </div>

      <footer className="TodoApp__footer">
        <p>Drag and drop to reorder list</p>
        <div className="attribution">
          <p>
            Challenge by
            <a
              href="https://www.frontendmentor.io?ref=challenge"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              Frontend Mentor
            </a>
            .
          </p>
          <p>
            Coded by{" "}
            <a href="https://artur-silva-rezende.netlify.app/" rel="noreferrer">
              Artur da Silva Rezende
            </a>
            .
          </p>
        </div>
      </footer>
    </div>
  );
};

export default TodoApp;
