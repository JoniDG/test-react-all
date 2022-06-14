import React , { createContext, useState } from 'react'

const UserContext = createContext();

const initialUser = {id: 1, name: "Jonathan", favoritePokemons: [1,2]};
const UserProvider = ({children}) => {
    const [user, setUser] = useState(initialUser);

    const login = () => {
        setUser(initialUser);
    }
    const logout = () => {
        setUser(null);
    }

    const data = { user,login,logout };

  return (
    <UserContext.Provider value={data}>
        {children}
    </UserContext.Provider>
  )
}
export { UserProvider, UserContext };
