
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
      case PLAY_GAME:
        const newState = [...this._gameStore.gameStates, action.payload];
        this._gameStore.gameStore$.next(newState);

        case SCORE_GAME:
        nextcard:true
    }
  }
}