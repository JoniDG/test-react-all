import React, { memo, useEffect } from 'react'
import { User } from './User'

export const List = memo(({users , handleDelete}) => {
    useEffect(() => {
        //console.log("List render");
    })
  return (
    <ul>
        {
            users.map(user => (
                <User key={user.id} user={user} handleDelete={handleDelete}/>
            ))
        }
    </ul>
  )
})
