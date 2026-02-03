import './App.css';
import TaskCreator from './components/TaskCreator';
import List from './List';
import Title from './List/title';

const App = () => {
    return(
        <div className='to-do-app'>
            <Title />
            <TaskCreator />
            <List/>
        </div>
    )
}
export default App;