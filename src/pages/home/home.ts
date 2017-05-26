import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ChuckNorrisProvider } from '../../providers/chuck-norris/chuck-norris';
import { RandomNumberFactsProvider } from '../../providers/random-number-facts/random-number-facts';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  public jokeText: string;
  public jokeImgSrc: string;

  public selectedNumber: number = 42;
  public randomFact: string;

  constructor(public navCtrl: NavController, private chuckNorrisProvider: ChuckNorrisProvider, private randomNumberFacts: RandomNumberFactsProvider) {

  }

  ngOnInit() {
      this.refresh();
  }

  refresh() {
    this.chuckNorrisProvider.getJokes()
          .subscribe(response => {
              let payload = response.json();
              this.jokeText = payload['value'];
              this.jokeImgSrc = payload['icon_url'];
          });

      this.randomNumberFacts.getRandomNumberFact(this.selectedNumber)
          .subscribe(response => {
              let payload = response._body;
              this.randomFact = payload;
          });
  }
}
