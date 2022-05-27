import { Component, OnInit } from '@angular/core';
import {ApiService} from "../services/api.service";
import {Race} from "../data/Race";

@Component({
  selector: 'app-calendrier',
  templateUrl: './calendrier.page.html',
  styleUrls: ['./calendrier.page.scss'],
})
export class CalendrierPage implements OnInit {
  private raceList: Race[];

  constructor(private api: ApiService) { }

  async ngOnInit() {
    this.raceList = await this.api.getCalendar(2022);
  }

}
