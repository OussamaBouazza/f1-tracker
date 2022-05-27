import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Constructor, DriverStanding, DriverStandingSearch} from "../data/Ranking/driver-standing-search";



@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  // retourne le classement pilote selon l'année donnée
  getDriverStanding(season: number): Promise<DriverStanding []>{
    const url = environment.apiUrl + `${season}/driverStandings.json`;

    return new Promise(resolve =>{
      this.http.get(url).subscribe(data => {
        let jsonData:DriverStandingSearch = data as DriverStandingSearch;
        resolve(jsonData.MRData.StandingsTable.StandingsLists[0].DriverStandings);
      }, err => {
        console.log(err);
      });
    });
  }


  getConstructorStanding(season: number): Promise<Constructor []>{
    const url = environment.apiUrl + `${season}/driverStandings.json`;

    return new Promise(resolve =>{
      this.http.get(url).subscribe(data => {
        let jsonData:DriverStandingSearch = data as DriverStandingSearch;

        // resolve(jsonData.MRData.StandingsTable.StandingsLists[0].DriverStandings);
      }, err => {
        console.log(err);
      });
    });
  }




}
