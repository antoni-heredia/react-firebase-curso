import React, { useState } from 'react'
import uniqid from 'uniqid'
function ListadoNombres() {
    const [nombre, setNombre] = useState("")
    const [listaNombres, setListaNombres] = useState([])
    const [modoEdicion,setModoEdicion] = useState(false)
    const [id,setId] = useState("")
    const [error,setError] = useState(null)

    const addNombre = (e) => {
        e.preventDefault()
        if(!nombre.trim()){
            setError("El campo nombre esta vacio")
            return
        }
        let nuevoNombre = {
            id: uniqid(),
            titulonombre: nombre
        }
        setListaNombres([...listaNombres, nuevoNombre])
        setNombre("")
        setError(null)
    }
    const deleteNombre = (id) =>{
        const nuevoArray = listaNombres.filter(item => item.id != id)
        setListaNombres(nuevoArray)   
    }
    const editar = (item)=>{
        setModoEdicion(true)
        setNombre(item.titulonombre)
        setId(item.id)
    }
    const editarNombre = (e) =>{
        e.preventDefault()
        let nuevoArray = listaNombres.map( item => item.id === id ? {id:id,titulonombre:nombre}:item)
        setListaNombres(nuevoArray)
        setNombre("")
        setModoEdicion(false)
    }
    return (
        <div>
            <h2>Apliación CRUD Basica</h2>
            <div className="row">
                <div className="col">
                    <h3>Listado Nombre</h3>
                    <ul className="list-group">

                        {
                            listaNombres.map(item =>
                                <li key={item.id} className="list-group-item">
                                    {item.titulonombre}
                                    <button onClick={() =>(deleteNombre(item.id))} className="btn btn-danger float-right" >Borrar</button>
                                    <button onClick={() =>(editar(item))} className="btn btn-success float-right" >Editar</button>

                                </li>

                            )
                        }
                    </ul>
                </div>
                <div className="col">
                    <h3>Formulario Nombres</h3>
                    <form onSubmit={ modoEdicion ? editarNombre: addNombre} className="form-group">
                        <input
                            onChange={
                                (e) => { setNombre(e.target.value) }
                            }
                            className="form-control"
                            type="text"
                            placeholder="Introduce el nombre"
                            value={nombre}
                        ></input>
                        <input
                            className="btn-info btn-block mt-2"
                            type="submit"
                            value={modoEdicion ? "Editar nombre" :"Registrar nombre"} ></input>
                    </form>
                    {
                        error != null ? (
                            <div className="alert alert-danger">{error}</div>
                        ):(
                            <div></div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default ListadoNombres
