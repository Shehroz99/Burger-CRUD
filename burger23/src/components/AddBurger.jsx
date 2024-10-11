import { useState } from "react";
import BurgerService from "../services/BurgerService";

const AddBurger = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState(null);

  const handleChange = (e) => {
    switch (e.currentTarget.name) {
      case "name":
        setName(e.currentTarget.value);
        break;
      case "description":
        setDescription(e.currentTarget.value);
        break;
      case "price":
        setPrice(e.currentTarget.value);
        break;
      case "image":
        setImage(e.currentTarget.files[0]);
        break;
      default:
        break;
    }
  };

  const saveBurger = () => {
    const newBurger = {
      name: name,
      description: description,
      price: price,
      image: image.name,
    };
    BurgerService.postBurger(newBurger, image);
  };

  return (
    <section className="flex flex-col bg-white font-semibold text-center rounded-3xl border shadow-lg p-8 max-w-md mx-auto mt-10 space-y-6">
      <h3 className="text-lg font-bold text-gray-800">Legg til ny burger</h3>
      <div className="space-y-1">
        <label className="text-sm text-gray-700">Navn</label>
        <input
          name="name"
          onChange={handleChange}
          type="text"
          className="peer w-full rounded-lg border border-gray-300 px-4 py-2 text-sm text-gray-800 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
        />
      </div>
      <div className="space-y-1">
        <label className="text-sm text-gray-700">Beskrivelse</label>
        <input
          name="description"
          onChange={handleChange}
          type="text"
          className="peer w-full rounded-lg border border-gray-300 px-4 py-2 text-sm text-gray-800 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
        />
      </div>
      <div className="space-y-1">
        <label className="text-sm text-gray-700">Pris</label>
        <input
          name="price"
          onChange={handleChange}
          type="number"
          step="0.01"
          className="peer w-full rounded-lg border border-gray-300 px-4 py-2 text-sm text-gray-800 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
        />
      </div>
      <div className="space-y-1">
        <label className="text-sm text-gray-700">Bilde</label>
        <input
          name="image"
          onChange={handleChange}
          type="file"
          className="peer w-full rounded-lg border border-gray-300 px-4 py-2 text-sm text-gray-800 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
        />
      </div>
      <input
        onClick={saveBurger}
        type="button"
        value="Lagre Burger"
        className="cursor-pointer w-full rounded-lg bg-blue-700 text-white py-3 text-sm font-semibold hover:bg-blue-600 transition-colors"
      />
    </section>
  );
};

export default AddBurger;
