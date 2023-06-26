import React ,{useState,useEffect} from 'react'

const  Add =(props)=> {
    const [name,setName]= useState("")
    const [etat,setEtat]=useState("")



  return (
    <div>
        <input placeholder='add todo'name='addTodo' type='text' onChange={(e)=>{setName(e.target.value)}}/>
        <input placeholder='add state'name='state' type='text' onChange={(e)=>{setEtat(e.target.value)}}/>
        <button onClick={()=>{props.add(name,etat)}} >add</button>
    </div>
  )
}
 export default Add;