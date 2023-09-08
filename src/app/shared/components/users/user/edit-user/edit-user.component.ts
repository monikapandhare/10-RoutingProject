import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Iusers } from 'src/app/shared/models/usersInterface';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
 public userId! : number;
 public userObj ! : Iusers;
  constructor(
    private _routes : ActivatedRoute,
    private _userService : UsersService
  ) { }

  ngOnInit(): void {
    this.userId = +this._routes.snapshot.params['userId'];
    this.userObj = this._userService.getSingleUser(this.userId);
  }

  onUpdatUser(uname:string,uemail:string){
    let Uobj:Iusers = {
      userName : uname,
      userEmail : uemail,
      userId :this.userId
    }
    this._userService.getUpdateUser(Uobj)
  }

}
