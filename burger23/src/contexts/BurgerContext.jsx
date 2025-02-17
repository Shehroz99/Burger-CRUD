import { createContext, useState, useEffect } from "react";
import BurgerService from "../services/BurgerService";

export const BurgerContext = createContext(null);

export const BurgerProvider = ({ children }) => {
  const [burgers, setBurgers] = useState([]);

  useEffect(() => {
    getBurgersFromService();
  }, []);

  const getBurgersFromService = async () => {
    setBurgers([]);
    const burgersFromService = await BurgerService.getAll();
    setBurgers(burgersFromService);
  };

  const getById = async (id) => {
    const burgerToUpdate = await BurgerService.getById(id);
    return burgerToUpdate;
  };

  const editBurger = async (burgerToUpdate) => {
    await BurgerService.putBurger(burgerToUpdate);
    getBurgersFromService();
  };

  const deleteBurger = async (id) => {
    const wentWell = await BurgerService.deleteBurger(id);
    return wentWell;
  };

  return (
    <BurgerContext.Provider
      value={{ burgers, getById, editBurger, deleteBurger }}
    >
      {children}
    </BurgerContext.Provider>
  );
};
