import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from './card/card.component';
import { NgForOf } from '@angular/common';
import { Card, cards } from '../data/cards.data';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CardComponent, NgForOf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'another-angular-test';
  cards: Card[] = [];

  constructor() {
    this.shuffleCards();
  }

  shuffleCards(): void {
    this.cards = [...cards];

    for (let i = this.cards.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]]; // Swap elements
    }
  }
  onCardClick(card: Card): void {
    if (card.flipped || card.matched) return;
    card.flipped = true;
    console.log(`Card clicked: ${card.value}`);
    const nextFlippedCard = this.cards.find(
      (c) => c.flipped && !c.matched && c.id !== card.id,
    );
    if (nextFlippedCard) {
      if (nextFlippedCard.value === card.value) {
        console.log(`Matched cards: ${nextFlippedCard.id} and ${card.id}`);
        nextFlippedCard.matched = true;
        card.matched = true;
      } else {
        setTimeout(() => {
          nextFlippedCard.flipped = false;
          card.flipped = false;
        }, 1000);
      }
    }
  }
}
