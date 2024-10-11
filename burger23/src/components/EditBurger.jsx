import { useContext, useState } from "react";
import { BurgerContext } from "../contexts/BurgerContext";

const EditBurger = () => {
  const { editBurger, getById } = useContext(BurgerContext);
  const [id, setId] = useState("");
  const [burgerToUpdate, setBurgerToUpdate] = useState({
    name: "",
    description: "",
    price: 0,
  });

  const handleChange = (e) => {
    switch (e.currentTarget.name) {
      case "id":
        setId(e.currentTarget.value);
        break;
      case "name":
        setBurgerToUpdate({ ...burgerToUpdate, name: e.currentTarget.value });
        break;
      case "description":
        setBurgerToUpdate({
          ...burgerToUpdate,
          description: e.currentTarget.value,
        });
        break;
      case "price":
        setBurgerToUpdate({ ...burgerToUpdate, price: e.currentTarget.value });
        break;
      default:
        break;
    }
  };

  const getByIdFromContext = async () => {
    const burgerFromContext = await getById(id);
    setBurgerToUpdate(burgerFromContext);
    console.log(burgerFromContext);
  };

  const saveChanges = () => {
    editBurger(burgerToUpdate);
  };

  return (
    <section className="flex flex-col bg-white font-semibold text-center rounded-3xl border shadow-lg p-8 max-w-md mx-auto mt-10 space-y-6">
      <h3 className="text-lg font-bold text-gray-800">Rediger serie</h3>
      <div className="space-y-1">
        <label className="text-sm text-gray-700">Angi id</label>
        <input
          onChange={handleChange}
          name="id"
          value={id}
          type="text"
          className="peer w-full rounded-lg border border-gray-300 px-4 py-2 text-sm text-gray-800 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
        />
        <input
          onClick={getByIdFromContext}
          type="button"
          value="Hent etter id"
          className="cursor-pointer w-full rounded-lg bg-blue-700 text-white py-3 text-sm font-semibold hover:bg-blue-600 transition-colors"
        />
      </div>
      <div className="space-y-1">
        <label className="text-sm text-gray-700">Navn</label>
        <input
          onChange={handleChange}
          name="name"
          value={burgerToUpdate.name}
          type="text"
          className="peer w-full rounded-lg border border-gray-300 px-4 py-2 text-sm text-gray-800 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
        />
      </div>
      <div className="space-y-1">
        <label className="text-sm text-gray-700">Beskrivelse</label>
        <input
          onChange={handleChange}
          name="description"
          value={burgerToUpdate.description}
          type="text"
          className="peer w-full rounded-lg border border-gray-300 px-4 py-2 text-sm text-gray-800 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
        />
      </div>
      <div className="space-y-1">
        <label className="text-sm text-gray-700">Pris</label>
        <input
          onChange={handleChange}
          name="price"
          value={burgerToUpdate.price}
          type="number"
          step="0.01"
          className="peer w-full rounded-lg border border-gray-300 px-4 py-2 text-sm text-gray-800 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
        />
      </div>
      <input
        onClick={saveChanges}
        type="button"
        value="Lagre endring"
        className="cursor-pointer w-full rounded-lg bg-blue-700 text-white py-3 text-sm font-semibold hover:bg-blue-600 transition-colors"
      />
    </section>
  );
};

export default EditBurger;
