/* useState
import { Counter } from "./useState/Counter";
import { CartProducts } from "./useState/CartProducts"; 
*/

import { Users } from "./memo-useMemo-useCallback/Users";

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
    <Users/>
    </div>
  );
}
export default App;
