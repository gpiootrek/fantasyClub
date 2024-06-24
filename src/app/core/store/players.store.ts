import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { Team } from 'src/app/common/models';

type TeamState = {
  team: Team;
  isLoading: boolean;
};

const initialState: TeamState = {
  team: {
    id: '',
    name: '',
    badgeUrl: '',
    statistics: {
      games: 0,
      wins: 0,
      draws: 0,
      losses: 0,
      points: 0,
      goalsFor: 0,
      goalsAgainst: 0,
    },
    players: [],
  },
  isLoading: false,
};

export const TeamStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withMethods((store) => ({
    setIsLoading(loading: boolean): void {
      patchState(store, () => ({ isLoading: loading }));
    },
  }))
);
