import axios from "axios";

const instance = axios.create({
  baseURL: "https://whatsappapi-vxgm.onrender.com/",
});

export default instance;
