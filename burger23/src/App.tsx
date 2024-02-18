import "./App.css";
import BurgerList from "./components/BurgerList";
import AddBurger from "./components/AddBurger";
import EditBurger from "./components/EditBurger";
import "bootstrap/dist/css/bootstrap.min.css";
import { BurgerProvider } from "./contexts/BurgerContext";

function App() {
  return (
    <>
    <BurgerProvider>
      <EditBurger />
      <AddBurger />
      <BurgerList />
    </BurgerProvider>
    </>
  );
}

export default App;
