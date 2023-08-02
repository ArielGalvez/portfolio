export const rainBowColors = [
	'166,218,248',
	'211,203,255',
	'171,238,219',
	'254,202,177',
	'254,177,191'
];

export function random(from: number, to: number) {
	return ~~(Math.random() * (to - from + 1) + from);
}
