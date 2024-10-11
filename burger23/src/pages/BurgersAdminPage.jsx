import BurgerList from "../components/BurgerList";
import AddBurger from "../components/AddBurger";
import EditBurger from "../components/EditBurger";

const BurgersAdminPage = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="lg:w-1/2">
          <AddBurger />
        </div>
        <div className="lg:w-1/2">
          <EditBurger />
        </div>
      </div>
      <div className="mt-6">
        <BurgerList />
      </div>
    </div>
  );
};

export default BurgersAdminPage;
