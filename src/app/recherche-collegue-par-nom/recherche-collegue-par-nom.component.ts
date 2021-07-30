import { Component, Input, OnInit } from '@angular/core';
import { Collegue } from '../models/collegue';

@Component({
  selector: 'app-recherche-collegue-par-nom',
  templateUrl: './recherche-collegue-par-nom.component.html',
  styleUrls: ['./recherche-collegue-par-nom.component.css']
})
export class RechercheCollegueParNomComponent implements OnInit {

 @Input() collegues: Collegue[] = [];

 state:boolean = false;


  constructor() { }

  ngOnInit(): void {
  }

  afficher(): void{

     this.collegues = this.collegues;
     this.state = true;
    
  }

}
