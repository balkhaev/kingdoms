export class Kingdom {
	constructor({ king, name, coffer = 0, population = 0 }) {
		this.king = king
		this.name = name
		this.coffer = coffer
		this.population = population
	}
}

export default Kingdom