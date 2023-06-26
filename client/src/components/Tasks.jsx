import React from "react";
import Board from "./Board.jsx";

const Tasks=(props)=>{
    return (
   <div className="Tasks">
    
     {props.data.map((element,i)=><Board one={element} key={i}  delete={props.delete} update={props.update}/>)}
      
   </div>
    )

}



export default Tasks