
import './style.css';
import React, {useState} from "react";



export default function  Loguin (){
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

const handleSubmit =(e) => {
    e.preventDefault();
    
};
const dados=(e)=>{}


return(
   <div id="login">
<h1 className="title">Login do Sistema</h1>
    <form className="form" onSubmit={dados}>
        <div className="field">
            <label htmlFor="email">Email</label>
            <input 
            type="email" 
            name="email"    
            id="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            
            />

        </div>

        <div className="field">
            <label htmlFor="password">Senha</label>
            <input 
            type="password" 
            name="password" 
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            />
        

        </div>
        <div className="action">
            <button type="submit"onClick={handleSubmit}>Entrar</button>
        </div>
    </form>
   </div>
)
} 
    
      
    


