import {axiosService} from "./axios.service";

import {urls} from "../config/urls";

export const commentsService ={
    getAll:()=>axiosService.get(urls.comments).then(comments=>comments.data),
    getById:(postId)=>axiosService.get(`${urls.posts}/${postId}/comments`).then(value => value.data)
}