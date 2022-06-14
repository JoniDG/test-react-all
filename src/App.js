//import { Counter } from "./useState/Counter";
//import { CartProducts } from "./useState/CartProducts";
//import { Lifecycle } from "./useEffect/Lifecycle";
//import { Users } from "./useEffect/Users";
//import { Abuelo } from "./props/Abuelo";

import { UserProvider } from "./contexts/UserProvider";
import { Navbar } from "./useContext/Navbar";
import { Pokelist } from "./useContext/Pokelist";


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
      <UserProvider>
        <Navbar/>
        <Pokelist/>
      </UserProvider>
    </div>
  );
}
export default App;
