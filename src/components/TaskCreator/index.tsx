import "./index.css";
import Input from "../../ui/input";
import Btn from "../../ui/btn";
import React, { useState } from "react";
import { useTasks } from "../../hooks/useTasks";

const TaskCreator = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const { makeTask } = useTasks();

  const changeInptuValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
  };
  const saveTask = (e: React.ChangeEvent) => {
    e.preventDefault();
    if (inputValue != "") {
      makeTask(inputValue);
      clearInput();
    }
  };
  const clearInput = () => setInputValue("");

  return (
    <form className="task-creator" onSubmit={saveTask}>
      <Input
        placeholder="Add your task"
        onChange={changeInptuValue}
        value={inputValue}
      />
      <Btn type="submit" variation="primary">
        +
      </Btn>
    </form>
  );
};
export default TaskCreator;
