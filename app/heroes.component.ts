/**
 * Created by lerry on 8/3/16.
 */
import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

import {Hero} from './hero';
import {HeroService} from "./hero.services";

@Component({
    selector: 'my-heroes',
    templateUrl: 'app/heroes.component.html',
    styleUrls:['app/heroes.component.css']
})

export class HeroesComponent implements OnInit {
    selectedHero: Hero;
    heroes: Hero[];

    constructor(
        private router: Router,
        private heroService: HeroService) {
    }


    onSelect(hero: Hero) {
        this.selectedHero = hero
    }

    getHeroes() {
        this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    }

    ngOnInit() {
        this.getHeroes();
    }

    gotoDetail(){
        this.router.navigate(['/detail', this.selectedHero.id]);
    }
}

