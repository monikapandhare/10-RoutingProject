import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";


@Injectable({
    providedIn : "root"

})
export class UserRoleGaurd implements CanActivate{
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        console.log(route.data);
       
    //    let staticdataUserRole : string = route.data['userRole']
    //    let actualUserRole = localStorage.getItem('userRole')
    //    if(staticdataUserRole === actualUserRole){
    //     return true
    //    }else{
    //     return false
    //    }

    let staticdataUserRole:Array<string>=route.data['userRole'];
    console.log(staticdataUserRole);
    let actualUserRole : string = localStorage.getItem('userRole')!;
    console.log(actualUserRole);
    // if(staticdataUserRole.includes(actualUserRole)){
    //     return true
    // }else if(staticdataUserRole.includes(actualUserRole)){
    //     return true
    // }else{
    //     return false
    // }

    // here we can also used ternary operator
    return staticdataUserRole.includes(actualUserRole) ? true : false
    }
  
    
       
    }

