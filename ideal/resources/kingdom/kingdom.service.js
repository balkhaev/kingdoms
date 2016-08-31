export class KingdomService {
	constructor({ resources, kingdoms }) {
		this.resource = resources
		this.kingdoms = kingdoms
	}

	create(kingdomType, ...args) {
		if (!(this.resource.types.exists(kingdomType))) {
			throw new Error({ kingdomType })
		}

		const Kingdom = this.resource.types.get(kingdomType)
		const kingdom = new Kingdom(...args)

		this.kingdoms.push(kingdom)

		return kingdom
	}
}

export default KingdomService