import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  allreadyHadAccount : boolean = true;
  public passwordType : boolean = true;
  public visiblepass : boolean = true;


  constructor(private _authService : AuthService,
              private _router : Router) { }

  ngOnInit(): void {
    
  }
  logIn(username:string,password:string){
    this._authService.loginApp(username,password)
    this._router.navigate(['/home'])
  }
  onlockunlock(){
    this.passwordType = !this.passwordType;
    this.visiblepass = !this.visiblepass
  }
}
