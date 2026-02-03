import './index.css';
import Input from '../input';
import Btn from '../btn';

const TaskCreator = () => {
    
    return(
        <div className='task-creator'>
            <Input placeholder="Add your task"/>
            <Btn type='button' variation="primary">+</Btn>
        </div>
    )
}
export default TaskCreator;