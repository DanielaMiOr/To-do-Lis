import React from "react";
import '../CSS/Tarea.css';
import { AiOutlineCloseCircle } from "react-icons/ai";

function Tarea({ text, complete }) {
    
    return (
        <div className={complete ? 'tareaContainer complete': 'tareaContainer'}>
            <section className="textContainer">
                {text}
            </section>
            <section className="iconosBox">
                <AiOutlineCloseCircle  className="deleteIcon"/>


            </section>
        </div>
    )
}
export default Tarea;