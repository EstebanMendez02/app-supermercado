import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'src/app/interfaces/interfaces';
import { LacteoService } from 'src/app/services/lacteo.service';

@Component({
  selector: 'app-lacteo',
  templateUrl: './lacteo.page.html',
  styleUrls: ['./lacteo.page.scss'],
})
export class LacteoPage implements OnInit {

  lacteos: MenuItem[] = [];

  constructor(private lacteoService: LacteoService) { }

  ngOnInit() {
    this.lacteoService
    .getTopHeadLinesL().subscribe(resp => {
      console.log('lacteos', resp);
      this.lacteos.push(...resp.menuItems);
    });
  }

}
