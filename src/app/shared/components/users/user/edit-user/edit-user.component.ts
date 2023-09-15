import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Irole, Iusers } from 'src/app/shared/models/usersInterface';
import { UsersService } from 'src/app/shared/services/users.service';
import { UtilityService } from 'src/app/shared/services/utility.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
 public userId! : string;
 public userObj ! : Iusers;
 public canEditUser : boolean= true
  constructor(
    private _routes : ActivatedRoute,
    private _userService : UsersService,
    private _utilityService  :UtilityService
  ) { }

  ngOnInit(): void {
    this.userId = this._routes.snapshot.params['userId'];
    this.userObj = this._userService.getSingleUser(this.userId);

    console.log(this._routes.snapshot.queryParams);
    if(this._routes.snapshot.queryParams['canEditUser'] === "users")
    this.canEditUser = false
  }

  onUpdatUser(uname:string,uemail:string){
    let Uobj:Iusers = {
      userName : uname,
      userEmail : uemail,
      userId :this.userId,
      userRole : this.userObj.userRole
    }
    this._userService.getUpdateUser(Uobj)
  }
  onAddUsers(name:HTMLInputElement,mail:HTMLInputElement,role:HTMLSelectElement){
    let obj:Iusers={
      userName:name.value,
      userId:this._utilityService.generateUuid(),
      userEmail: mail.value,
      userRole:role.value as Irole
    }
    this._userService.addNewUser(obj)
  }

}
