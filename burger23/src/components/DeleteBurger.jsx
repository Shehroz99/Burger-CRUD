import {useState, useContext} from "react";
import { BurgerContext } from "../contexts/BurgerContext";

const DeleteBurger = () => {
    const {deleteBurger} = useContext(BurgerContext);

    const [id, setId] = useState("1");

    const handleChange = (e) => {
        setId(e.currentTarget.value);
    }

    const handleClick = async () => {
        const wentWell = await deleteBurger(id);
        if (wentWell) {
                 console.log(wentWell)
            alert("Burger not deleted");
        } else {
                console.log(wentWell)
            alert("Burger deleted");
            window.location.reload();
        }
    }

   
        return (
        <section className='flex flex-col bg-white font-semibold text-center rounded-3xl border shadow-lg p-10 max-w-xs'>
            <h3>Slett en serie</h3>
                <div>
                    <label className="peer h-full w-full rounded-md  px-3 py-3 font-sans text-sm font-normal outline outline-0 ">Id til serie å slette {id}</label>
                    <input onChange={handleChange} name='id' value={id} type='text' className="peer h-full w-full rounded-md border  px-3 py-3 font-sans text-sm font-normal outline outline-0"/>
                </div>
            <input onClick={handleClick} type='button' value="Slett serie" className="peer h-full w-full rounded-md border  px-3 py-3 font-sans text-sm font-normal outline outline-0  bg-blue-700 text-white"/>
        </section>
    )
    
 }
 
 export default DeleteBurger;