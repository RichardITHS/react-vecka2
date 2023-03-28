import React, {useState} from 'react'

function FormHandlingValidation() {
    //Skapar förutsättningar för våra states, default och inkommande nytt värde
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});


    //Skapar en function dels för att undvika att sidan laddas om efter submit men
    //också en error hantering för att undvika att ett värde i ett fält inte skrivits in
    const handleSubmit = (e) => {
        //Tar in eventet och vid förändring så ska sidan ej laddas om med preventDefault()
        e.preventDefault();
        if(!name) {
            setErrors({name: 'Please fill in your name'});
        }
        if(!email) {
            setErrors({email: 'Please fill in your email adress'})
        }
        if(!password) {
            setErrors({password: 'You have not filled in your password, please do'})
            return;
        }
        console.log('Form is submitted');

    }


  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
                {errors.name && <span>{errors.name}</span>}
            </div>
            <div>
                <label>Email</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                {errors.email && <span>{errors.email}</span>}
            </div>
            <div>
                <label>Password</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                {errors.password && <span>{errors.password}</span>}
            </div>
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default FormHandlingValidation
