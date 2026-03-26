import "./index.css";
import { FaRegTrashAlt } from "react-icons/fa";
import { RiPencilFill } from "react-icons/ri";
import { useTasks } from "../../hooks/useTasks";

type TaskType = {
  task: { id: string; taskName: string };
};

const Task = ({ task }: TaskType) => {
  const { id, taskName } = task;
  const { deleteTask } = useTasks();
  const handleTaskDelete = () => {
    deleteTask(id);
  };

  return (
    <li className="task">
      <span>{taskName}</span>
      <div className="task-svg">
        <RiPencilFill className="task-pencil" />
        <FaRegTrashAlt onClick={handleTaskDelete} />
      </div>
    </li>
  );
};
export default Task;
