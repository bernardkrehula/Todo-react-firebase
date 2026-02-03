import "./index.css";
import { FaRegTrashAlt } from "react-icons/fa";
import { RiPencilFill } from "react-icons/ri";

const Task = () => {
  return (
    <li className="task">
      <span>Nesto</span>
      <div className="task-svg">
        <RiPencilFill className="task-pencil"/>
        <FaRegTrashAlt />
      </div>
    </li>
  );
};
export default Task;
