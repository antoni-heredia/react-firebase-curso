import React, { useState } from 'react'

const Formulario = () => {

    const [nombre, setNombre] = useState("")
    const [edad, setEdad] = useState("")

    return (
        <div className="container mt-5">
            <form className="form-group">
                <input
                    placeholder="Nombre"
                    className="form-control mb-3"
                    type="text"
                    onChange={
                        (e) => {setNombre(e.target.value)}
                    }
                    name=""
                    id=""
                />
                <input
                    placeholder="Edad"
                    className="form-control mb-3"
                    type="text"
                    onChange={
                        (e) => {setEdad(e.target.value)}
                    }
                    name=""
                    id=""
                />
                <input className="btn btn-info btn-block mb-3" type="submit" value="Actualizar" />
            </form>
        </div>
    )
}
export default Formulario