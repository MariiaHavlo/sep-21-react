import {IShapesAction} from "./shapesAction.interface";


export class IUser{
    constructor(private name:string, private age:number,private gender:string) {
    }
    getAge():number{
        return this.age
    }
}
const user = new IUser('Max',18,'male');
const userAge = user.getAge();
console.log(userAge);

class Sum implements IShapesAction, IUser {
    constructor(private a: number, private b: number) {
    }

    sum(): number {
        return this.a + this.b
    }

    showSum(): void {
        console.log(this.a + this.b)
    }
    incAge: (){
        +=inc
    }

}

// class Sum implements IShapesAction {
//     constructor(private a: number, private b: number) {
//     }
//
//     sum(): number {
//         return this.a + this.b
//     }
//
//     showSum(): void {
//         console.log(this.a + this.b)
//     }
//
//     incAge: (){
//         someUser.age+=inc
//     }
//
//
// }