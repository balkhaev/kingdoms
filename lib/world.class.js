import Hookable from './base/hookable.base'

export default class World extends Hookable {
	constructor({ cards, events, kingdoms }) {
		super()

		this.day = 0
		this.week = 0
		this.month = 0

		this.cards = cards
		this.events = events
		this.kingdoms = kingdoms
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

	getState() {
		return {
			day: this.day,
			week: this.week,
			month: this.month,
			kingdoms: this.kingdoms.map(kingdom => kingdom.getState())
		}
	}
}