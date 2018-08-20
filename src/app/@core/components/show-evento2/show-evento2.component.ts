import { EventoService } from './../../../services/evento.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { first, last } from 'lodash';
@Component({
  selector: 'ngx-show-evento2',
  templateUrl: './show-evento2.component.html',
  styleUrls: ['./show-evento2.component.scss'],
})
export class ShowEvento2Component implements OnInit {
  eventos: any;

  constructor(private eventoService: EventoService) { }

  ngOnInit() {
    this.eventoService.getByNameWithLimit().subscribe(response => this.eventos = response);
  }

  next() {
    this.eventoService.getByNameWithLimitWithStart(last(this.eventos)).subscribe(response => this.eventos = response);
  }

  prev() {
    this.eventoService.getByNameWithLimitWithEnd(
      first(this.eventos))
      .subscribe(response => this.eventos = response);
  }

}
