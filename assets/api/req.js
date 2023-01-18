import axios from "axios";

const apiKey = "51eebd76a32454934ee6529ceb281268";

export const api = axios.create({
    baseURL: `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=`
})