import React, {useState} from 'react'


function FormHandling() {

    function handleSubmit(event){
        event.preventDefault();
        alert(`Hej ${name}`)
    }

    function handleChange(event){
        setName(event.target.value)
    }

    const [name, setName] = useState('')

  return (
    <form onSubmit={handleSubmit}>
        <label>Name:
            <input type="text" value={name} onChange={handleChange}/>
        </label>
        <button type="submit">Submit</button>
        </form>
  )
}

export default FormHandling
