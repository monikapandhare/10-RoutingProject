import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loginStatus : boolean = false;
  
  constructor(private _router : Router) { }
  isAuthenticated():Promise<boolean>{
    return new Promise((resolve,reject) => {
      setTimeout(()=>{
        resolve(this.loginStatus)
      },300)
    })
    
  }

  loginApp(){
    this.loginStatus = true;
    localStorage.setItem("token" , "JWT Token")

  }
  logOutFromApp(){

    this._router.navigate(['/'])
    this.loginStatus=false;
    localStorage.removeItem("token")
}
}