export class Driver {
  driverId: string;
  permanentNumber: string;
  code: string;
  url: string;
  givenName: string;
  familyName: string;
  dateOfBirth: string;
  nationality: string;
}

export class Constructor {
  constructorId: string;
  url: string;
  name: string;
  nationality: string;
}

export class DriverStanding {
  position: string;
  positionText: string;
  points: string;
  wins: string;
  Driver: Driver;
  Constructors: Constructor[];
}

export class StandingsList {
  season: string;
  round: string;
  DriverStandings: DriverStanding[];
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
export class ConstructorStanding {
  position: string;
  positionText: string;
  points: string;
  wins: string;
  Constructor: Constructor;
}

export class DriverStandingSearch {
  MRData: MRData;
}



