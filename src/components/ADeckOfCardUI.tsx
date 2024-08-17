import { randomizedADeckOfCards } from "@/cards/cards";
import { IndividualCardUI } from "./IndividualCardUI";

export function ADeckOfCardUI() {
	return randomizedADeckOfCards.map((v) => (
		<IndividualCardUI
			key={`${v.cardValue}${v.suit}${v.numericalValue}`}
			cardValue={v.cardValue}
			suit={v.suit}
			numericalValue={v.numericalValue}
		/>
	));
}
