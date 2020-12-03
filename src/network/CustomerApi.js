import { ApiClient } from "./Api";

export const getCustomer = (payload) => ApiClient.get("/", payload);
