import { deckOfCardsDescending } from "@/logic/totalDeckOfCards";
import { useState } from "react";
import type { Card } from "@/type/types";

export function DeckOfCardsDescending() {
	const [mainDeck, setMainDeck] = useState<Card[]>(deckOfCardsDescending);
	const [cardRemovedFromTheMainDeck, setCardRemovedFromTheMainDeck] =
		useState<Card | null>(null);

	const removeLastElement = () => {
		if (mainDeck.length > 0) {
			const newMainDeck = [...mainDeck];
			const removedCard = newMainDeck.pop();
			setMainDeck(newMainDeck);
			setCardRemovedFromTheMainDeck(removedCard ?? null);
		}
	};
}
