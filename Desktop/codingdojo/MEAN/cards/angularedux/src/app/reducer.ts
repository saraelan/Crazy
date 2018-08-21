
import { Injectable } from '@angular/core';
import { SCORE_GAME } from './game.actions'; 
import { PLAY_GAME } from './game.actions'; 
import { Store } from './.store';
@Injectable()
export class GameReducers {

  constructor(private _gameStore: GameStore) {

  }

  gameReducer(action: any) {

    switch (action.type) {
      case ADD_MOVIE:
        const newState = [...this._movieStore.movieStates, action.payload];
        this._movieStore.movieStore$.next(newState);
      // default:
      // return this._movieStore.movieStates;
    }
  }
}