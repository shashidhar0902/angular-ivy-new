import { Component, OnInit } from '@angular/core';
import { IDetail } from '../Idetail';
import { bodyService } from './body.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})

export class BodyComponent implements OnInit {
  imageLink="https://picsum.photos/536/354";
  constructor(private bodyservice: bodyService) { }
  name: string ;

  rotate180opt: boolean = false;
  resetImg: boolean = true;
  degg:number = 0;
  //degg = 24;

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
  ngOnInit() {

  }
  Details: IDetail[] = this.bodyservice.getDetails();

  temp:IDetail;
  getBranch(){
    this.temp = this.Details.find(detail => detail.Name==this.name);
    if(this.temp){
      return this.temp.Department;
    }   
  }

}