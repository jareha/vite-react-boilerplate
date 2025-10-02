import axios from 'axios';

export const fetchData = async (
  key: string,
  extension?: string,
  url?: string,
): Promise<any[]> => {
  const API_PREFIX = "/";
  const API_SUFFIX = ""; // Example: ".json"

  if (extension === undefined) {
    extension = API_SUFFIX;
  }

  if (url === undefined) {
    url = API_PREFIX;
  }

  const endpoint = `${API_PREFIX}${key}${extension}`;
  const { data } = await axios.get(endpoint);

  return data;
}
