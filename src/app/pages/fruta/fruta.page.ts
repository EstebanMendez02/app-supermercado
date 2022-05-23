import { Component, OnInit } from '@angular/core';
import { FrutaService } from 'src/app/services/fruta.service';

@Component({
  selector: 'app-fruta',
  templateUrl: './fruta.page.html',
  styleUrls: ['./fruta.page.scss'],
})
export class FrutaPage implements OnInit {

  constructor(private frutaService: FrutaService) { }

  ngOnInit() {
    this.frutaService
    .getTopHeadLinesF().subscribe(resp => {console.log('frutas', resp); });
  }

}
