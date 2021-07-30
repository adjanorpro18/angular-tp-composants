import { Component, Input, OnInit } from '@angular/core';
import { Collegue } from '../models/collegue';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-recherche-collegue-par-nom',
  templateUrl: './recherche-collegue-par-nom.component.html',
  styleUrls: ['./recherche-collegue-par-nom.component.css']
})
export class RechercheCollegueParNomComponent implements OnInit {

 @Input() collegues: Collegue[] = [];


 state:boolean = false;


  constructor(private service:DataService) { }

  ngOnInit(): void {
  }

  afficher(){
    
    this.state = true;
    return this.service.recupereCollegueCourant() ;
    
  }

}

