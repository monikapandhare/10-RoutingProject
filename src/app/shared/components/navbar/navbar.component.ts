import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private _authService : AuthService) { }

  ngOnInit(): void {
  }
  toLogin(){
    this._authService.loginApp
  }
  toLogOut(){
    this._authService.logOutFromApp
  }
}
