import { deckOfCardsDescending } from "@/logic/totalDeckOfCards";
import { IndividualCardUI } from "./IndividualCardUI";

export function ADeckOfCardUI() {
	return deckOfCardsDescending.map((v) => (
		<IndividualCardUI
			key={`${v.sourceOfSvg}`}
			cardValue={v.cardValue}
			suit={v.suit}
			numericalValue={v.numericalValue}
			sourceOfSvg={v.sourceOfSvg}
		/>
	));
}
