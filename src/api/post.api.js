
import axios  from "axios";
import { BASE_URL } from "../util/constant";
import { API_ENDPOINT } from "../util/endpoint";
const getAllComments = async (id) => {
    const url = API_ENDPOINT.getAllComments(BASE_URL , id)
    const result = await axios
      .get(url)
      .then((res) => {
        return res.data;
      })
      .catch((err) => console.log(err));
    console.log(result);
    return result
    
  };
  const getPostbyId = async (id) => {
      const url =  API_ENDPOINT.getPost(BASE_URL , id)
    const result = await axios
      .get(url)
      .then((res) => {
        return res.data;
      })
      .catch((err) => console.log(err));
      return result
  };
  const getAllPosts = async () => {
    const url =  API_ENDPOINT.getAllPosts(BASE_URL)
  const result = await axios
    .get(url)
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.log(err));
    return result
};
export {getAllComments , getAllPosts , getPostbyId}