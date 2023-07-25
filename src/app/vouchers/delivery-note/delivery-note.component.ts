import { Component, OnInit } from '@angular/core';
import { MAT_DATE_FORMATS } from '@angular/material/core';
import { MY_DATE_FORMATS } from 'src/app/shared/api.service';

@Component({
  selector: 'app-delivery-note',
  templateUrl: './delivery-note.component.html',
  styleUrls: ['./delivery-note.component.css']

})
export class DeliveryNoteComponent implements OnInit{

  addarry: Array<any> = [];

  ngOnInit(): void {
this.addarry.length = 5;
  }

  addnew(count:number){
    this.addarry.push(count);

  }





}
