import "./index.css";
import Task from "../components/task";
import { useTasks } from "../hooks/useTasks";

const List = () => {
  const { tasks } = useTasks();

  if (!tasks) return null;
  return (
    <div className="list">
      {tasks.map((task, index) => {
        return <Task key={index} {...task} />;
      })}
    </div>
  );
};
export default List;
