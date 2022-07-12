import React from "react";
import"../CSS/ListTask.css";


function ListTask(props){
    return(
        <form className="form">

           <input
           className="inputText"
           type= "text"
           placeholder="Escribe una tarea"
           name="texto"
           /> 
           <button className="buttonTask">
               Agregar tarea
           </button>
        </form>
    )
}
export default ListTask