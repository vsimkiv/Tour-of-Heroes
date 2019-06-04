import { Injectable } from '@angular/core';


import { Observable, of } from 'rxjs';

import { MessageService } from './message.service';
import { HEROES } from '../mocks/mock-heroes';
import { Hero } from '../models/Hero';


@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService : fetched heroes');
    return of(HEROES);
  }
}
