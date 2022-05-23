import { Component, OnInit } from '@angular/core';
import { PolloService } from 'src/app/services/pollo.service';

@Component({
  selector: 'app-pollo',
  templateUrl: './pollo.page.html',
  styleUrls: ['./pollo.page.scss'],
})
export class PolloPage implements OnInit {

  constructor(private polloService: PolloService) { }

  ngOnInit() {
    this.polloService
    .getTopHeadLinesPO().subscribe(resp => {console.log('pollos', resp); });
  }
}
