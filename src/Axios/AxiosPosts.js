import Axios from "axios";

const AxiosPosts = Axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
});

AxiosPosts.defaults.headers.common["Authorization"] = "POSTS TOKEN";

export default AxiosPosts;
