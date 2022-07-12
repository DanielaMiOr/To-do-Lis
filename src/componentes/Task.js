import React from "react";
import '../CSS/Task.css';
import { AiOutlineCloseCircle,AiFillEdit } from "react-icons/ai";

function Task({ id,text, complete,completeTask, deleteTask,editTask }) {
    
    return (
        <div className={complete ? 'containerWork complete': 'containerWork'}>
            <section className="textContainer"
            onClick={()=>completeTask(id)}>
                {text}
            </section>
            <section className="iconosBox"
            onClick={()=> editTask(id)}>
                <AiFillEdit className="editIcon"/>


            </section>
            <section className="iconosBox"
            onClick={()=> deleteTask(id)}>
                <AiOutlineCloseCircle  className="deleteIcon"/>


            </section>
        </div>
    )
}
export default Task;