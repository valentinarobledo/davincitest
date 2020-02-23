import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  cont: string;
  sub: string;

}

const ELEMENT_DATA: PeriodicElement[] = [
  { name: 'Apendicectomía', cont: '67.000', sub:'0'},
  { name: 'Biopsia de mama', cont: '158.000', sub:'20.000'},
  { name: 'Endoarteriectomía de la carótida', cont:'150.000', sub:'85.000'},
  {	name: 'Colectomía parcial', cont: '130.000', sub:'65.000'},
  { name: 'Mastectomía', cont: '300.000', sub:'100.000'},
  { name: 'Prostatectomía', cont: '160.000', sub:'100.000'},
];

@Component({
  selector: 'app-surgery',
  templateUrl: './surgery.component.html',
  styleUrls: ['./surgery.component.css']
})
export class SurgeryComponent implements OnInit {
	displayedColumns: string[] = ['name', 'cont', 'sub'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
