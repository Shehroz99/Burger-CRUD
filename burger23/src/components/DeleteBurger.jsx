import {useState, useContext} from "react";
import { BurgerContext } from "../contexts/BurgerContext";

const DeleteBurger = () => {
    const {deleteBurger} = useContext(BurgerContext);

    const [id, setId] = useState("1");
    const [deleteStatus, setDeleteStatus] = useState("...");

    const handleChange = (e) => {
        setId(e.currentTarget.value);
    }

    const handleClick = async () => {
        const wentWell = await deleteBurger(id);
        if (!wentWell) {
                 console.log(wentWell)
            setDeleteStatus("Burger not deleted");
        } else {
                console.log(wentWell)
            setDeleteStatus("Burger deleted");
        }
    }

   
        return (
        <section className='mb-3'>
            <h3>Slett en serie</h3>
            <div>
                <label className="border rounded-md">Id til serie å slette {id}</label>
                <input onChange={handleChange} name='id' value={id} type='text' className="border rounded-md"/>
                <span>{deleteStatus}</span>
            </div>
            <input onClick={handleClick} type='button' value="Slett serie" className="border rounded-md"/>
        </section>
    )
    
 }
 
 export default DeleteBurger;