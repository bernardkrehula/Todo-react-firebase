import TaskCreator from "../components/TaskCreator";
import "./index.css";
import Task from "./task";
import Title from "./title";

const List = () => {
  return (
    <ul className="list">
      <Title />
      <TaskCreator />
      <Task />
      <Task />
    </ul>
  );
};
export default List;
