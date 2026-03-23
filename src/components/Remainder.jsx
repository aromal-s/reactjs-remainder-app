import React, {useState} from 'react'
import './remainder.css'
function Remainder() {

    const [remainder, setremainder] = useState([]);
     const [newremainder, setnewremainder] = useState("");

    const handleInputChange = (event)=>{
        setnewremainder(event.target.value)
    }

    const handleAddRemainder = ()=>{
        if(newremainder.trim() ){
            setremainder([...remainder,newremainder])
            setnewremainder("")
        }
    }

    const handleDelete = (index)=>{
      setremainder(remainder.filter((items,itemIndex)=>itemIndex!=index))
    }
  return (
    <div className='container'>
        <h1>Remainder App</h1>
        <div className='input-container'>
            <input type='text' placeholder='Enter the task' value={newremainder} onChange={handleInputChange}/>
            <button className='add-btn' onClick={handleAddRemainder} >Add Remainder</button>
        </div>

        <ul className='remainder-list'>
            {
               remainder.length > 0 ? remainder.map((remainder,index)=>{
                    return <li key={index}>
                        {remainder} 
                    <button className='btn-delete' onClick={()=>handleDelete(index)}>Delete</button>
                    </li>
                  
                }):<p>No Reminders Found</p>

            } 
            
        </ul>
    </div>
  )
}

export default Remainder