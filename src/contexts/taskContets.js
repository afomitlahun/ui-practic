import {createContext,useState,useContext} from 'react';

const TaskContext = createContext();

export default function TaskProvider({children}) {
 const [switchScreen,setSwitchScreen] = useState(false);//focusTime screen atasay    
// const [addTask , setAddTask] = useState(false);
const [task,setTask] = useState('');
const [tasks,setTasks] =useState([]);//ye mnsfewn list lemaskemet  new 
const [selectedTask, setSelectedTask]=useState("");// list wst yemeretnewn lemaskemet new

const Value = {task,setTask,tasks,setTasks,selectedTask,setSelectedTask };

    return (
        <TaskContext.Provider value = {Value}>
            {children}
        </TaskContext.Provider>
    )
}
export const useTasks = () =>{
    const context = useContext(TaskContext);
    return context;
    }
