import Hookable from '../base/hookable.base'

export default class World extends Hookable {
	constructor() {
		super()

		this.day = 0
		this.week = 0
		this.month = 0

		this.history = []
		this.kingdoms = []
	}

	createKingdom(kingdomName, opts) {
		const kingdom = game.kingdom.create(kingdomName, opts)

		this.kingdoms.push(kingdom)

		return kingdom
	}

	newWeek() {
		this.callBefore('newWeek', this.week)

		this.week++

		this.callAfter('newWeek', this.week)
	}

	newDay() {
		this.callBefore('newDay', this.day)

		this.history.push(this.getSummaryDay())

		this.day++

		this.callAfter('newDay', this.day)
	}

	getSummaryDay() {
		const kingdoms = this.kingdoms.map(kingdom => kingdom.getSummaryDay())

		return `-=-=- Day ${this.day} -=-=-
${kingdoms.join("\n\n")}`
	}
}