import type { IFruit } from 'types';

export default async function getFruits(id: string): Promise<IFruit[]> {
	console.log(id);
	const response = await fetch(
		'https://614c99f03c438c00179faa84.mockapi.io/fruits'
	)
	return response.json() as Promise<IFruit[]>
}
