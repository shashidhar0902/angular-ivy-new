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
  det: IDetail;
  constructor(private http: HttpClient) {}
  ngOnInit() {
    this.http
      .get('https://gorest.co.in/public/v2/posts')
      .subscribe((Response) => {
        // If response comes hideloader() function is called
        // to hide that loader
        console.log('Response');
        console.log(Response);
        this.det = Response;
        this.details = this.det.list;
        console.log(this.det + "csdaf");
      });
  }
}
