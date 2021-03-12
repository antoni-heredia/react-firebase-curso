import React,{useState} from 'react'
import {auth} from '../firebase-config.js'
const Login = () => {
    const [email,setEmail] = useState("")
    const [pass,setPass] = useState("")
    const RegistrarUsuario = (e) =>{
        e.preventDefault()
        try{
            auth.createUserWithEmailAndPassword(email,pass)
            alert("Usuario registrado")
        }catch(er){
            console.log(er)
        }
    }
    return (

        <div className="row mt-5">
            <div className="col"></div>
            <div className="col">
                <form onSubmit={RegistrarUsuario} className="form-group">
                    <input
                        onChange={(e) =>{setEmail(e.target.value)}}
                        className="form-control"
                        placeholder="Introduce el email"
                        type="text"
                    />
                    <input
                        onChange={(e) =>{setPass(e.target.value)}}

                        className="form-control mt-3"
                        placeholder="Introduce la contraseña"
                        type="password"
                    />          
                    <input
                        
                        className="btn btn-dark btn-block mt-3"
                        value="Registrar usuario"
                        type="submit"
                    />         
                </form>
            </div>
            <div className="col"></div>
        </div>

    )
}
export default Login