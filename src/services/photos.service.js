import {urls} from "../config/urls";
import {axiosService} from "./axios.service";

export const photosService={

getById:(albumId)=>axiosService.get(`${urls.users}/${albumId}/photos`).then(value => value.data)

}
