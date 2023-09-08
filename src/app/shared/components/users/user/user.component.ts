import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Iusers } from 'src/app/shared/models/usersInterface';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
public userId!: number;
public userObj! : Iusers;
  constructor(private _routes : ActivatedRoute, private _usersService : UsersService) { }

  ngOnInit(): void {
    this.userId = +this._routes.snapshot.params['userId'] // id
    console.log(this.userId);
    
    this.userObj = this._usersService.getSingleUser(this.userId)
    console.log(this.userObj);

    this._routes.params
            .subscribe((params: Params) => {
              this.userId = +params['userId'];
              this.userObj = this._usersService.getSingleUser(this.userId)
              console.log(this.userObj);
              
            })
    
  }


}
