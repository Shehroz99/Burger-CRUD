import axios from "axios";

const BurgerService = (() => {
  const burgerController = "http://localhost:5181/api/Burgers";
  const imageUploadController = "http://localhost:5181/api/ImageUpload";

  const getAll = async () => {
    try {
      const result = await axios.get(burgerController);
      return result.data;
    } catch (err) {
      return false; // catch bør returnere en verdi og/eller melding som kan tas imot av komponenten/der hvor Service-funksjonene brukes fra, for å styre hva som skal videre; eksempelvis at man trenger å vise en tekst til bruker om at det gikk bra/dårlig å utføre handlingen.
    }
  };

  const getById = async (id) => {
    try {
      const result = await axios.get(`${burgerController}/${id}`);
      return result.data;
    } catch (err) {
      return false;
    }
  };

  const deleteById = async (id) => {
    try {
      const result = await axios.delete(`${burgerController}/${id}`);
      return result.data;
    } catch (err) {
      return false;
    }
  };

  const putBurger = async (updatedBurger) => {
    try {
      // tar imot et helt oppdatert objekt av det som skal oppdateres
      const result = await axios.put(burgerController, updatedBurger);
      return result.data;
    } catch (err) {
      return false;
    }
  };

  const postBurger = async (newBurger, image) => {
    try {
      if (image.type !== "image/jpeg" && image.type !== "image/png") {
        return alert("The uploaded picture has to be either a .jpg or .png file.")
      }
      else
      {

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const result = await axios.post(burgerController, newBurger);

      const formData = new FormData();
      formData.append("formFile", image);

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const uploadResult = await axios({
        url: imageUploadController,
        method: "POST",
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
      });

      formData.delete("formFile");
    }

    } catch (err) {
      alert("Noe gikk galt med å lagre burgeren");
      return false;
    }
  };

  return {
    getAll,
    getById,
    deleteById,
    putBurger,
    postBurger,
  };
})();

export default BurgerService;
