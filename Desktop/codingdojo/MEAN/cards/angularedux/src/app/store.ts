
import { SCORE_GAME } from './game.actions'; 
import { PLAY_GAME } from './game.actions'; 


import { Http, Headers, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';


@Injectable()
export class GameStore {

  public gameStore$: BehaviorSubject<any>;

  public gameStates = [{
    name: '',
    score:undefined,
    player:undefined


  }];


  constructor() {
    this.gameStore$ = new BehaviorSubject(this.gameStates);
  }

}