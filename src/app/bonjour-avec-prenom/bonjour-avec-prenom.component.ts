import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bonjour-avec-prenom',
  template: ` <p>{{prenom}}</p>`,
  styleUrls: ['./bonjour-avec-prenom.component.css']
})
export class BonjourAvecPrenomComponent implements OnInit {

  // prenom:string; // ajout de la proprieté prenom

  @Input() prenom:string; // ce champ est un paramette du composant


  constructor() { 
    this.prenom = "Philippe";
    
  }
 

  ngOnInit(): void {
  }

}
