import { Component, Input, OnInit } from '@angular/core';
import { Collegue } from '../models/collegue';

@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.css']
})
export class CollegueComponent implements OnInit {


  @Input() col: Collegue = new Collegue() ;


  showEmailAndPhotoUrlInputField:boolean = true;


  constructor() { }

  ngOnInit(): void {
  }


  creer():void{

    this.showEmailAndPhotoUrlInputField = true;

  }

  modifier():void{
   
    this.showEmailAndPhotoUrlInputField = true;
  }

  

  valider():void{
    
    this.showEmailAndPhotoUrlInputField = false;
  }

    rechercher(): void{
      
    
    }


}
