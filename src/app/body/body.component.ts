import { Component, OnInit } from '@angular/core';
import { IDetail } from '../Idetail';
import { bodyService } from './body.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})

export class BodyComponent implements OnInit {
  imageLink="https://shashidhar0902.github.io/images/Pic1.jpg";
  constructor(private bodyservice: bodyService) { }
  name: string ;

  rotate180opt: boolean = false;
  resetImg: boolean = true;
  degg:number = 0;

  rotate180(){
    this.rotate180opt = ! this.rotate180opt;
  }
  rotate0(){
    this.rotate180opt = false;
    this.resetImg = !this.resetImg;
  }

  reducestat: boolean = false;
  reduce50(){
    this.reducestat = !this.reducestat;
  }

  Details: IDetail[] = [];

  ngOnInit() {
    this.bodyservice.getDetails().subscribe((Response =>{
      this.Details = Response;
    }));
  }

  temp:IDetail;

  getBranch(){
    if(this.Details.length && this.name){
      this.temp = this.Details.find(detail => detail.Name.toLowerCase()==this.name.toLowerCase());
      if(this.temp){
        return this.temp.Department;
      }
    }
  }
}