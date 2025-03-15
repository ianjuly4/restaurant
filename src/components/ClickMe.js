import React, {useState} from 'react'

function ClickMe() {
    const [number, setNumber] = useState("")
    const [header, setHeader] = useState(0)

    const handleChange = (e)=>{
        e.preventDefault()
        setNumber(e.target.value)
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        setHeader(number.length + header)
        setNumber("")
    }
    return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
        type="text"
        value={number}
        onChange={handleChange}>
        </input>
        <button>Enter</button>
      </form>
      <h3>{header}</h3>
    </div>
  )
}

export default ClickMe
