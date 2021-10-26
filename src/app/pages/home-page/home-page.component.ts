import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  images = [
    {path: "assets/images/slider/slider_1.webp"},
    {path: "assets/images/slider/slider_2.webp"},
    {path: "assets/images/slider/slider_3.webp"},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
