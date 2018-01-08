import { Member } from '../../cr-api/models/clan.model';
import { Fight } from './fight.model';
export type tournamentType = 'tournament' | 'single-ko-system' | 'double-ko-system';


export interface Round {
  from: any;
  to: any;
  results?: Fight[];
  name: string;
  map?: [Member[]];
}

export interface KoSystem extends Round {
  winsToWin: number;
}

export interface DoubleKoSystem extends KoSystem {
  winsToWin: 2;
}

export interface SingleKoSystem extends KoSystem {
  winsToWin: 1;
}

export interface Tournament {
  id?: string;
  name: string;
  type: tournamentType;
  description?: string;
  rounds?: KoSystem[] | Round[];
  players?: Member[];
}
