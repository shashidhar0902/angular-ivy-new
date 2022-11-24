import { HttpClient } from "@angular/common/http";
import { Injectable, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { IDetail } from "../Idetail";

@Injectable({
  providedIn: 'root'
})
export class bodyService implements OnInit{
  
  constructor(private http: HttpClient){};

  url = "https://shashidhar0902.github.io/details.json";

  getDetails(): Observable<IDetail[]>{
    return this.http.get<IDetail[]>(this.url);
  }

  ngOnInit(){

  }
}