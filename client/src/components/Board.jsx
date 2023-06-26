import { Delete, Update } from '@material-ui/icons';
import React, { useState } from 'react';



const Board=(props)=> {

    const[etat,setEtat]=useState("");
    return (
        <div className="Board">
           
            <div className="Board_toDo ">
                <h1>Open </h1>
                <div className="card">
                    <span className="card_name">{props.one.taskname}</span>
                    <span className="card_status">{props.one.state}</span>
                    <input placeholder='update todo'name='state'  type='text' onChange={(e)=>{setEtat(e.target.value)}}/>
                    <button type='submit'onClick = {()=> {props.update(props.one.taskname,etat)}} >update</button>
                   
                    <button type="submit" onClick = {()=> {props.delete(props.one.taskname)}}>delete</button>
                </div>
            </div>
            <div className="Board_toDo">
            <h1>In Progress</h1>
            <div className="card">
                    <span className="card_name">{props.one.taskname}</span>
                    <span className="card_status">{props.one.state}</span>
                    <input placeholder='update todo'name='state' type='text' onChange={(e)=>{setEtat(e.target.value)}}/>
                    <button type='submit'  >update</button>
                    <button type="submit " onClick = {() => {props.delete(props.one.taskname)}} >delete</button> 
                </div>
            </div>
            <div className="Board_toDo">
            <h1>Resolved</h1>
            <div className="card">
                    
                    <span className="card_name">{props.one.taskname}</span>
                    <span className="card_status">{props.one.state}</span>
                    <input placeholder='update todo'name='state' type='text' onChange={(e)=>{setEtat(e.target.value)}}/>
                    <button type='submit'  onClick= {() => {props.delete(props.one.taskname)}} >update</button>
                    <button type="submit"    onClick= {() => {props.delete(props.one.taskname)}}>delete</button>
                </div>
            </div>
        </div>
    );



  }
  
  



export default Board;