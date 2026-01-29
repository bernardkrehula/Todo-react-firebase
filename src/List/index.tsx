import "./index.css";
import Input from "./Input";
import Task from "./Task";

const List = () => {
  return (
    <div className="list">
      <Input />
      <Task />
      <Task />
    </div>
  );
};
export default List;
