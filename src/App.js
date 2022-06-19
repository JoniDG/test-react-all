/* useState
import { Counter } from "./useState/Counter";
import { CartProducts } from "./useState/CartProducts"; 
*/

/* useEffect
import { Lifecycle } from "./useEffect/Lifecycle";
import { Users } from "./useEffect/Users"; 
*/

/* Props
import { Abuelo } from "./props/Abuelo"; 
*/

/* childrenProp
import { Bisnieto } from "./useContext/childrenProp/Bisnieto";
import { Hijo } from "./useContext/childrenProp/Hijo";
import { Padre } from "./useContext/childrenProp/Padre";
import { Provider } from "./useContext/childrenProp/Provider";
*/

/* useContext
import { PokesProvider } from "./useContext/contexts/PokesProvider";
import { UserProvider } from "./useContext/contexts/UserProvider";
import { Navbar } from "./useContext/Navbar";
import { Pokelist } from "./useContext/Pokelist";
*/

/* CustomHooks
import { Counter } from "./customHooks/Counter";
import { Tasks } from "./customHooks/Tasks";
import { MouseApp } from "./customHooks/MouseApp"; 
*/

/* memo-useMemo-useCallback
import { Users } from "./memo-useMemo-useCallback/Users"; 
*/

/* useRef
import { CopyApp } from "./useRef/CopyApp";
import { FocusApp } from "./useRef/FocusApp";
import { ScrollAnimation } from "./useRef/ScrollAnimation";
 
import { RenderApp } from "./useRef/RenderApp";
import { Loading } from "./useRef/Loading";
*/


function App() {
	return (
		<div>
			{/* UseState 
      		<Counter/>
      		<CartProducts/> 
      		*/}

			{/* UseEffect
			<Lifecycle/> 
			<Users/>
			*/}


			{/* Props
			<Abuelo/>
			*/}

			{/* childrenProp
			Padre tiene la propiedad CHILDREN con los componentes Hijo y Bisnieto pero ojo ¡NIETO NO!
			Solo los componentes QUE CONSUMEN EL VALOR DEL CONTEXTO SE VAN A RE RENDERIZAR
				<Padre>
				<Provider>
					<Hijo/>
					<Bisnieto/>
				</Provider>   
				</Padre>
			*/}
			{/* useContext
			Al actualizar un estado creado en el component APP se renderizan todos los componentes "hijos" que esten metidos en APP 
			es por eso que creamos el component UserProvider.
			Si usamos UserContext.Provider value={data} CUANDO DATA CAMBIE todo lo que esta por debajo del "arbol" se va a volver a renderizar (Navbar,Pokelist,Pokes)
			<UserProvider>
				<PokesProvider>
				<Navbar/>
				<Pokelist/>
				</PokesProvider>
			</UserProvider>
			*/}

			{/* customHooks
			<Counter/> 
			<Tasks/>
			<MouseApp/>
			*/}

			{/* memo-useMemo-useCallback
			<Users/> 
			*/}

			{/* useRef
			<FocusApp/> 
			<CopyApp/>
			<ScrollAnimation/>
			*/}
			
			{/* useRef referencias mutables
			<RenderApp/> 
			<Loading/>
			*/}

			

		</div>
	);
}
export default App;
