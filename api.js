import axios from "axios";
let token = "6daef8d3323d112b6f001830de7038977dbaa088a323b01499b5a97b3f5ceeff";
let key = "2f90ce648ca7fde6fb00a3e4d79d16b0";

export function getBoards() {
  return axios
    .get(
      `https://api.trello.com/1/members/me/boards?fields=name,url&key=${key}&token=${token}`
    )
    .then((res) => res.data);
}

export function createBoard(name) {
  return axios
    .post(
      `https://api.trello.com/1/boards/?name=${name}&key=${key}&token=${token}`
    )
    .then((res) => res);
}
export function getLists(listId) {
  return axios
    .get(
      `https://api.trello.com/1/boards/${listId}/lists?key=${key}&token=${token}`
    )
    .then((res) => {
      return res.data;
    });
}

export function createList(name, boardId) {
  return axios
    .post(
      `https://api.trello.com/1/boards/${boardId}/lists?name=${name}&key=${key}&token=${token}`
    )
    .then((res) => {
      //  console.log(res);
      return res;
    });
}

export function getCardsInAList(listId) {
  return axios
    .get(
      `https://api.trello.com/1/lists/${listId}/cards?key=${key}&token=${token}`
    )
    .then((res) => {
      //  console.log(res);
      return res.data;
    });
}
