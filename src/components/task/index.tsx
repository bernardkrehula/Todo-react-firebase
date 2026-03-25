import "./index.css";
import { FaRegTrashAlt } from "react-icons/fa";
import { RiPencilFill } from "react-icons/ri";

const Task = ({taskName}: {taskName: string}) => {
  console.log(taskName)
  return (
    <li className="task">
      <span>{taskName}</span>
      <div className="task-svg">
        <RiPencilFill className="task-pencil"/>
        <FaRegTrashAlt />
      </div>
    </li>
  );
};
export default Task;
