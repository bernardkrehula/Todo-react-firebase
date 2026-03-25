import "./index.css";
import Input from "../../ui/input";
import Btn from "../../ui/btn";
import { useState } from "react";
import { getDatabase, push, ref, set } from "firebase/database";
import app from "../../config";

const TaskCreator = () => {
  const [inputValue, setInputValue] = useState<string>("");

  const changeInptuValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
  };
  const saveTask = () => {
    try {
      const db = getDatabase(app);
      const newDocRef = push(ref(db, "tasks"));
      set(newDocRef, {
        taskName: inputValue,
      });
      clearInput();
      return console.log("data saved succesfully");
    } catch (error) {
      throw Error;
    }
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
