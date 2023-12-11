import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CustomList from './components/CustomList'

function App() {
  
  const allLists=[
        {
          title: "Invitati" ,
          type: "ul",
          list: ["Tizio", "Caio"]
        },
        {
          title: "NonInvitati" ,
          type: "ul",
          list: ["Paolo", "Claudia"]
        },
        {
          title: "forseInvitati" ,
          type: "ul",
          list: ["Adriana", "Cesare"]
      },
   ]
      const [newList,setNewList]=useState([
        {
          title: "Invitati" ,
          type: "ul",
          list: ["Tizio", "Caio"],
          addPerson:''
        },
        {
          title: "NonInvitati" ,
          type: "ul",
          list: ["Paolo", "Claudia"],
          addPerson:''
        },
        {
          title: "forseInvitati" ,
          type: "ul",
          list: ["Adriana", "Cesare"],
          addPerson:''
      },
   ])
   const [listaAggiornata,setListaAggiornata]=useState([])
   return(
     
     <>
        <div>
          {newList.map(({list , type , title, addPerson},i)=>{
            return(

            <div key={title}>
              <h5>{title}</h5>
              <input type="text" 
                onChange={e=>{addPerson=e.target.value
                      setListaAggiornata([...list,addPerson])
                }} />
              <button onClick={()=>{
                      let array=[...newList]
                      array.splice(i,1,{type,title,addPerson,list:listaAggiornata})
                      setNewList(array)
                      
              }}>aggiungi </button>
              <CustomList
                list={list}
                type={type}
                buttons={['elimina','modifica']}
            />
            </div>
            )
          })}
        </div>
     </>
  )   
}

export default App


//Crea un array di oggetti (allLists), in cui ciascun oggetto ha questa struttura:
//{
//   title: "Invitati"
//   type: "ul",
//   list: ["Tizio", "Caio]
//}
//Per ogni oggetto, renderizza un div che contiene 
//un titolo con contenuto 'title' e un 
//CustomList con type e list nei props.
