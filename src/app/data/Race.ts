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
}

export class SecondPractice {
  date: string;
  time: string;
}

export class ThirdPractice {
  date: string;
  time: string;
}

export class Qualifying {
  date: string;
  time: string;
}

export class Sprint {
  date: string;
  time: string;
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

export class RaceCalendar {
  MRData: MRData;
}


