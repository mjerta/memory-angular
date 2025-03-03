export interface Card {
  id: number;
  value: string;
  flipped: boolean;
  matched: boolean;
}

export const cards: Card[] = Array.from({ length: 26 }, (_, i) => [
  { id: i * 2 + 1, value: String.fromCharCode(65 + i), flipped: false, matched: false },
  { id: i * 2 + 2, value: String.fromCharCode(65 + i), flipped: false, matched: false },
]).flat();

