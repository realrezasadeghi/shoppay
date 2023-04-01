import axios from "axios";

const baseURL = process.env.BASE_URL;

const instance = axios.create({ baseURL, timeout: 1500 });

export default instance;
