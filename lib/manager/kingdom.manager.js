export default class KingdomManager {
	constructor(kingdoms = {}) {
		this.kingdoms = kingdoms
	}

	create(kingdomName, kingdomOpts = {}) {
		if (!(kingdomName in this.kingdoms)) {
			return console.error(`[KingdomManager][create] Kingdom "${kingdomName}" not found`)
		}

		const kingdom = new this.kingdoms[kingdomName](kingdomOpts)

		game.world.after('newDay', kingdom.newDay)
		game.world.after('newWeek', kingdom.newWeek)

		return kingdom
	}
}