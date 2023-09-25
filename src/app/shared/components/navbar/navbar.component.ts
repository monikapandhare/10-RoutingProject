import { Component, OnInit } from '@angular/core';
// import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(
    private _authService : AuthService,
              private _router : Router
              ) { }

  ngOnInit(): void {
  }
  // toLogin(){
  //   this._authService.loginApp()
  // }
  toLogOut(){
    this._router.navigate(['/'])
    this._authService.logOutFromApp()
  }
}
