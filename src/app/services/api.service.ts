import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {ConstructorStanding, DriverStanding, Standing} from "../data/Standing";
import {Qualifying, QualifyingResult, Race, RaceData, Result} from "../data/Race";


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


  async getConstructorStanding(season: number): Promise<ConstructorStanding []>{
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


  //retourne une liste des course de la saison donnée en argument
  async getCalendar(season: number): Promise<Race[]> {
    const url = environment.apiUrl + `${season}.json`;

    return new Promise(resolve => {
      this.http.get(url).subscribe(data => {
        let jsonData: RaceData = data as RaceData;

        //créer un objet Date pour formatter par la suite la date et l'heure de chaque session
        jsonData.MRData.RaceTable.Races.forEach(race => {
          race.dateTime = new Date(`${race.date}T${race.time}`);
          race.FirstPractice.dateTime = new Date(`${race.FirstPractice.date}T${race.FirstPractice.time}`);
          race.SecondPractice.dateTime = new Date(`${race.SecondPractice.date}T${race.SecondPractice.time}`);
          race.Qualifying.dateTime = new Date(`${race.Qualifying.date}T${race.Qualifying.time}`);

          //vérifie si le GP contient des course sprint et des séances d'essai 3 (ThirdPractice)
          //Certain GP peuvent ne pas en avoir
          if (race.ThirdPractice != null)
            race.ThirdPractice.dateTime = new Date(`${race.ThirdPractice.date}T${race.ThirdPractice.time}`);

          if (race.Sprint != null)
            race.Sprint.dateTime = new Date(`${race.Sprint.date}T${race.Sprint.time}`);

        });

        resolve(jsonData.MRData.RaceTable.Races);
      })
    });
  }

  //récupère les résultats d'un GP spécifique
  async getRaceResults(season: string, round: string): Promise<Result []>{
    const url = environment.apiUrl + `${season}/${round}/results.json`;

    return new Promise(resolve =>{
      this.http.get(url).subscribe(data => {
        let jsonData:RaceData = data as RaceData;

        if (jsonData.MRData.RaceTable.Races.length > 0)
          resolve(jsonData.MRData.RaceTable.Races[0].Results);
        else
          resolve(null);
      }, err => {
        console.log(err);
      });
    });
  }

  async getQualifyingResults(season: string, round: string): Promise<QualifyingResult []>{
    const url = environment.apiUrl + `${season}/${round}/qualifying.json`;

    return new Promise(resolve =>{
      this.http.get(url).subscribe(data => {
        let jsonData:RaceData = data as RaceData;

        resolve(jsonData.MRData.RaceTable.Races[0].QualifyingResults);
      }, err => {
        console.log(err);
      });
    });
  }
}
