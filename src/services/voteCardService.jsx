import http from "./httpService";
import { apiUrl } from "../config.json";

const apiEndpoint = apiUrl + "/main-cards";

export function getData() {
  return http.get(apiEndpoint);
}
export function updateVoteCard(voteCard) {
  return http.put(apiEndpoint + "/" + voteCard._id, voteCard);
}
