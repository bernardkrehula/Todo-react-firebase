import './index.css';
import { TfiPencilAlt2 } from "react-icons/tfi";
import { LuNotebook } from "react-icons/lu";

const Title = () => {
    return(
        <div className="title">
            <h1>ToDo List</h1>
            <LuNotebook className='notebook-svg'/>
            <TfiPencilAlt2 className='pencil-svg'/>
        </div>
    )
}
export default Title;