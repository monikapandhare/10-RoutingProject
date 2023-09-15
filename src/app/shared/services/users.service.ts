import { Injectable } from '@angular/core';
import { Iusers } from '../models/usersInterface';
import { Router } from '@angular/router';
import { UtilityService } from './utility.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  public usersArray : Array<Iusers> = [
    {
      userName : 'Monika',
      userId  : '1',
      userEmail : 'pandhreMonika@41gmail.com',
      userRole : 'admin'
    },
    {
      userName : 'Vishal',
      userId  : '2',
      userEmail : 'vaidyaVishal@21gmail.com',
      userRole : 'users'

    },
    {
      userName : 'Ashwini',
      userId  :' 3',
      userEmail  : 'vaidyaAshwini@21gmail.com',
      userRole : 'admin'
    },
    {
      userName : 'Vinod',
      userId  : '4',
      userEmail  : 'pandhareVinod@21gmail.com',
      userRole : 'users'
    },
    {
      userName : 'Ankita',
      userId  : '5',
      userEmail  : 'gatkalAnkita@21gmail.com',
      userRole : 'admin'
    },
  ]
  constructor(private _router : Router,
              private _utilityService : UtilityService) { }
  getAllUsers() : Array<Iusers>{
   return this.usersArray;
  }
  getSingleUser(id : string){
    return this.usersArray.find(user => {
      return user.userId === id
    })!
  }
  getUpdateUser(userObj : Iusers):void{
    this.usersArray.forEach(user => {
      if(user.userId === userObj.userId){
        user.userName = userObj.userName,
        user.userEmail = userObj.userEmail
        this._router.navigate(['/users'])
      }
    
    })
  }
  addNewUser(newUser : Iusers){
    this.usersArray.unshift(newUser)
    this._router.navigate(['/users'])
  }
  removeUser(id:string){
    let getIndex=this.usersArray.findIndex(obj=>obj.userId === id)
    let deleteId=this.usersArray.splice(getIndex,1)
    this._router.navigate(['/users'])
  }
}


