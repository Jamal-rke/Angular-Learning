import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  name: string = '';
  age: string = '';
  date: Date;

  counter = 0;
  text: string = 'some text from dashboard';

  constructor(private ar: ActivatedRoute, public datePipe: DatePipe) {}

  get dateX() {
    return this.datePipe.transform(this.date, 'dd/MM/YYYY');
  }

  private $arSub: Subscription;
  ngOnInit(): void {
    this.date = new Date();

    this.$arSub = this.ar.params.subscribe((params) => {
      this.name = params.name;
      this.age = params.age;
    });
  }

  updatecounter(e) {
    this.counter += e;
  }
}
