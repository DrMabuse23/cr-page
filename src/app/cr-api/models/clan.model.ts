export interface ClanChest {
  status: string;
}

export interface Badge {
  name: string;
  category: string;
  id: number;
  image: string;
}

export interface Location {
  name: string;
  isCountry: boolean;
  code: string;
}

export interface Arena {
  name: string;
  arena: string;
  arenaID: number;
  trophyLimit: number;
}

export interface Member {
  id?: string;
  docPath?: string;
  $key?: string;
  name: string;
  tag: string;
  rank: number;
  previousRank: number;
  role: string;
  expLevel: number;
  trophies: number;
  clanChestCrowns: number;
  donations: number;
  donationsReceived: number;
  donationsDelta: number;
  donationsPercent: number;
  arena: Arena;
}

export interface Clan {
  id?: string;
  docPath?: string;
  $key?: string;
  tag: string;
  name: string;
  description: string;
  type: string;
  score: number;
  memberCount: number;
  requiredScore: number;
  donations: number;
  clanChest: ClanChest;
  badge: Badge;
  location: Location;
  members?: Member[];
  error?: boolean;
}
