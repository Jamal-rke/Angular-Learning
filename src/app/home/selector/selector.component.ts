import { HttpClient } from '@angular/common/http';
import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { SelectorService } from './selector.service';

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.css'],
})
export class SelectorComponent implements OnInit {
  @Input('text') text: string = 'some text';
  @Output('updated') updated: EventEmitter<any> = new EventEmitter<any>();

  @ViewChild('updateCount', { static: false }) updateCount;
  @ViewChildren('sameTag') sameTag;

  constructor(private service: SelectorService) {}

  private $citiesSub: Subscription;
  ngOnInit(): void {
    this.$citiesSub = this.service.getNames().subscribe((response) => {
      console.log(response);
    });
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.$citiesSub?.unsubscribe();
  }

  update(e) {
    console.log(this.sameTag);

    this.updated.emit(parseInt(e));
  }
}
