import { Component, OnInit } from '@angular/core';
import { PescadoService } from 'src/app/services/pescado.service';

@Component({
  selector: 'app-pescado',
  templateUrl: './pescado.page.html',
  styleUrls: ['./pescado.page.scss'],
})
export class PescadoPage implements OnInit {

  constructor(private pescadoService: PescadoService) { }

  ngOnInit() {
    this.pescadoService.getTopHeadLinesP().subscribe(resp => {console.log('pescados', resp); });
  }

}
