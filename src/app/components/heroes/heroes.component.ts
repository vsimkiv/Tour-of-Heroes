import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/models/Hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  hero : Hero = {
    id: 1,
    name: "Windstorm",
    birthday: new Date(1990, 6, 26)
  }; 

  constructor() { }

  ngOnInit() {
  }

}
