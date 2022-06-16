import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../api/services/api.service";
import {Race} from "../../api/data/Race";
import {Router} from "@angular/router";
import {ConnectionStatus, Network} from "@capacitor/network";

@Component({
  selector: 'app-calendrier',
  templateUrl: './calendrier.page.html',
  styleUrls: ['./calendrier.page.scss'],
})
export class CalendrierPage implements OnInit {
  private raceList: Race[];
  private connectionStatus: ConnectionStatus;

  constructor(private api: ApiService, public router: Router) { }

  async ngOnInit() {
      console.log('Network status changed', Network.getStatus());
    Network.addListener('networkStatusChange', status => {
      console.log('Network status changed', status);
    });

    this.raceList = await this.api.getCalendar(2022);
  }

  onClickRace(clickedRace: Race){
    this.router.navigate(['course'], {queryParams : {
      //sérialiser l'objet Race en string JSON pour les transmettre les données à la page course
      raceData : JSON.stringify(clickedRace)
    }})
  }

}
