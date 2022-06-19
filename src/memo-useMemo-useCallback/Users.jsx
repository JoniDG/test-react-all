import React, { useState, useEffect, useMemo, useCallback  } from 'react'
import { List } from './List';

const initialUsers = [
    {id: 1, name: 'John'},
    {id: 2, name: 'Sara'},
]

export const Users = () => {
    const [users, setUsers] = useState(initialUsers);
    const [text, setText] = useState("");
    const [search, setSearch] = useState("");

    const handleAddUser = () => {
        const newUser = {id: Date.now() , name: text};
        setUsers([...users, newUser]);
    }
    
    const handleSearch = (e) => {
        setSearch(text);
    }
    
   /*  Cada vez que se ocurre una renderizacion de users el handleDelete se vuelve a crear por lo tanto 
    List y Users se vuelven a renderizar ya que notan un cambio en una de sus props (se guarda en otra direccion de mem) aunque sea la misma (handleDelete) 
    UseCallback recibe la definicion de la funcion a memorizar 
    */
    const handleDelete = useCallback((id) => {  
        setUsers(users.filter(user => user.id !== id));
    },[users]);

    /*El use memo recibe una funcion que retorna un valor y ese valor es el proceso que queremos memorizar*/
    const filteredUsers = useMemo( ()=> users.filter(user => {
        /* console.log("filter process") */
        return user.name.toLowerCase().includes(search.toLowerCase())
    }), [users, search])
    
    const printUsers = useCallback(() => {
        console.log("Changed users", users);    //Al manipular un estado tenemos que agregarla como dependencia
    }, [users])

    useEffect(() => {
        //console.log("Users render");
    })

    useEffect(() => {
        printUsers();
    }, [users, printUsers])
    
  return (
    <div>
        <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
        />
        <button onClick={handleAddUser}>Add User</button>
        <button onClick={handleSearch}>Search User</button>
        <List users={filteredUsers} handleDelete={handleDelete}/>
    </div>
  )
}
