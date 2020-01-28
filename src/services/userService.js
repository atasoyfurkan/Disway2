import http from "./httpService";
import { apiUrl } from "../config.json";
const apiEndpoint = apiUrl + "/users";

export function register(user) {
  return http.post(apiEndpoint, {
    email: user.email,
    password: user.password,
    username: user.username
  });
}

export async function getUser(id) {
  return await http.get(apiEndpoint + "/" + id);
}

export function updateUser(user) {
  return http.put(apiEndpoint + "/" + user._id, user);
}
