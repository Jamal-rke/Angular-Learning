import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent implements OnInit {
  currentCount = 0;

  constructor() {}

  ngOnInit(): void {}

  add() {
    this.currentCount++;
  }

  sub() {
    this.currentCount--;
  }
}

// string interpolation -> one way binding -> from ts to html
