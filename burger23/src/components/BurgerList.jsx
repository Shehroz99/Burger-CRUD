// import BurgerService from "../services/BurgerService";
import { useContext } from "react";
import BurgerItem from "./BurgerItem";
import { BurgerContext } from "../contexts/BurgerContext";

const BurgerList = () => {
  const { burgers } = useContext(BurgerContext);

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
    <section className="row g-2">
      <h3 className="text-center m-3 p-3 font-sans text-3xl ">Burgers</h3>
      {getBurgersJSX()}
    </section>
  );
};

export default BurgerList;
