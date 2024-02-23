 import axios from "axios";


export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "c28a10fbb5264510be9f510f9c5d0e5c",
  },
});
 