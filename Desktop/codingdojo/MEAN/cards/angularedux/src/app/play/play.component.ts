import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})
export class PlayComponent implements OnInit {
  switch: boolean = false;
  switch2: boolean = false;
  cardOne: any;
  cardTwo: any;
  constructor() { }

  ngOnInit() {
    this.cardOne = {left: this.cardPosition(), top: this.cardPosition(), val: this.cardVal()};
    this.cardTwo = {left: this.cardPosition(), top: this.cardPosition(), val: this.cardVal()};
  }

  cardPosition() {
    return Math.floor(Math.random() * (80 - 10 + 1)) + 10;
  }

  cardVal() {
    return Math.floor(Math.random() * (5 - 1 + 1)) + 1;
  }

// INCLUSIVE
// getRandomInt(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }
}
