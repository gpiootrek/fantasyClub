export interface Team {
  id: string;
  name: string;
  badgeUrl?: string;
  statistics: TeamStatistics;
  players: Player[];
}

export interface TeamStatistics {
  games: number;
  wins: number;
  draws: number;
  losses: number;
  points: number;
  goalsFor: number;
  goalsAgainst: number;
}

export interface Player {
  id: string;
  firstName: string;
  lastName: string;
  nationality: string;
  photoUrl?: string;
  position: Position;
  statistics: PlayerStatistics;
  isCaptain: boolean;
}

export enum Position {
  GOALKEEPER,
  DEFENDER,
  MIDFIELDER,
  ATTACKER,
}

export interface PlayerStatistics {
  games: number;
  goals: number;
  assists: number;
  mvps: number;
  cleanSheets: number;
}
