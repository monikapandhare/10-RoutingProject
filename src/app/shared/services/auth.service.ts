import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SnackbarService } from './snackbar.service';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loginStatus : boolean = false;
  
  constructor(private _routes:ActivatedRoute,
              private _router : Router,
              private _snackBar  : SnackbarService) { }
  isAuthenticated():Promise<boolean>{
    return new Promise((resolve, reject) => {
      setTimeout(()=>{
        if(localStorage.getItem("token")){
            this.loginStatus = true
        }else{
            this.loginStatus = false
        }
        resolve(this.loginStatus)
      },300)
    })
    
  }

  loginApp(username : string,password : string){
    if(username === "monikapandhare71@gmail.com" && password === "vedika20"){
      this.loginStatus = true;
      localStorage.setItem("token", "JWT Token");
      localStorage.setItem("userRole", "candidate");

    }else if(username === "vishalvaidya71@gmail.com" && password === "vishal20"){
      this.loginStatus = true;
      localStorage.setItem("token", "JWT token");
      localStorage.setItem("userRole", "admin")
    }else if(username === "vinodpandhare@gmail.com" && password === "vinod20"){
      this.loginStatus = true;
      localStorage.setItem("token", "JWT token");
      localStorage.setItem("userRole", "SuperAdmins")
    }
    else{
      this._snackBar.createSnackBar(`Invalid username or password`, 'close')
      this._router.navigate(['/'])
    }

    
  }
  logOutFromApp(){
    this.loginStatus=false;
    localStorage.removeItem("token")
    localStorage.removeItem("userRole")
}
}

