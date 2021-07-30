
import { Component, Input, OnInit } from '@angular/core';
import { ColleguesMock } from '../mock/collegues-mock';
import { Collegue } from '../models/collegue';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.css']
})
export class CollegueComponent implements OnInit {


  @Input() col: Collegue = null;


  showInput:boolean = false;


  constructor( private service:DataService) { }

  ngOnInit(): void {
    this.service.recupereCollegueCourant();
  }


  creer():void{

    this.showInput = true;

  }

  modifier():void{
   
    this.showInput = true;
  }

  

  valider():void{
    
    this.showInput = false;
  }


}
