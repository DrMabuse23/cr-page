import { Fight } from './fight.model';

export interface FightingEvent {
  id?: string;
  name: string;
  from: any;
  to: any;
  results?: Fight[];
  description?: string;
}
