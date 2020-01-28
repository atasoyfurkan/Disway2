import http from "./httpService";
import { apiUrl } from "../config.json";

const apiEndpoint = apiUrl + "/comments";

export async function addComment(comment) {
  return await http.post(apiEndpoint, comment);
}
export function updateComment(comment) {
  return http.put(apiEndpoint + "/" + comment._id, comment);
}
