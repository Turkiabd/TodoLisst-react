import "../App.css";
import ListGroup from "./list/ListGroup";
import Navbar from "./Navbar";
import { useState } from "react";
import Form from "./Form";

const App = () => {
  //kitchen (most of the logic here!)
  // usestate
  // the change always on setTodoitem n setTodolist
  //u cannot do this : todoItem =....
  const [todoItem, setTodoItem] = useState(""); //initially empty
  const [todoList, setTodoList] = useState([]); //initially empty

  //detect the clicking action
  const onClick = (e) => {
    // spread operato(...)
    setTodoList([...todoList, todoItem]);
    setTodoItem(""); // this to make the input empty after clicking the btn
  };

  //detect any typing (change) u make
  const onChange = (e) => {
    setTodoItem(e.target.value);
  };

  return (
    <>
      {/* navbar component , must be imported (self closing) */}
      <Navbar projectName="Todo List" />
      <div className="container">
        <h4 className="text-center display-4 mb-3">Todo List !</h4>

        {/* listgroup component , must be imported  (self closing)*/}
        <ListGroup todoList={todoList} />

        {/* form component , must be imported (self closing) */}
        <Form onChange={onChange} todoItem={todoItem} onClick={onClick} />
      </div>
    </>
  );
};

export default App;
