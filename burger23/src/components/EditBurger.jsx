import {useContext, useState} from "react";
import {BurgerContext} from "../contexts/BurgerContext";

const EditBurger = () => {
    const {editBurger, getById} = useContext(BurgerContext);
    const [id, setId] = useState("");
    const [burgerToUpdate, setBurgerToUpdate] = useState({name: "", description: "", price: 0});

    const handleChange = (e) => {
        switch (e.currentTarget.name) {
            case "id":
                setId(e.currentTarget.value);
                break;
            case "name":
                setBurgerToUpdate({...burgerToUpdate, name: e.currentTarget.value});
                break;
            case "description":
                setBurgerToUpdate({...burgerToUpdate, description: e.currentTarget.value});
                break;
            case "price":
                setBurgerToUpdate({...burgerToUpdate, price: e.currentTarget.value});
                break;
            default:
                break;
        }
    }

    const getByIdFromContext = async () => { 
        const burgerFromContext = await getById(id);
        setBurgerToUpdate(burgerFromContext);
        console.log(burgerFromContext);
    }

    const saveChanges = () => { 
        editBurger(burgerToUpdate);
    }

    return (
        <section>
            <h3>Rediger serie</h3>
            <div>
                <label>Angi id</label>
                <input onChange={handleChange} name='id' value={id} type="text" className="border rounded-md"/>
                <input onClick={getByIdFromContext} type="button" value="Hent etter id" className="border rounded-md"/>
            </div>
            <div>
                <label>Name</label>
                <input onChange={handleChange} name='name' value={burgerToUpdate.name} type="text" className="border rounded-md"/>
            </div>
            <div>
                <label>Description</label>
                <input onChange={handleChange} name='description' value={burgerToUpdate.description} type="text" className="border rounded-md"/>
            </div>
            <div>
                <label>Price</label>
                <input onChange={handleChange} name='price' value={burgerToUpdate.price} type="double" className="border rounded-md"/>
            </div>
            <input onClick={saveChanges} type="button" value="Lagre endring" className="border rounded-md"/>
        </section>
    )
}

export default EditBurger;