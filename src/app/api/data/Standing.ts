import {Driver} from "./Driver";
import {Constructor} from "./Constructor";


export class DriverStanding {
  position: string;
  positionText: string;
  points: string;
  wins: string;
  Driver: Driver;
  Constructors: Constructor[];
}

export class ConstructorStanding {
  position: string;
  positionText: string;
  points: string;
  wins: string;
  Constructor: Constructor;
}




export class StandingsList {
  season: string;
  round: string;
  DriverStandings: DriverStanding[];
  ConstructorStandings: ConstructorStanding[];
}

export class StandingsTable {
  season: string;
  StandingsLists: StandingsList[];
}

export class MRData {
  xmlns: string;
  series: string;
  url: string;
  limit: string;
  offset: string;
  total: string;
  StandingsTable: StandingsTable;
  constructorStanding: ConstructorStanding;
}

export class Standing {
  MRData: MRData;
}



