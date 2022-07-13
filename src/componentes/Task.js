import React, { useState } from "react";
import '../CSS/Task.css';
import { AiOutlineCloseCircle, AiFillEdit } from "react-icons/ai";

function Task({ id, text, complete, completeTask, deleteTask, editTask }) {
    const [edit, setEdit] = useState(false);
    const [editText, setEditText] = useState(text);
    const editTaskForm = () => {
        setEdit(true)
    }
    const createEdit = (e) => {
        setEditText(e.target.value);
    }
    const submitEdit = (e) => {
        e.preventDefault();
        editTask(id, editText)
        setEdit(false);
    }

    return (
        <div className={complete ? 'containerWork complete' : 'containerWork'}>
            {
                !edit ?
            <><section className="textContainer"
                        onClick={() => completeTask(id)}>
                        {text}
                    </section><section className="iconosBox"
                        onClick={() => setEdit(true)}>
                            <AiFillEdit className="icons" />


                        </section><section className="iconosBox"
                            onClick={() => deleteTask(id)}>
                            <AiOutlineCloseCircle className="icons" />


                        </section></>
            :
            <form className= "formEdit" onSubmit={submitEdit}>  
            <input className="inputEdit"value={editText} onChange={createEdit} />
                <button className= "editButton">Guardar</button>
                </form>
}
        </div>
    )
}
export default Task;