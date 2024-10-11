import BurgerService from "../services/BurgerService";

const BurgerItem = ({ id, name, description, price, image }) => {
  const getDomainFromService = BurgerService.domainFromService();

  return (
    <article className=" col-12 col-sm-6 col-md-4">
      <div className="bg-white font-semibold text-center rounded-3xl border shadow-lg p-10 max-w-xs">
        <img
          className="mb-3 w-32 h-32 rounded-full shadow-lg mx-auto"
          src={`${getDomainFromService}/images/${image}`}
          alt="product designer"
        />
        <h1 className="text-lg text-gray-700">
          {" "}
          ID:{id} {name}{" "}
        </h1>
        <h3 className="text-sm text-gray-400 "> {price}</h3>
        <p className="text-xs text-gray-400 mt-4"> {description} </p>
      </div>
    </article>
  );
};

export default BurgerItem;
