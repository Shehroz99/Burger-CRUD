import BurgerList from "../components/BurgerList";
import AddBurger from "../components/AddBurger";
import EditBurger from "../components/EditBurger";

const BurgersAdminPage = () => {
    return (
        <>
            <AddBurger />
            <EditBurger />
        
            <BurgerList />
        </>
    )
}

export default BurgersAdminPage;