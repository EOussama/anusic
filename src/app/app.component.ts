import { Component, OnInit } from '@angular/core';
import { ScrapperService } from './modules/scraper/services/scrapper.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  //#region Properties
  //#endregion

  //#region Lifecycle

  constructor(
    private scrapper: ScrapperService
  ) { }

  ngOnInit(): void { }

  //#endregion
}
