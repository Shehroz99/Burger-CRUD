import { useState} from "react";
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
    <section className="flex flex-col bg-white font-semibold text-center rounded-3xl border shadow-lg p-10 max-w-xs">
      <h3>Legg til ny burger</h3>
        <div>
          <label>Name</label>
          <input
            name="name"
            onChange={handleChange}
            type="text"
            className="peer h-full w-full rounded-md border  px-3 py-3 font-sans text-sm font-normal outline outline-0"
          />
        </div>
        <div>
          <label>Description</label>
          <input
            name="description"
            onChange={handleChange}
            type="text"
            className="peer h-full w-full rounded-md border  px-3 py-3 font-sans text-sm font-normal outline outline-0"
          />
        </div>
        <div>
          <label>price</label>
          <input
            name="price"
            onChange={handleChange}
            type="double"
            className="peer h-full w-full rounded-md border  px-3 py-3 font-sans text-sm font-normal outline outline-0"
          />
        </div>
        <div>
          <label>Bilde</label>
          <input
            name="image"
            onChange={handleChange}
            type="file"
            className="peer h-full w-full rounded-md border  px-3 py-3 font-sans text-sm font-normal outline outline-0"
          />
        </div>
        <input
          onClick={saveBurger}
          type="button"
          value="Lagre Burger"
          className="peer h-full w-full rounded-md border  px-3 py-3 font-sans text-sm font-normal outline outline-0 bg-blue-700 text-white"
        />
    </section>
  );
};

export default AddBurger;
