import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {ConstructorStanding, DriverStanding, Standing} from "../data/Standing";


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  // retourne le classement pilote selon l'année donnée
  async getDriverStanding(season: number): Promise<DriverStanding []>{
    const url = environment.apiUrl + `${season}/driverStandings.json`;

    return new Promise(resolve =>{
      this.http.get(url).subscribe(data => {
        let jsonData:Standing = data as Standing;
        resolve(jsonData.MRData.StandingsTable.StandingsLists[0].DriverStandings);

      }, err => {
        console.log(err);
      });
    });
  }


  getConstructorStanding(season: number): Promise<ConstructorStanding []>{
    const url = environment.apiUrl + `${season}/constructorStandings.json`;

    return new Promise(resolve =>{
      this.http.get(url).subscribe(data => {
        let jsonData:Standing = data as Standing;
        resolve(jsonData.MRData.StandingsTable.StandingsLists[0].ConstructorStandings);
      }, err => {
        console.log(err);
      });
    });
  }




}
