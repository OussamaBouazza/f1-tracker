import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Race} from "../../api/data/Race";
import {ApiService} from "../../api/services/api.service";

@Component({
  selector: 'app-course',
  templateUrl: './course.page.html',
  styleUrls: ['./course.page.scss'],
})
export class CoursePage implements OnInit {
  race: Race;
  isResumed: boolean;   //permet d'afficher le classement de la course ou l'horaire si elle ne s'est pas encore déroulée


  constructor(public route:ActivatedRoute, public api: ApiService) { }

  async ngOnInit() {
    let jsonData: string;

    //récupérer la course sélectionnée
    this.route.queryParams.subscribe(params => {
      jsonData = params['raceData'];
    })

    //désérialiser les donnée JSON reçue
    this.race = JSON.parse(jsonData);

    this.race.dateTime = new Date(this.race.dateTime);

    //requête pour récupérer les résultats de la course
    this.race.Results = await this.api.getRaceResults(this.race.season, this.race.round);

    //check si les données son disponible dans l'api
    if (this.race.Results == null)
      this.isResumed = false;
    else {
      this.isResumed = true;

      //requête pour récupérer les résultats des qualifications d'une course
      this.race.QualifyingResults = await this.api.getQualifyingResults(this.race.season, this.race.round);
    }

  }

}
