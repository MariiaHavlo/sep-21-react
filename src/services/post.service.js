import {axiosService} from "./axios.service";

import {urls} from "../config/urls";

export const PostService={
    getAll:()=>axiosService.get(urls.posts).then(value => value.data),
    getById:(userId)=>axiosService.get(`${urls.users}/${userId}/posts`).then(value => value.data)
}