
import { SCORE_GAME } from './game.actions'; 
import { PLAY_GAME } from './game.actions'; 


import { Http, Headers, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';
import { BehaviorSubject } from 'rxjs';


@Injectable()
export class Store {

  public Store$: BehaviorSubject<any>;

  public States = [{
    name: '',
    score:undefined,
    player:undefined,
    nextcard:false


  }];


  constructor() {
    this.Store$ = new BehaviorSubject(this.States);
  }

}
