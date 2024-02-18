import BurgerService from "../services/BurgerService";
import { useEffect, useState } from "react";
import BurgerItem from "./BurgerItem";

const BurgerList = () => {
  const [burgers, setBurgers] = useState([{ name: "The Burger" }]);

  useEffect(() => {
    getBurgersFromService();
  }, []);

  const getBurgersFromService = async () => {
    setBurgers([]);
    const burgersFromService = await BurgerService.getAll();
    setBurgers(burgersFromService);
  };

  const getBurgersJSX = () => {
    const burgerJSX = burgers.map((burger, i) => (
      <BurgerItem
        key={i}
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
