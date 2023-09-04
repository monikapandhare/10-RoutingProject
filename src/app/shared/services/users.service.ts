import { Injectable } from '@angular/core';
import { Iusers } from '../models/usersInterface';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  public usersArray : Array<Iusers> = [
    {
      userName : 'Monika',
      userId  : 1
    },
    {
      userName : 'Vishal',
      userId  : 2
    },
    {
      userName : 'Ashwini',
      userId  : 3
    },
  ]
  constructor() { }
  getAllUsers() : Array<Iusers>{
   return this.usersArray;
  }
  getSingleUser(id : number){
    return this.usersArray.find(user => {
      return user.userId === id
    })!
  }
}
