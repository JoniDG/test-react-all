import React, { createContext, useState } from 'react'

const UserContext = createContext();	//Si entre los parentesis en esta linea coloco un "valor inicial" entonces ese valor se va a mostrar EN CUALQUIER CONSUMIDOR SI NO TIENE ACCESO DESDE PROVIDER

const initialUser = { id: 1, name: "Jonathan", favoritePokemons: [] };

const UserProvider = ({ children }) => {	//Children tiene la informacion de Navbar, Pokelist, etc
	const [user, setUser] = useState(initialUser);

	const login = () => {
		setUser(initialUser);
	}
	const logout = () => {
		setUser(null);
	}

	const toggleFavoritePoke = (pokeId) => {
		setUser({
			...user,
			favoritePokemons: user?.favoritePokemons?.includes(pokeId) //Recorro lo que tenga favoritePokemons 
			? user.favoritePokemons.filter(id => id !== pokeId) //Si el id del pokemon que estoy recibiendo esta dentro de ese array entonces lo elimino
			:[...user.favoritePokemons, pokeId]	//Si el id del pokemon que estoy recibiendo NO esta dentro de ese array entonces lo agrego
		})
	} 

	const data = { user, login, logout, toggleFavoritePoke };

	return (
		<UserContext.Provider value={data}>
			{children}
		</UserContext.Provider>
	)
}
export { UserProvider, UserContext };
