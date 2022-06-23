import React from 'react'

const saludos = (props) => {
    const {mensaje, nombre, ciudad} = props;
  return (
    <div><h1>{mensaje},{nombre}, {ciudad} </h1></div>
  )
}

export default saludos