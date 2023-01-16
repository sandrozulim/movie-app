import { API_BASE_URL, API_KEY } from "../constants/api.constants";

export const buildApiUrl = (endpoint) => {
  return `${API_BASE_URL}${endpoint}/${API_KEY}`;
};
