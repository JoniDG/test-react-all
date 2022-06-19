import React, { memo, useEffect } from 'react'

export const User = memo(({user, handleDelete}) => {

    useEffect(() => {
        //console.log("User render "+ user.name);
    })

  return (
    <li>
        {user.name}
        <button onClick={() => handleDelete(user.id)}>Delete</button>
    </li>
  )
})
