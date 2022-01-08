import axios from "axios";

const ROOT_PATH = "https://randomuser.me/api";

export const fetchContacts = async (number) => {
  try {
    return axios
      .get(`${ROOT_PATH}/?results=${number}`)
      .then((results) => results.data);
  } catch (e) {
    return "Failed";
  }
};
