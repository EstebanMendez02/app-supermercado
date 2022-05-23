import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'src/app/interfaces/interfaces';
import { VerduraService } from 'src/app/services/verdura.service';

@Component({
  selector: 'app-verdura',
  templateUrl: './verdura.page.html',
  styleUrls: ['./verdura.page.scss'],
})
export class VerduraPage implements OnInit {

  verduras: MenuItem[] = [];

  constructor( private verduraService:VerduraService) { }

  ngOnInit() {
    this.verduraService
    .getTopHeadLinesV().subscribe(resp => {
      console.log('verduras', resp);
      this.verduras.push(...resp.menuItems);
    });
  }

}
