import type { Card } from "@/type/types";

export function IndividualCardUI({ cardValue, suit, numericalValue }: Card) {
	return (
		<div className="relative w-56 min-h-80 border-emerald-950 border-8 border-solid m-10">
			<div className="absolute top-0 left-0">{cardValue}</div>
			<div className="absolute top-0 right-0">{cardValue}</div>
			<div className="absolute bottom-0 left-0">{cardValue}</div>
			<div className="absolute bottom-0 right-0">{cardValue}</div>
		</div>
	);
}
