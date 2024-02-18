
import { useContext} from "react";
import BurgerItem from "./BurgerItem";
import { BurgerContext } from "../contexts/BurgerContext";

const BurgerList = () => {

 const {burgers} = useContext(BurgerContext);


  const getBurgersJSX = () => {
    const burgerJSX = burgers.map((burger, i) => (
      <BurgerItem
        key={i}
        id={burger.id}
        name={burger.name}
        description={burger.description}
        price={burger.price}
        image={burger.image}
      />
    ));
    return burgerJSX;
  };

  return (
       <section className="container">
      <h3 className="text-center">Burgers</h3>
      <div className="row">
        {getBurgersJSX()}
      </div>
    </section>
  );
};

export default BurgerList;
