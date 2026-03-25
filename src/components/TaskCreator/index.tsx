import "./index.css";
import Input from "../../ui/input";
import Btn from "../../ui/btn";
import { useState } from "react";
import { requestTaskUpload } from "../../api/requestTaskUpload";

const TaskCreator = () => {
  const [inputValue, setInputValue] = useState<string>("");

  const changeInptuValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
  };
  const saveTask = () => {
    requestTaskUpload(inputValue);
    clearInput();
  };
  const clearInput = () => setInputValue("");

  return (
    <div className="task-creator">
      <Input
        placeholder="Add your task"
        onChange={changeInptuValue}
        value={inputValue}
      />
      <Btn type="button" variation="primary" onClick={saveTask}>
        +
      </Btn>
    </div>
  );
};
export default TaskCreator;
