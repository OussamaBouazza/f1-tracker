import {Driver} from "./Driver";
import {Constructor} from "./Constructor";

export class Race {
  season: string;
  round: string;
  url: string;
  raceName: string;
  Circuit: Circuit;
  date: string;
  dateTime: Date; //objet Date pour formatter la date et l'heure renvoyé par l'api
  time: string;
  FirstPractice: FirstPractice;
  SecondPractice: SecondPractice;
  ThirdPractice: ThirdPractice;
  Qualifying: Qualifying;
  Sprint: Sprint;

  QualifyingResults: QualifyingResult[];
  Results: Result[];
}

export class Location {
  lat: string;
  long: string;
  locality: string;
  country: string;
}

export class Circuit {
  circuitId: string;
  url: string;
  circuitName: string;
  Location: Location;
}

export class FirstPractice {
  date: string;
  time: string;
  dateTime: Date;
}

export class SecondPractice {
  date: string;
  time: string;
  dateTime: Date;
}

export class ThirdPractice {
  date: string;
  time: string;
  dateTime: Date;
}

export class Qualifying {
  date: string;
  time: string;
  dateTime: Date;
}

export class Sprint {
  date: string;
  time: string;
  dateTime: Date;
}

export class QualifyingResult {
  number: string;
  position: string;
  Driver: Driver;
  Constructor: Constructor;
  Q1: string;
  Q2: string;
  Q3: string;
}

export class Result {
  number: string;
  position: string;
  positionText: string;
  points: string;
  Driver: Driver;
  Constructor: Constructor;
  grid: string;
  laps: string;
  status: string;
  // Time: Time;
  // FastestLap: FastestLap;
}



export class RaceTable {
  season: string;
  Races: Race[];
}

export class MRData {
  xmlns: string;
  series: string;
  url: string;
  limit: string;
  offset: string;
  total: string;
  RaceTable: RaceTable;
}

export class RaceData {
  MRData: MRData;
}


