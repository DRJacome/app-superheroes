import React from 'react'

export const VistaLogin = ({ history }) => {

  const gestionarLogin = () => {
    //history.push('/')
    history.replace('/')
  }
  return (
    <div className="container mt-5 animate__animated animate__fadeIn">
      <h1>Pulsa en este botón para comenzar</h1>
      <hr />
      <button className="btn btn-primary" onClick={gestionarLogin}>Acceder</button>
    </div>
  )
}