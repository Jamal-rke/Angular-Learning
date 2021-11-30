import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GenericService } from './service/generic.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'demo';
  myPass = '';
  constructor(private gs: GenericService, private router: Router) {}

  check(event) {
    console.log(event);
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log(this.gs.isPrime(7));
  }

  goto(path) {
    this.router.navigate([path]);
    // this.router.navigateByUrl(path);
  }
}
