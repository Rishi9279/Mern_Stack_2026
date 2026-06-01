import React, { useState } from "react";

const ToDo = () => {
  const [tasks, setTasks] = useState([]);
  const [inputTask, setInputTask] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();

    if (inputTask.trim() === "") return;

    setTasks([...tasks, inputTask]);

    setInputTask("");
  };

  const handleDelete = (indexDelete) => {
    setTasks(
      tasks.filter((_, index) => {
        return index !== indexDelete;
      }),
    );
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          onChange={(e) => {
            setInputTask(e.target.value);
          }}
          value={inputTask}
          type="text"
          placeholder="Enter Task..."
        />
        <button>Add Task</button>
      </form>
      <ul>
        {tasks.map((item, index) => {
          return (
            <li key={index}>
              {item}
              {"  "}
              <button
                onClick={() => {
                  handleDelete(index);
                }}>
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ToDo;
