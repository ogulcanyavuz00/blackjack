import type { Card } from "@/type/types";
import Image from "next/image";

export function IndividualCardUI({
	cardValue,
	suit,
	numericalValue,
	sourceOfSvg,
}: Card) {
	return (
		<div
			data-card-value={cardValue}
			data-suit={suit}
			data-numerical-value={numericalValue}
		>
			<Image
				src={sourceOfSvg}
				alt={`${cardValue.toUpperCase()} of ${suit}`}
				width={100}
				height={70}
			/>
		</div>
	);
}
