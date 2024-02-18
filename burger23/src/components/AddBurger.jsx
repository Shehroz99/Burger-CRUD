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
    console.log(image);
  };

  return (
    <section>
      <h3>Legg til ny serie</h3>
      <div>
        <label>Name</label>
        <input
          name="name"
          onChange={handleChange}
          type="text"
          className="border rounded-md"
        />
      </div>
      <div>
        <label>Description</label>
        <input
          name="description"
          onChange={handleChange}
          type="text"
          className="border rounded-md"
        />
      </div>
      <div>
        <label>price</label>
        <input
          name="price"
          onChange={handleChange}
          type="double"
          className="border rounded-md"
        />
      </div>
      <div>
        <label>Bilde</label>
        <input
          name="image"
          onChange={handleChange}
          type="file"
          className="border rounded-md"
        />
      </div>
      <input
        onClick={saveBurger}
        type="button"
        value="Lagre serie"
        className="border rounded-md"
      />
    </section>
  );
};

export default AddBurger;
