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

export interface MatchPrediction {
  matchId: string;
  homeTeamScore: number;
  awayTeamScore: number;
  firstGoalScorerId: string;
  lineup: TeamLineup;
}

export interface TeamLineup {
  formation: Formation;
  goalkeeper: Player;
  defenders: Player[];
  midfielders: Player[];
  attackers: Player[];
}

export enum Formation {
  FOUR_FOUR_TWO = '4-4-2',
  FOUR_TWO_THREE_ONE = '4-2-3-1',
  FOUR_THREE_THREE = '4-3-3',
  FOUR_FIVE_ONE = '4-5-1',
  THREE_FIVE_TWO = '3-5-2',
  THREE_FOUR_THREE = '3-4-3',
}
