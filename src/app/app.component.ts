import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  //#region Properties
  //#endregion

  //#region Lifecycle

  ngOnInit(): void {
    console.log('OnInit');
  }

  //#endregion
}
