import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'ngx-carousel',
  templateUrl: './carousel-local.component.html',
  styleUrls: ['./carousel-local.component.scss', '../../../../style.css'],
})
export class CarouselLocalComponent implements OnInit {
  @Input() eventos: Observable<any>;
  eventosShow: any;

  constructor() {}

  ngOnInit() {
    this.eventos.subscribe(response => {
      this.eventosShow = response;
    });
  }
}
