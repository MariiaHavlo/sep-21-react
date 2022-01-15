import {urls} from "../../configs/urls";

const getByUserId=(id)=>{
    return fetch(`${urls.posts}?userId=${id}`)
        .then(value => value.json())
}

export const postService={
    getByUserId
}