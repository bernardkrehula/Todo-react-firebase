import './index.css';
import Input from '../input';
import Btn from '../btn';
import { useState } from 'react';

const TaskCreator = () => {
    const [inputValue, setInputValue] = useState<string>("");

    const changeInptuValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setInputValue(value);
    }
    
    return(
        <div className='task-creator'>
            <Input placeholder="Add your task" onChange={changeInptuValue} value={inputValue}/>
            <Btn type='button' variation="primary">+</Btn>
        </div>
    )
}
export default TaskCreator;