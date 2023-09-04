import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { Iusers } from '../../models/usersInterface';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  public userInfo : Array<Iusers> = []
  constructor(private _userService : UsersService) { }

  ngOnInit(): void {
    this.userInfo = this._userService.getAllUsers()
    console.log(this.userInfo)
  }

}
