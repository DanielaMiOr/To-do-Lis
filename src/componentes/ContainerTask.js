import React,{useState, useEffect} from "react";
import ListTask from "./ListTask";
import "../CSS/ContainerTask.css";
import Task from "./Task";

function ContainerTask(){
    useEffect(() => {
        getTaskFromStorage();
      }, []);

const[tasks, setTask]=useState([]);

const getTaskFromStorage =()=> {
    if(localStorage.getItem("newTask")){
    const getLocalStorage = JSON.parse(localStorage.getItem("newTask"))
    console.log(getLocalStorage)
    setTask(getLocalStorage);
    
    }
}
const addTask =task=>{
   

  if(task.text.trim()) {
      task.text= task.text.trim();
      const lastTask= [task, ...tasks];
      setTask(lastTask);
      localStorage.setItem("newTask", JSON.stringify(tasks) )
     
  }
      }
      const editTask = id =>{
        //  const 
        //   setTask(lastTask);
          
      }
      const deleteTask = id =>{
       
     const lastTask = tasks.filter(task => task.id !== id);
     setTask(lastTask);
    localStorage.setItem("newTask", JSON.stringify( lastTask) )
    

    }
 const completeTask = id =>{
     const lastTask = tasks.map(task => {
    if(task.id === id){
        task.complete = !task.complete;
    }
    return task;
     });
     setTask(lastTask);
 }

    return(
<div>
    <ListTask onSubmit={addTask}/>
     <section className="taskContainer">
         
         {
             tasks.map((task)=>
             <Task
             key={task.id}
             id={task.id}
             text={task.text}
             complete={task.complete}
             completeTask={completeTask}
             editTask={editTask}
             deleteTask={deleteTask}
             />

             )
         }

     </section>
</div>

    );
}
export default ContainerTask;