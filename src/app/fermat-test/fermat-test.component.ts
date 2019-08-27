import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fermat-test',
  templateUrl: './fermat-test.component.html',
  styleUrls: ['./fermat-test.component.css']
})
export class FermatTestComponent implements OnInit {
versuchskaninchen: number = 13;
Anzahl: number = 5;
ergebnis="Noch nicht berechnet"
  constructor() { }

  ngOnInit() {
  }

}