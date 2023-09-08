import { Injectable } from '@angular/core';
import { Iusers } from '../models/usersInterface';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  public usersArray : Array<Iusers> = [
    {
      userName : 'Monika',
      userId  : 1,
      userEmail : 'pandhreMonika@41gmail.com'
    },
    {
      userName : 'Vishal',
      userId  : 2,
      userEmail : 'vaidyaVishal@21gmail.com'

    },
    {
      userName : 'Ashwini',
      userId  : 3,
      userEmail  : 'vaidyaAshwini@21gmail.com'
    },
    {
      userName : 'Vinod',
      userId  : 4,
      userEmail  : 'pandhareVinod@21gmail.com'
    },
    {
      userName : 'Ankita',
      userId  : 5,
      userEmail  : 'gatkalAnkita@21gmail.com'
    },
  ]
  constructor(private _router : Router) { }
  getAllUsers() : Array<Iusers>{
   return this.usersArray;
  }
  getSingleUser(id : number){
    return this.usersArray.find(user => {
      return user.userId === id
    })!
  }
  getUpdateUser(userObj : Iusers){
    this.usersArray.forEach(user => {
      if(user.userId === userObj.userId){
        user.userName = userObj.userName,
        user.userEmail = userObj.userEmail
        this._router.navigate(['/users'])
      }
    
    })
  }
}


