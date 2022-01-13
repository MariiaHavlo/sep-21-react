import {urls} from "../../configs/urls";

const getId=(id)=>{
    return fetch(`${urls.posts}/${id}`)
        .then(value => value.json())
}

export const userService={
    getId
}