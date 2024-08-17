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

// export function IndividualCardUI({ cardValue, suit, numericalValue }: Card) {
// 	return (
// 		<div className="relative w-56 min-h-80 border-emerald-950 border-8 border-solid m-10">
// 			<div className="absolute top-0 left-0">{cardValue}</div>
// 			<div className="absolute top-0 right-0">{cardValue}</div>
// 			<div className="absolute bottom-0 left-0">{cardValue}</div>
// 			<div className="absolute bottom-0 right-0">{cardValue}</div>
// 		</div>
// 	);
// }
