import axios from "axios";

export function fetchPhotos(params) {
  params = {
    api_key: "1b1a51aaed2ae7637dfd3cae262ef088",
    method: "flickr.photos.search",
    extras:
      "url_n,url_m,url_z,url_o,description,owner_name,date_taken,date_upload,tags",
    format: "json",
    nojsoncallback: 1,
    safe_search: 1,
    ...params,
  };
  const parameters = Object.keys(params)
    .filter((k) => params[k] !== "")
    .map((key) => `${key}=${params[key]}`)
    .join("&");
  return axios.get(`https://api.flickr.com/services/rest?${parameters}`);
}
