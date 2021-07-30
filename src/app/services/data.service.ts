import { Injectable } from '@angular/core';
import { ColleguesMock } from '../mock/collegues-mock';
import { Collegue } from '../models/collegue';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  collegues: Collegue [] = new ColleguesMock().collegues;
  collegue:Collegue = new ColleguesMock().collegue;
  

  constructor() { }

  rechercherParNom(nom:string): string[] {
     return this.collegues
            .filter((collegues:Collegue) => collegues.nom === nom)
            .map((collegue:Collegue) => collegue.matricule)
  
  }

  recupereCollegueCourant(): Collegue{
    return this.collegue;
  }

  
}
