import React, { useState } from "react";
import { FaPlus } from "react-icons/fa"

const InputTodo = (props) => {
  const [title, setTitle] = useState("");

  const onChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      props.addTodoProps(title);
      setTitle("");
    } else {
      alert("Please write item");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="field-input-to-do">
      <input
        type="text"
        placeholder="Add Todo..."
        value={title}
        className="input-to-do"
        onChange={onChange}
      />

      <button className="submit-btn"><FaPlus/></button>
    </form>
  );
};

export default InputTodo;
