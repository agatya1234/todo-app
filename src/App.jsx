import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import "./App.css";
function App() {
  const todoItems= [
    {
    name:"buy milk",
    dueDate:"4/10/12"
  },
  {
    name:"go to school",
    dueDate:"5/10/12",
  },
];

  return (
    
  <center className='todo-container'>
    <AppName/>
    <AddTodo/>
   <TodoItems todoItems={todoItems}/>
 </center>
  );   
};

export default App
