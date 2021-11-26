import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { GenericService } from '../../service/generic.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent implements OnInit {
  currentCount = 0;
  name = 'Ankit soni';
  school = '';

  num1: number = null;

  students: string[] = ['ankit', 'jamal', 'rohit', 'ankur', 'david'];

  constructor(private gs: GenericService, private ar: ActivatedRoute) {}

  private $arSub: Subscription;
  ngOnInit(): void {
    let name_box = document.getElementById('name_box');
    for (let i = 0; i < this.students.length; i++) {
      let p = document.createElement('p');
      p.innerText = i + 1 + '). ' + this.students[i];
      name_box.appendChild(p);
    }

    this.$arSub = this.ar.queryParams.subscribe((params) => {
      console.log('By AR', params);
    });

    let qParams = {};
    window.location.href
      .split('?')[1]
      .split('&')
      .forEach((params) => {
        let temp = params.split('=');
        temp[1] = temp[1].replace('%20', ' ');
        qParams[temp[0]] = temp[1];
      });
    console.log('manual', qParams);
  }

  add(event) {
    console.log(event);

    this.currentCount++;
  }

  sub() {
    this.currentCount--;
  }

  detectChange(event) {
    this.name = event.target.value;
  }

  check(event) {
    console.log(event);
  }

  checkPrime() {
    let val = this.gs.isPrime(this.num1);
    console.log(val);
  }
}

// string interpolation -> one way binding -> from .ts to .html

// if else
// for
