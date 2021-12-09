import { Subject } from "rxjs";
import { User } from "../Models/UserModel";

export class UserService {
     users:User[]=[
         {
             firstName:'Mahmoud',
             lastName:'Ben Bazza',
             email:'ben@talan.tn'
         }
     ];

    addUser(user:User){
        this.users.push(user);
    }
    

    

}