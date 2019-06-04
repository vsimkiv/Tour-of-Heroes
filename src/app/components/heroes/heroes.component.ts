import { HEROES } from './../../mocks/mock-heroes';
import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/models/Hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes = HEROES;
  selectedHero: Hero;

  constructor() { }

  ngOnInit() {
  }

  onSelect(hero: Hero):void {
    this.selectedHero = hero;
  }

}
