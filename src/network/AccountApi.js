import { ApiClient } from "./Api";
const accountApi = {
  list: (payload) => ApiClient.get("/list", payload),
  login: (payload) => ApiClient.put("/users/login", payload),
};

export default accountApi;
