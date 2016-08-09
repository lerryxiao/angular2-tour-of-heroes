/**
 * Created by lerry on 8/3/16.
 */
import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

import {Hero} from './hero';
import {HeroService} from "./hero.services";
import { HeroDetailComponent } from './hero-detail.component';

@Component({
    selector: 'my-heroes',
    templateUrl: 'app/heroes.component.html',
    styleUrls:['app/heroes.component.css'],
    directives:[ HeroDetailComponent ]
})

export class HeroesComponent implements OnInit {
    selectedHero: Hero;
    heroes: Hero[];
    addingHero: boolean;
    error: any;

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

    addHero() {
        this.addingHero = true;
        this.selectedHero = null;
    }

    close(savedHero: Hero) {
        this.addingHero = false;
        if (savedHero) { this.getHeroes(); }
    }

    deleteHero(hero: Hero, event: any) {
        event.stopPropagation();
        this.heroService
            .delete(hero)
            .then(res => {
                this.heroes = this.heroes.filter(h => h !== hero);
                if (this.selectedHero === hero) { this.selectedHero = null; }
            })
            .catch(error => this.error = error);
    }


}

