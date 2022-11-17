import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  showImage: boolean = false;
  products: any[] = [
    {
      ProductId: 1,
      ProductName: 'One',
      productImageUrl: '../../assets/Images/One.jpg',
    },
    {
      ProductId: 2,
      ProductName: 'Two',
      productImageUrl: '../../assets/Images/Two.jpg',
    },
    {
      ProductId: 3,
      ProductName: 'Three',
      productImageUrl: '../../assets/Images/Three.jpg',
    },
    {
      ProductId: 4,
      ProductName: 'Four',
      productImageUrl: '../../assets/Images/Four.jpg',
    },
  ];

  toggleImage() {
    this.showImage = !this.showImage;
  }
}
