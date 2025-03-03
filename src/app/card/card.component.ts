import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  @Input() value: string = '';
  @Input() flipped: boolean = false;
  @Input() matched: boolean = false;

  @Output() cardClick = new EventEmitter<void>();

  flipCard(): void {
    if (!this.matched) {
      console.log(this.matched);
      this.cardClick.emit();
    } else {
      console.log('Card already matched');
    }
  }
}
