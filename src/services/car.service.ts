import {axiosService} from "./axios.service";
import {ICar} from "../interfaces";
import {urls} from "../constans";

export const carService = {
    getAll:()=>axiosService.get<ICar[]>(urls.cars),
    create:(car:ICar) =>axiosService.post<ICar>(urls.cars)
}