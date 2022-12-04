import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-progressbar',
  templateUrl: './progressbar.component.html',
  styleUrls: ['./progressbar.component.css']
})
export class ProgressbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['<i class="fa fa-caret-left"></i>', '<i class="fa fa-caret-right"></i>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 5
      }
    },
    nav: true
  }



  progres:any[]=[

{nombre:"Html.", porcentaje:80, url:"../assets/img/html.png" },
{nombre:"Css.", porcentaje:70, url:"../assets/img/CSS3_logo.svg.png"},
{nombre:"Bootstrap.", porcentaje:65, url:"../assets/img/Bootstrap_logo.svg.png"},
{nombre:"Javascript.", porcentaje:75, url:"../assets/img/s.png"},
{nombre:"Typescript.", porcentaje:80, url:"../assets/Typescript_logo_2020.svg.png"},
{nombre:"Angular.", porcentaje:75, url:"../assets/img/A.png"},
{nombre:"Github.", porcentaje:90, url:"../assets/img/G.png"},












  ]








}
