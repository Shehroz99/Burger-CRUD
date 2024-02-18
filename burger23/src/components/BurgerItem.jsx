

import BurgerService from "../services/BurgerService";

const BurgerItem = ({id, name, description, price, image }) => {
  const getDomainFromService = BurgerService.domainFromService();

  return (
    <section className="bg-white rounded-lg overflow-hidden shadow-lg m-4 p-6 md:w-1/2 lg:w-1/3 xl:w-1/4">
      <h4 className="text-lg font-semibold mb-2">Nr.{id} {name}</h4>
      <img
        src={`${getDomainFromService}/images/${image}`}
        alt={name}
        className="w-full h-48 object-fit mb-4 max-w-full"
      />
      <p className="text-gray-700 mb-4">{description}</p>
      <p className="text-lg text-green-600 font-bold">{price} kr</p>
    </section>
  );
};

export default BurgerItem;
