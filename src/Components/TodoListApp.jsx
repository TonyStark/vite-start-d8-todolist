import TodoListUI from "./TodoListUI";
import { useState } from "react";
function TodoListApp() {
    const [tasks,setTasks]=useState([])
    const addTask=()=>{
        const newTask=prompt("Enter a new Task")
        if(newTask){
            let obj={
                id:Date.now(),
                task:newTask,
                isCompleted:false
            }
            setTasks([...tasks,obj])
        }
    }
    const removeTasks = (id) =>{
        const updatedTasks=tasks.filter((task)=>{
            return task.id!==id
        })
        setTasks(updatedTasks)
    }
    const toggleTask=(id)=>{
        const updatedTasks=tasks.map((task)=>{
            if(task.id==id){
                return{...task,isCompleted:!task.isCompleted}
            }
            return task
        })
        setTasks(updatedTasks)
    }
    return ( 
        <TodoListUI addTask={addTask} tasks={tasks} removeTasks={removeTasks} toggleTask={toggleTask}/>
    );
}

export default TodoListApp;