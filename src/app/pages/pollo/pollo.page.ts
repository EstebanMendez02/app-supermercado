import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'src/app/interfaces/interfaces';
import { PolloService } from 'src/app/services/pollo.service';

@Component({
  selector: 'app-pollo',
  templateUrl: './pollo.page.html',
  styleUrls: ['./pollo.page.scss'],
})
export class PolloPage implements OnInit {

  pollos: MenuItem[] = [];

  constructor(private polloService: PolloService) { }

  ngOnInit() {
    this.polloService
    .getTopHeadLinesPO().subscribe(resp => {
      console.log('pollos', resp);
      this.pollos.push(...resp.menuItems);
    });
  }
}
