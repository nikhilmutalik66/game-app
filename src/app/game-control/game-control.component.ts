import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  ref;
  numberInterval = 0;

  @Output() gameStarted = new EventEmitter<number>();
  @Output() gameStopped = new EventEmitter<number>();

  constructor() {
  }

  ngOnInit(): void {
  }

  startGame() {
    this.ref = setInterval(() => {
      this.gameStarted.emit(this.numberInterval + 1);
      this.numberInterval++;
    },1000);
  }

  stopGame() {
    clearInterval(this.ref);
    this.numberInterval = 0;
  }

  pauseGame() {
    clearInterval(this.ref);
  }
}
