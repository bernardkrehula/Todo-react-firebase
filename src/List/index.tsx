import "./index.css";
import Input from "../components/input";
import Task from "./task";

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
