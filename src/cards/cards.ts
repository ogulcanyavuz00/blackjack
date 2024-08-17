import Stack from "ts-data.stack";
import { cardValues, suits } from "@/type/types";
import { shuffleArray } from "@/utils/randomizeUtils";
import type { Card, CardValue, NumericalValue } from "@/type/types";

function calculateNumericalValue(cardValue: CardValue): NumericalValue {
	if (cardValue === "ace") {
		return "ace";
	} else {
		const parsedValue = parseInt(cardValue, 10);
		return isNaN(parsedValue) ? 10 : (parsedValue as NumericalValue);
	}
}

const aDeckOfCards: Card[] = [];

for (const cardValue of cardValues) {
	const numericalValue = calculateNumericalValue(cardValue);
	for (const suit of suits) {
		const card: Card = { cardValue, suit, numericalValue };
		aDeckOfCards.push(card);
	}
}

const randomizedADeckOfCards = shuffleArray(aDeckOfCards);

// const cardStack = new Stack<Card>();

// for (const card of randomizedADeckOfCards) {
// 	cardStack.push(card);
// }

export { randomizedADeckOfCards };
