import { Component, OnInit } from '@angular/core';
import { UrlHandlingStrategy } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-estudios',
  templateUrl: './estudios.component.html',
  styleUrls: ['./estudios.component.css']
})
export class EstudiosComponent implements OnInit {

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
        items: 1
      },
      740: {
        items: 2
      },
      940: {
        items: 3
      }
    },
    nav: true
  }


  estudios:any[]=[
{instituto:"Universidad de Carabobo", logo:"../assets/img/UC_logo.png",carrera:"Contaduria Publica"},
{instituto:"UTN FRGP", logo:"../assets/img/logo-utn.png",carrera:"Tecnicatura Universitaria en Programacion"},




  ]



}
