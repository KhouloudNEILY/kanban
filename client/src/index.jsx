import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header.jsx";
import Tasks from "./components/Tasks.jsx"
import axios from "axios";
import AddTask from "./components/AddTask.jsx"

const App = () => {
   const [data,setData]=useState([])
   const [refetch,setRefetch]=useState(false)
   useEffect(()=>{
    fetch()
   },[!refetch])

console.log(data)

//addTask
const add = (taskname,state)=>{
  axios.post("http://localhost:3000/api/task/add",{
    taskname:taskname,
    state:state
  })
  .then(()=>{setRefetch(!refetch)})
  .catch((err)=>{console.log(err);})
}


const update=(taskname , state)=>{


  axios.put(`http://localhost:3000/api/task/update/${taskname}`,{
    state : state
    })
  .then((res)=>{setRefetch(!refetch)})
  .catch((err)=>{console.log(err)})
}



//delete 
const deleteTask=(id)=>{

  axios
  .delete(`http://localhost:3000/api/task/delete/${id}`)
  .then(()=>{setRefetch(!refetch)})
  .catch((err)=>{console.log(err);})
}





// fetcher Data
   const fetch=()=>{
        axios 
        .get("http://localhost:3000/api/task/")
         .then((res)=>{
           setData(res.data)
         })
        .catch((err)=>{console.log(err)})
   }


  return (
    <div> 
   <Header/>
    <AddTask add={add}/>
    <Tasks data={data}  delete={deleteTask} update={update} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
