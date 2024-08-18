import { create } from "zustand";
import { deckOfCardsDescending } from "@/logic/totalDeckOfCards";
import type { Card } from "@/type/types";

type CardsStore = {
	fullDeck: Card[];
	computerDeck: Card[];
	playerDeck: Card[];
};

export const cardsStore = create<CardsStore>((set) => ({
	fullDeck: deckOfCardsDescending,
	computerDeck: [] as Card[],
	playerDeck: [] as Card[],
}));
