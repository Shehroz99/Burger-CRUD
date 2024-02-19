import axios from "axios";

const BurgerService = (() => {
  // Edit this to match your local host :)
  const localHost = "http://localhost:5181";
  const burgerController = `${localHost}/api/Burgers`;
  const imageUploadController = `${localHost}/api/ImageUpload`;

  const deleteBurger = async (id) => {
    try {
      const result = await axios.delete(`${burgerController}/${id}`);
      console.log(result);
      return result.data;
    } catch (err) {
      console.log(err);
      return false;
    }
  }

  const getAll = async () => {
    try {
      const result = await axios.get(burgerController);
      return result.data;
    } catch (err) {
      console.log(err);
      return false;
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



  const putBurger = async (burgerToUpdate) => {
    try {
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
        formData.append("formFile", image);

        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const uploadResult = await axios({
            url: imageUploadController,
            method: "POST",
            data: formData,
            headers: {"Content-Type": "multipart/form-data"}
        });

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
    deleteBurger,
    putBurger,
    postBurger,
    domainFromService
  };
})();

export default BurgerService;
