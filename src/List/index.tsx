import "./index.css";
import Task from "../components/task";
import { useState } from "react";

const List = () => {
  const [toDoList, setToDoList] = useState([]);


  return (
    <div className="list">
      {toDoList.map((task, index) => {
        return <Task key={index} {...task}/>
      })}
    </div>
  );
};
export default List;
