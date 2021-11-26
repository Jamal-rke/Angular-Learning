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

  constructor(private ar: ActivatedRoute) {}

  private $arSub: Subscription;
  ngOnInit(): void {
    this.$arSub = this.ar.params.subscribe((params) => {
      this.name = params.name;
      this.age = params.age;
    });
  }
}
