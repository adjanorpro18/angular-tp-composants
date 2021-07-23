import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bonjour-avec-prenom',
  templateUrl: './bonjour-avec-prenom.component.html',
  styleUrls: ['./bonjour-avec-prenom.component.css']
})
export class BonjourAvecPrenomComponent implements OnInit {

  prenom:string; // ajout de la proprieté prenom


  constructor() { 
    this.prenom = 'Philippe'; //valorisation de la propriété
  }

  ngOnInit(): void {
  }

}
