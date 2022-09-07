import { useState } from "react";



const Form =(props) => {

    const [input, setInput] = useState("")
  
    const handleSubmit = (e)=>{
      e.preventDefault()
      props.addTodo(input)
      setInput("")
    }
    return(
        <form onSubmit={handleSubmit}>
            <input type='text' placeholder="Enter List..." className="taskinput"
            value={input}
            required
            onChange={(e)=>setInput(e.target.value)}
            >
            </input>
            <button className="btn" type="submit">Add</button>
        </form>
    )
}

export default Form;