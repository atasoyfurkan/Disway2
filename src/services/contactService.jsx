import http from "./httpService";
import { apiUrl } from "../config.json";

const apiEndpoint = apiUrl + "/contacts";

export async function sendContact(contact) {
  return await http.post(apiEndpoint, contact);
}
