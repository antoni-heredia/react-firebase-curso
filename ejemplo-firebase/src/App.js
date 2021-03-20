import React, { useState, useEffect } from 'react'
import { firestore_db } from './firebase-config.js'
function App() {
  const [modoEdicion, setmodoEdicion] = useState(null)
  const [idUsuario, setidUsuario] = useState("")
  const [nombre, setnombre] = useState("")
  const [phone, setphone] = useState("")
  const [usuarios, setusuarios] = useState([])
  const [error, seterror] = useState(null)

  const getUsuarios = async () => {
    const { docs } = await firestore_db.collection("agenda").get()
    const nuevoArray = docs.map(item => ({ id: item.id, ...item.data() }))
    setusuarios(nuevoArray)
  }

  useEffect(() => {

    getUsuarios()
  }, [])

  const addUsuario = async (e) => {
    e.preventDefault()
    if (!nombre.trim()) {
      seterror("El campo nombre esta vacio")
      return
    }
    if (!phone.trim()) {
      seterror("El campo telefono esta vacio")
      return
    }
    try {
      const usuario = {
        nombre: nombre,
        telefono: phone
      }
      const data = await firestore_db.collection("agenda").add(usuario)
      setnombre("")
      setphone("")
      getUsuarios()

      console.log("Tarea añadida")
    } catch (e) {
      console.log(e)
    }
  }

  const delUsuario = async (id) => {
    try {
      await firestore_db.collection("agenda").doc(id).delete()
      getUsuarios()
    } catch (e) {
      console.log(e)
    }
  }

  const btnActualizar = async (id) => {
    try {
      const data = await firestore_db.collection("agenda").doc(id).get()
      const { nombre, telefono } = data.data()
      setnombre(nombre)
      setphone(telefono)
      setidUsuario(id)
      setmodoEdicion(true)
      console.log(idUsuario)
    } catch (error) {
      console.log(error)
    }

  }
  const updateUsuario = async (e) => {
    e.preventDefault()
    if (!nombre.trim()) {
      seterror("El campo nombre esta vacio")
      return
    }
    if (!phone.trim()) {
      seterror("El campo telefono esta vacio")
      return
    }
    const usuario = {
      nombre: nombre,
      telefono: phone
    }

    try {

      const data = await firestore_db.collection("agenda").doc(idUsuario).set(usuario)
      setnombre("")
      setphone("")
      setidUsuario("")
      setmodoEdicion()
      getUsuarios()

      console.log("Tarea añadida")
    } catch (e) {
      console.log(e)
    }
  }
  
  return (
    <div className="container">
      <h1>Ejemplo Firebase</h1>

      <div className="row">

        <div className="col">
          <form onSubmit={modoEdicion ? updateUsuario : addUsuario} action="" method="POST">
            <h2>Formulario de usuarios</h2>

            <div className="form-group">
              <label htmlFor="nombre">Nombre</label>
              <input value={nombre} onChange={(e) => { setnombre(e.target.value) }} type="text" className="form-control" id="nombre" placeholder="Introduce el nombre" />
            </div>
            <div className="form-group">
              <label htmlFor="telefono">Numero</label>
              <input value={phone} onChange={(e) => { setphone(e.target.value) }} type="text" className="form-control" id="telefono" placeholder="Introduce el numero" />
            </div>
            {
              modoEdicion ?
                (
                  <button type="submit" className="btn btn-primary">Actualizar</button>

                )
                :
                (
                  <button type="submit" className="btn btn-primary">Añadir</button>
                )
            }
          </form>
          {
            error == null ?
              (
                <span></span>

              )
              :
              (
                <div >{error}</div>

              )
          }
        </div>
        <div className="col">
          <h2>Agenda de usuarios</h2>
          <ul className="list-group">


            {
              usuarios.length !== 0 ?
                (

                  usuarios.map(item => (
                    <li className="list-group-item" key={item.id}>{item.nombre}---{item.telefono}
                      <button onClick={(id) => { btnActualizar(item.id) }} className="btn btn-info float-right ml-1">Editar</button>
                      <button onClick={(id) => { delUsuario(item.id) }} className="btn btn-danger float-right">X</button>
                    </li>
                  ))
                )
                :
                (
                  <span>No hay usuarios</span>
                )
            }
          </ul>

        </div>

      </div>

    </div>
  );
}

export default App;
