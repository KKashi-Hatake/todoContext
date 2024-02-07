import { useState } from "react";
import CreateTodo from "./components/CreateTodo";
import Todo from "./components/Todo";
import { todoContext, TodoProvider } from "./context";

function App() {
  const [todos, setTodos] = useState([]);
  const addTodo = (todo) => {
    setTodos((prev) => [...prev, todo]);
  };

  const deleteTodo = (id) => {
    setTodos((prev)=>{
      return prev.filter((elem)=>{
        return elem.id!==id;
      })
    })
  };
  const updateTodo = (id, todo) => {
    setTodos((prev)=>{
      return prev.map((elem)=>{
        return elem.id===id?{...elem, text:todo}:elem;
      })
    })
  };
  const toggleComplete = (id, val) => {
    setTodos((prev)=>{
      return prev.map((elem)=>{
        return elem.id===id?{...elem, complete:val}:elem
      })
    })
  };

  return (
    <TodoProvider
      value={{ todos, addTodo, deleteTodo, updateTodo, toggleComplete }}
    >
      <div className="w-screen h-screen bg-gradient-to-t from-[#161A30] flex justify-start flex-col to-[#FF6C22]">
        <div className="flex justify-center">
          <CreateTodo />
        </div>
        <div className="flex justify-center items-center flex-col">
          <p className="mb-1 text-3xl text-white font-serif">Your Todos</p>
          {todos.map((elem)=>{
            return <Todo obj={elem} key={elem.id}/>
          })}
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
