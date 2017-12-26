export interface Arena {
  name: string;
  arena: string;
  arenaID: number;
  trophyLimit: number;
}

export interface Clan {
  tag: string;
  name: string;
  role: string;
  donations: number;
  donationsReceived: number;
  badge: number;
}

export interface IconUrls {
  medium: string;
}

export interface FavoriteCard {
  name: string;
  maxLevel: number;
  iconUrls: IconUrls;
  key: string;
  elixir: number;
  type: string;
  rarity: string;
  arena: number;
  description: string;
}

export interface Stats {
  tournamentCardsWon: number;
  maxTrophies: number;
  threeCrownWins: number;
  cardsFound: number;
  favoriteCard: FavoriteCard;
  totalDonations: number;
  challengeMaxWins: number;
  challengeCardsWon: number;
  level: number;
}

export interface Games {
  total: number;
  tournamentGames: number;
  wins: number;
  losses: number;
  draws: number;
}

export interface ChestCycle {
  upcoming: string[];
  superMagical: number;
  magical: number;
  legendary: number;
  epic: number;
  giant: number;
}

export interface CurrentSeason {
  rank: number;
  trophies: number;
}

export interface PreviousSeason {
  id: string;
  rank: number;
  trophies: number;
  bestTrophies: number;
}

export interface BestSeason {
  id: string;
  rank: number;
  trophies: number;
}

export interface LeagueStatistics {
  currentSeason: CurrentSeason;
  previousSeason: PreviousSeason;
  bestSeason: BestSeason;
}

export interface IconUrls2 {
  medium: string;
}

export interface CurrentDeck {
  name: string;
  level: number;
  maxLevel: number;
  count: number;
  iconUrls: IconUrls2;
  key: string;
  elixir: number;
  type: string;
  rarity: string;
  arena: number;
  description: string;
}

export interface IconUrls3 {
  medium: string;
}

export interface Card {
  name: string;
  level: number;
  maxLevel: number;
  count: number;
  iconUrls: IconUrls3;
  key: string;
  elixir: number;
  type: string;
  rarity: string;
  arena: number;
  description: string;
}

export interface Achievement {
  name: string;
  stars: number;
  value: number;
  target: number;
  info: string;
}

export interface Mode {
  name: string;
  deck: string;
  cardLevels: string;
  overtimeSeconds: number;
  players: string;
  sameDeck: boolean;
}

export interface Clan2 {
  tag: string;
  name: string;
  badge: number;
}

export interface IconUrls4 {
  medium: string;
}

export interface Deck {
  name: string;
  level: number;
  maxLevel: number;
  iconUrls: IconUrls4;
  key: string;
  elixir: number;
  type: string;
  rarity: string;
  arena: number;
  description: string;
}

export interface Team {
  tag: string;
  name: string;
  crownsEarned: number;
  startTrophies: number;
  clan: Clan2;
  deck: Deck[];
}

export interface Clan3 {
  tag: string;
  name: string;
  badge: number;
}

export interface IconUrls5 {
  medium: string;
}

export interface Deck2 {
  name: string;
  level: number;
  maxLevel: number;
  iconUrls: IconUrls5;
  key: string;
  elixir: number;
  type: string;
  rarity: string;
  arena: number;
  description: string;
}

export interface Opponent {
  tag: string;
  name: string;
  crownsEarned: number;
  startTrophies: number;
  clan: Clan3;
  deck: Deck2[];
}

export interface Arena2 {
  name: string;
  arena: string;
  arenaID: number;
  trophyLimit: number;
}

export interface Battle {
  type: string;
  mode: Mode;
  utcTime: number;
  deckType: string;
  teamSize: number;
  winner: number;
  teamCrowns: number;
  opponentCrowns: number;
  team: Team[];
  opponent: Opponent[];
  arena: Arena2;
}

export interface Profile {
  tag: string;
  name: string;
  trophies: number;
  arena: Arena;
  clan: Clan;
  stats: Stats;
  games: Games;
  chestCycle: ChestCycle;
  leagueStatistics: LeagueStatistics;
  currentDeck: CurrentDeck[];
  cards: Card[];
  achievements: Achievement[];
  battles: Battle[];
}
