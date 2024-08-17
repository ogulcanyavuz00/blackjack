import { randomizedADeckOfCards } from "@/cards/cards";
import { IndividualCardUI } from "./IndividualCardUI";

export function ADeckOfCardUI() {
	return randomizedADeckOfCards.map((v) => (
		<IndividualCardUI
			key={`${v.sourceOfSvg}`}
			cardValue={v.cardValue}
			suit={v.suit}
			numericalValue={v.numericalValue}
			sourceOfSvg={v.sourceOfSvg}
		/>
	));
}
