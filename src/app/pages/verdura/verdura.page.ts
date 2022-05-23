import { Component, OnInit } from '@angular/core';
import { VerduraService } from 'src/app/services/verdura.service';

@Component({
  selector: 'app-verdura',
  templateUrl: './verdura.page.html',
  styleUrls: ['./verdura.page.scss'],
})
export class VerduraPage implements OnInit {

  constructor( private verduraService:VerduraService) { }

  ngOnInit() {
    this.verduraService
    .getTopHeadLinesV().subscribe(resp => {console.log('verduras', resp); });
  }

}
