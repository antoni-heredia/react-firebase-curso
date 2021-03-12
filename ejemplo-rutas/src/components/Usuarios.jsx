import React,{useEffect,useState} from 'react'
import axios from 'axios'
import {
    Link
  } from 'react-router-dom'


const Usuarios = () => {
    const [usuarios,setUsuarios] = useState([])
    const obtenerUsuarios = async() => {
        const res = await axios.get('http://jsonplaceholder.typicode.com/users')
        const users = await res.data
        setUsuarios(users)
    }
    useEffect(
        () =>{
            obtenerUsuarios()
        }
    )
    return (
        <div>
            <h2>Listas de usuarios</h2>
            {
                usuarios.map( (item)=> (
                    <div>
                        <Link key={item.id} to={`/usuario/${item.id}`}>{item.name}</Link>
                    </div>
                    ))
            }
        </div>
    )
}
export default Usuarios