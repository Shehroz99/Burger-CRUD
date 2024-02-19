

import BurgerService from "../services/BurgerService";

const BurgerItem = ({id, name, description, price, image }) => {
  const getDomainFromService = BurgerService.domainFromService();

  return (
    /*
    <article className="drop-shadow-2xl rounded-lg col-12 col-sm-6 col-md-4 ">
     
      <div className="shadow-xl">
         <h4 className=" text-lg font-semibold mb-2">Nr.{id} {name}</h4>
      <img
        src={`${getDomainFromService}/images/${image}`}
        alt={name}
        className="w-full h-48 object-fit mb-4 max-w-full max-h-full rounded-md"
      />
      <p className="text-gray-700 mb-4">{description}</p>
      <p className="text-lg text-green-600 font-bold">{price} kr</p>
      </div>
    </article>
    */

    <article class=" col-12 col-sm-6 col-md-4">
   <div class="bg-white font-semibold text-center rounded-3xl border shadow-lg p-10 max-w-xs">
     <img class="mb-3 w-32 h-32 rounded-full shadow-lg mx-auto" src={`${getDomainFromService}/images/${image}`} alt="product designer" />
     <h1 class="text-lg text-gray-700"> {id} {name} </h1>
     <h3 class="text-sm text-gray-400 "> {price}</h3>
     <p class="text-xs text-gray-400 mt-4"> {description} </p>
   </div>
 </article>
  );
};

export default BurgerItem;
