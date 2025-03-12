const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/pets`;

const index = async () => {
    try {
    const res = await fetch(BASE_URL); // GET  - http://localhost:3000/pets and storing it in 'res'
    return res.json();
    } catch (err) {
        console.log(err);
    }
  };


console.log(await index());


  export {
    index,
  }