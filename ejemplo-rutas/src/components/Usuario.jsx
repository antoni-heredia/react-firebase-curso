import React,{useEffect,useState} from 'react'
import axios from 'axios'
import {
    useParams
  } from 'react-router-dom'

const Usuario = () => {
    const [usuario,setUsuario] = useState([])
    const {id} = useParams()
    const obtenerUsuario = async () =>{
        const res = await axios.get(`http://jsonplaceholder.typicode.com/users/${id}`)
        const user = await res.data
        setUsuario(user)
    }
    useEffect(
        ()=>{
            obtenerUsuario()
        }
    )
    return (
        <div>
            <h3>{usuario.name}</h3>
            <p>Username: {usuario.username}</p>
            <p>Email: {usuario.email}</p>
            <p>phone: {usuario.email}</p>
        </div>
    )
}

export default Usuario