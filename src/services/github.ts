import axios from 'axios';

export const getUserAvatar = async (username: String) => {
  const response = await axios.get(`https://api.github.com/users/${username}`);
  return response.data.avatar_url;
};
