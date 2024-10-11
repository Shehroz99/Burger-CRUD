import { useState, useContext } from "react";
import { BurgerContext } from "../contexts/BurgerContext";

const DeleteBurger = () => {
  const { deleteBurger } = useContext(BurgerContext);

  const [id, setId] = useState("1");

  const handleChange = (e) => {
    setId(e.currentTarget.value);
  };

  const handleClick = async () => {
    const wentWell = await deleteBurger(id);
    if (wentWell === false) {
      console.log(wentWell);
      alert("Burger not deleted");
    } else {
      console.log(wentWell);
      alert("Burger deleted");
      window.location.reload();
    }
  };

  return (
    <section className="flex flex-col bg-white font-semibold text-center rounded-3xl border shadow-lg p-8 max-w-md mx-auto mt-10 space-y-6">
      <h3 className="text-lg font-bold text-gray-800">Slett en serie</h3>
      <div className="space-y-1">
        <label className="text-sm text-gray-700">
          Id til serie å slette: {id}
        </label>
        <input
          onChange={handleChange}
          name="id"
          value={id}
          type="text"
          className="peer w-full rounded-lg border border-gray-300 px-4 py-2 text-sm text-gray-800 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
        />
      </div>
      <input
        onClick={handleClick}
        type="button"
        value="Slett serie"
        className="cursor-pointer w-full rounded-lg bg-red-600 text-white py-3 text-sm font-semibold hover:bg-red-500 transition-colors"
      />
    </section>
  );
};

export default DeleteBurger;
