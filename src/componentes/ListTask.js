import React, {useState} from "react";
import"../CSS/ListTask.css";
import {v4 as uuidv4} from "uuid";


function ListTask(props){
    const [input, setInput]= useState('');

    const sendChange =e =>{
    setInput(e.target.value);
  
  
}

    const sendForm= e=>{
        e.preventDefault();
        
    
        const newTask={
            id:uuidv4(),
            text: input,
            complete: false

        }
       
    
    props.onSubmit(newTask);
    setInput("");
    }
    return(
        <form className="form"
        onSubmit={sendForm}>

           <input
           className="inputText"
           type= "text"
           placeholder="Escribe una tarea"
           name="texto"
           onChange= {sendChange}
           value={input}
           /> 
           <button className="buttonTask">
               Agregar tarea
           </button>
        </form>
    )
}
export default ListTask