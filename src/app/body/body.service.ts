import { Injectable, OnInit } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class bodyService implements OnInit{
  
  constructor(private http: Htt)
  getDetails(): any[]{
    return [
      {
        "Name": "Reeth",
        "Department": "Biotechnology"
      },
      {
        "Name": "Shashidhar",
        "Department": "Biotechnology"
      },
      {
        "Name": "Sundaram",
        "Department": "EEE"
      }
    ]
    ;
  }

  ngOnInit(){

  }
}