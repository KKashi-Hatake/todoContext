import { createContext, useContext } from "react";

export const todoContext = createContext({
  todos: [
    {
      id: 1,
      text: "We are good to go",
      complete:false
    },
  ],
  addTodo:()=>{},
  deleteTodo:()=>{},
  updateTodo:()=>{},
  toggleComplete:()=>{}
});

export const useTodo = () => {
  return useContext(todoContext);
};

export const TodoProvider = todoContext.Provider;
