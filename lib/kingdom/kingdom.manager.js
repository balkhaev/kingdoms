export default class KingdomManager {
	constructor(kingdomTypes = {}) {
		this.kingdomTypes = kingdomTypes
	}

	create(kingdomType, kingdomOpts = {}) {
		if (!(kingdomType in this.kingdomTypes)) {
			return console.error(`[KingdomManager][create] Kingdom "${kingdomType}" not found`)
		}

		return new this.kingdomTypes[kingdomType](kingdomOpts)
	}
}