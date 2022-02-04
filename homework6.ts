
import {IUser} from "./user.interface";


const user: IUser={
    name:"Max",age:18,gender:"male"
}

const sum = (a:number,b:number):number =>{
    return (a+b)
}

const showSum = (a:number,b:number):void=>{
    console.log(a+b)
}

const incAge = (user:IUser,inc:number):IUser=>{
    user.age+=inc
    return user;
}

console.log(sum(1, 2));
showSum(2,3)
incAge(user, 2)



