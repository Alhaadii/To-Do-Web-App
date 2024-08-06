import { FaPlusCircle } from "react-icons/fa";

const TodoInput = ({ text, setText, handleSubmit }) => {
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div className="input-group mb-3">
        <input
          type="text"
          name="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="form-control border-0 shadow-none"
          placeholder="Add new Task"
          autoFocus
        />
        <button className="input-input-group-text border-0 shadow-none btn btn-light">
          <FaPlusCircle className="fs-3 text-primary" />
        </button>
      </div>
    </form>
  );
};

export default TodoInput;
