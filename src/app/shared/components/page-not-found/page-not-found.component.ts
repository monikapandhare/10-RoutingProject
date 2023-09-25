import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit {
  errorMsg ! : string;
  constructor(private _route : ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this._route.snapshot.data);
    this.errorMsg = this._route.snapshot.data['msg'] // data comes staticaly through routing
  }

}
