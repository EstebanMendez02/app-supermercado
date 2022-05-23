import { Component, OnInit } from '@angular/core';
import { LacteoService } from 'src/app/services/lacteo.service';

@Component({
  selector: 'app-lacteo',
  templateUrl: './lacteo.page.html',
  styleUrls: ['./lacteo.page.scss'],
})
export class LacteoPage implements OnInit {

  constructor(private lacteoService: LacteoService) { }

  ngOnInit() {
    this.lacteoService
    .getTopHeadLinesL().subscribe(resp => {console.log('lacteos', resp); });
  }

}
