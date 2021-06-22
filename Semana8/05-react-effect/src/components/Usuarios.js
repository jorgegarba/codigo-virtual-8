import React, { useState } from 'react'

const Usuarios = () => {

  const [usuarios,setUsuarios] = useState([]);

  fetch(`https://reqres.in/api/users`)
    .then((response)=>{
      return response.json();
    }).then(data=>{
      console.log(data);
    })

  return (
    <div>
      <ul>
        {
          usuarios.map((objUsuario)=>{
            return <li>{objUsuario.first_name}</li>
          })
        }
      </ul>
    </div>
  )
}

export default Usuarios
