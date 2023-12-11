import { useState } from "react"

export default ({type,list, buttons})=>{ 
    const [newList,setNewList]=useState()
    const listItem=list.map((elem,i)=>{
        return (
    <div>
        <li key={elem}>{elem}</li>
        <button key={10} onClick={()=>{

        }} >{buttons[0]}</button>
        <button key={20}>{buttons[1]}</button>
    </div>

        )
    })
    
    return   type === 'ul' ? (<ul >{listItem}</ul>) : (<ol>{listItem}</ol>)
}