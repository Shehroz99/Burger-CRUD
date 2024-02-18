/*
import Burger from "../interfaces/IBurger";


interface BurgerItemProps {
  burger: Burger;
}
*/

const BurgerItem = ({ name, description, price, image }) => {
  return (
    <section className="bg-white rounded-lg overflow-hidden shadow-lg m-4 p-6 md:w-1/2 lg:w-1/3 xl:w-1/4">
      <h4 className="text-lg font-semibold mb-2">{name}</h4>
      <img
        src={`http://localhost:5181/images/${image}`}
        alt={name}
        className="w-full h-48 object-cover mb-4 max-w-full"
      />
      <p className="text-gray-700 mb-4">{description}</p>
      <p className="text-lg text-green-600 font-bold">{price} kr</p>
    </section>
  );
};

export default BurgerItem;
