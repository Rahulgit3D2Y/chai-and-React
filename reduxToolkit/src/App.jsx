import "./App.css";
import AddTodo from "./components/addtodo";
import Todos from "./components/Todos";

function App() {
  return (
    <>
      <div>
        <AddTodo />
        <Todos />
      </div>
    </>
  );
}

export default App;
