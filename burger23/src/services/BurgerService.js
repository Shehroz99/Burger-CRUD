import axios from "axios";

const BurgerService = (() => {
  const localHost = "http://localhost:5181";
  const burgerController = `${localHost}/api/Burgers`;
  const imageUploadController = `${localHost}/api/ImageUpload`;

  const getAll = async () => {
    try {
      const result = await axios.get(burgerController);
      return result.data;
    } catch (err) {
      console.log(err);
      return false; // catch bør returnere en verdi og/eller melding som kan tas imot av komponenten/der hvor Service-funksjonene brukes fra, for å styre hva som skal videre; eksempelvis at man trenger å vise en tekst til bruker om at det gikk bra/dårlig å utføre handlingen.
    }
  };

  const getById = async (id) => {
    try {
      const result = await axios.get(`${burgerController}/${id}`);
      return result.data;
    } catch (err) {
      console.log(err);
      return false;
    }
  };

  const deleteById = async (id) => {
    try {
      const result = await axios.delete(`${burgerController}/${id}`);
      return result.data;
    } catch (err) {
      console.log(err);
      return false;
    }
  };

  const putBurger = async (burgerToUpdate) => {
    try {
      // tar imot et helt oppdatert objekt av det som skal oppdateres
      const result = await axios.put(burgerController, burgerToUpdate);
      return result.data;
    } catch (err) {
      console.log(err);
      return false;
    }
  };

const postBurger = async (newBurger, image) => {
      try{

        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const result = await axios.post(burgerController, newBurger);

        const formData = new FormData();
        formData.append("formFile", image); // formFile er samme navn som i UploadController-metoden

        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const uploadResult = await axios({
            url: imageUploadController,
            method: "POST",
            data: formData,
            headers: {"Content-Type": "multipart/form-data"}
        });

        // HUSK DENNE!! Hvis ikke hopes det opp med bildeobjekter i formData og det slutter å fungere riktig
        formData.delete("formFile");
        
          window.location.reload();
          alert("Burger was successfully added!")
        
      } catch (err) {
        console.log(err);
        return false;
      }
    }

  const domainFromService = () => {
    return localHost;
  }

  return {
    getAll,
    getById,
    deleteById,
    putBurger,
    postBurger,
    domainFromService
  };
})();

export default BurgerService;
