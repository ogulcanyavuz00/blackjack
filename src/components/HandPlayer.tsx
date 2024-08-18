import { useState } from "react";
import { deckOfCardsDescending } from "@/logic/totalDeckOfCards";
import type { Card } from "@/type/types";
import { IndividualCardUI } from "./IndividualCardUI";

export function HandPlayer() {
	const [playerHand, setPlayerHand] = useState<Card[]>([]);

	const addCardToPlayerHand = () => {};

	return <div></div>;
}
