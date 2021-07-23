import { Component, Input, OnInit } from '@angular/core';
import { Collegue } from '../models/collegue';

@Component({
  selector: 'app-collegue',
  template: ` <p>
                    {{col.matricule}}
                    {{col.nom}}
                    {{col.prenoms}}
                    {{col.dateDeNaissance}}
                    {{col.email}}
              </p>`,
  styleUrls: ['./collegue.component.css']
})
export class CollegueComponent implements OnInit {

  //Ajouter un objet du type collegue

  @Input() col: Collegue;



  constructor() { }

  ngOnInit(): void {
  }

}
