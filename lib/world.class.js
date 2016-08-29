import Hookable from './base/hookable.base'

export default class World extends Hookable {
	constructor() {
		super()

		this.day = 0
		this.week = 0
		this.month = 0

		this.kingdoms = []
	}

	addDay() {
		this.day += 1
	}

	addWeek() {
		this.week += 1
	}

	addMonth() {
		this.month += 1
	}

	createKingdom(kingdomOpts) {
		const KingdomClass = Mapgame.kingdom.getClass(kingdomOpts.type)

		if (KingdomClass === null) {
			const msg = `[World][createKingdom] Kingdom type ${kingdomOpts.type} not found`

			console.error(msg)
			return Error(msg)
		}

		const kingdom = new KingdomClass(kingdomOpts)

		this.kingdoms.push(kingdom)

		return kingdom
	}

	kingdomExists(kingdomName) {
		return this.kingdoms.includes(kingdomName)
	}

	removeKingdom(kingdomName) {
		if (!this.kingdomExists(kingdomName)) {
			return false
		}
	}

	getKingdom(kingdomName) {
		if (!this.kingdomExists(kingdomName)) {
			return null
		}

		return this.kingdoms.find(kingdom => kingdom.name === kingdomName);
	}

	getKingdoms() {
		return this.kingdoms
	}

	updateKingdoms(updateFn) {
		this.kingdoms.forEach(updateFn)
	}

	init() {

	}

	getState() {
		return {
			day: this.day,
			week: this.week,
			month: this.month,
			kingdoms: this.kingdoms.map(kingdom => kingdom.getState())
		}
	}
}