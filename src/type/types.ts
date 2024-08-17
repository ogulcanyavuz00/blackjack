const cardValues = [
	"2",
	"3",
	"4",
	"5",
	"6",
	"7",
	"8",
	"9",
	"10",
	"J",
	"Q",
	"K",
	"A",
] as const;

const suits = ["hearts", "diamonds", "spades", "clubs"] as const;

const numericalValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, "A"] as const;

type CardValue = (typeof cardValues)[number];
type Suit = (typeof suits)[number];
type NumericalValue = (typeof numericalValues)[number];

type Card = {
	cardValue: CardValue;
	suit: Suit;
	numericalValue: NumericalValue;
};

export { cardValues, suits };
export type { Card, CardValue, NumericalValue };
