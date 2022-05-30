import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Race} from "../data/Race";
import {ApiService} from "../services/api.service";

@Component({
  selector: 'app-course',
  templateUrl: './course.page.html',
  styleUrls: ['./course.page.scss'],
})
export class CoursePage implements OnInit {
  race: Race;


  constructor(public route:ActivatedRoute, public api: ApiService) { }

  async ngOnInit() {
    let jsonData: string;

    //récupérer la course sélectionnée
    this.route.queryParams.subscribe(params => {
      jsonData = params['raceData'];
    })

    //désérialiser les donnée JSON reçue
    this.race = JSON.parse(jsonData);

    this.race.Results = await this.api.getRaceResult(this.race.season, this.race.round);

    console.log(this.race);
  }

}
