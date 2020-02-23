import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  specialist: string;

}

const ELEMENT_DATA: PeriodicElement[] = [
  { name: 'Vanessa Zamora', specialist: 'Neurologa'},
  { name: 'Lorena Betancourth', specialist: 'Cardiologa'},
  { name: 'Manuel Alejandro Morales', specialist:'Internista'},
  {	name: 'Carolina Duarte', specialist: 'Pediatra'},
  { name: 'Paola Trujillo', specialist: 'Ginecologa'},
  { name: 'Felipe Giraldo', specialist: 'Anestesiologo'},
];

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {
	displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
