import { Injectable } from "@angular/core";
import {  ActivatedRoute, ActivatedRouteSnapshot, CanActivate,  CanActivateChild,  Router,  RouterStateSnapshot, UrlTree,} from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";





@Injectable({providedIn:"root"})
export class AuthGaurd implements CanActivate, CanActivateChild{
    constructor(
        private _authService : AuthService,
        
    ){}
    canActivate(route : ActivatedRouteSnapshot, state : RouterStateSnapshot): boolean |  Observable<boolean>  | Promise<boolean> {
       return this._authService.isAuthenticated()
            .then((res : boolean) => {
                if(res){
                    return true
                }else{
                   
                    return false
                }
            })
    }
    //or return this.canActivate(childRoute,state)
    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean  | Observable<boolean> | Promise<boolean> {
        return this._authService.isAuthenticated()
            .then((res : boolean) => {
                if(res){
                    return true
                }else{
                    return false
                }
            })
    }
    
    
//     canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
//      return this._authService.isAuthenticated().then((res : boolean)=>{
//         if(res===true){
//             return true
//         }else{
//             return false
//         }
//      })
//     }
//     canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean  | Observable<boolean> |  Promise<boolean> {
//         return this._authService.isAuthenticated().then((res : boolean)=>{
//             if(res===true){
//                 return true
//             }else{
//                 return false
//             }
//          })
// }
}
