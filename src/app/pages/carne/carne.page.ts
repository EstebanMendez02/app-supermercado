import { Component, OnInit } from '@angular/core';
import { CarneService } from 'src/app/services/carne.service';

@Component({
  selector: 'app-carne',
  templateUrl: './carne.page.html',
  styleUrls: ['./carne.page.scss'],
})
export class CarnePage implements OnInit {

  constructor(private carneService: CarneService) { }

  ngOnInit() {
    this.carneService
    .getTopHeadLinesC().subscribe(resp => {console.log('carnes', resp); });
  }

}
