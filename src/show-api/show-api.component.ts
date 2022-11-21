import { Component, OnInit } from '@angular/core';
import { IDetail } from './details';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-show-api',
  templateUrl: './show-api.component.html',
  styleUrls: ['./show-api.component.css'],
})
export class ShowApiComponent implements OnInit {
  details: IDetail[];
  constructor(private http: HttpClient) {}
  ngOnInit() {
    this.http
      .get('https://gorest.co.in/public/v2/posts')
      .subscribe((Response : IDetail[]) =>  {
        // If response comes hideloader() function is called
        // to hide that loader
        console.log(Response);
        this.details = Response;
      });
  }
}
