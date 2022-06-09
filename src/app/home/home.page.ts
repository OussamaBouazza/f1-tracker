import { Component } from '@angular/core';
import {ApiService} from "../api/services/api.service";


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  availableSeasons:number[];    //tableau contenant les saisons disponibles
  ranking:Response[];           //tableau contenant le classement de la saison choisie


  constructor(private api: ApiService) {}





}
