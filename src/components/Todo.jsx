import { useState } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

const Todo = () => {
  const [text, setText] = useState("");
  const [todo, setTodo] = useState([]);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [todoUpdate, setTodoUpdate] = useState({});

  const handleUpdate = (data) => {
    setText(data.text);
    setTodoUpdate(data);
  };

  const handleComplete = (data) => {
    const newtodo = todo.filter((todo) => todo.id !== data.id);
    newtodo.push({ id: data.id, text: data.text, completed: true });
    setTodo(newtodo);
    setSuccess(`Todo of this id : ${data.id} completed successfully`);
    setTimeout(() => {
      setSuccess("");
    }, 2000);
  };

  const handleDelete = (id) => {
    const newtodo = todo.filter((todo) => todo.id !== id);
    setTodo(newtodo);
    setSuccess(`Todo of this id : ${id} deleted successfully`);
    setTimeout(() => {
      setSuccess("");
    }, 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() === "") {
      setError("Please enter a task");
      return;
    }
    if (todoUpdate && todoUpdate.id) {
      const getFilteredOldTodo = todo.filter(
        (todo) => todo.id !== todoUpdate.id
      );

      getFilteredOldTodo.unshift({
        id: todoUpdate.id,
        text: text,
        completed: todoUpdate.completed,
      });
      setTodo(getFilteredOldTodo);
      setSuccess(`${todoUpdate.text} is Updated successfully`);
      setTimeout(() => {
        setSuccess("");
      }, 2000);
      setText("");
      setTodoUpdate({});
    } else {
      todo.unshift({ id: Date.now(), text, completed: false });
      setTodo(todo);
      setText("");
      setError("");
      setSuccess("New task added successfully");
      setTimeout(() => {
        setSuccess("");
      }, 2000);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 text-light">
      <div className="row">
        <div className="bg-dark text-light shadow-lg p-5">
          <div className="col-lg-8 col-md-8 col-sm-10 col-12 w-100">
            <div className="mb-3">
              <h3 className="display-6 text-center">Todo List Manager App</h3>
              <hr />

              <div className="text-danger text-center fw-lighter">{error}</div>
              <div className="text-success text-center fw-lighter">
                {success}
              </div>
            </div>
            <TodoInput
              text={text}
              setText={setText}
              handleSubmit={handleSubmit}
            />
          </div>
          <TodoList
            todo={todo}
            handleDelete={handleDelete}
            handleComplete={handleComplete}
            handleUpdate={handleUpdate}
          />
        </div>
      </div>
    </div>
  );
};

export default Todo;
