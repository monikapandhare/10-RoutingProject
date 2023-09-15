import { Injectable } from "@angular/core";
import {  ActivatedRoute, ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot,} from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";

@Injectable({providedIn  :'root'})
export class AuthGaurd implements CanActivate{
    constructor(private _authService : AuthService){}
    canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
     return this._authService.isAuthenticated().then((res : boolean)=>{
        if(res===true){
            return true
        }else{
            return false
        }
     })
    }
}