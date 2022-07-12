import React,{useState} from "react";
import ListTask from "./ListTask";
import "../CSS/ContainerTask.css";

function ContainerTask(){

const[task, setTask]=useState([]);




    return(
<div>
    <ListTask/>
     <section className="taskContainer">
         Lista de tareas

     </section>
</div>

    );
}
export default ContainerTask;