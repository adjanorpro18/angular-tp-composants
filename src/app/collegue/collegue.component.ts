import { Component, Input, OnInit } from '@angular/core';
import { Collegue } from '../models/collegue';

@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.css']
})
export class CollegueComponent implements OnInit {

  //Ajouter un input du type Collegue

  @Input() col: Collegue;

  //Alignement du template
  public alignement:string = "center";



  constructor() { }

  ngOnInit(): void {
  }

  //la fonction de creation d'un nouveau collegue
  creer():void{

    console.log("Creation d'un nouveau collègue")

  }

  //la fonction de modification d'un nouveau collegue

  modifier():void{

    console.log("Modification du collègue")
  }

}
