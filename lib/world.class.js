import Hookable from './base/hookable.base'

export default class World extends Hookable {
	constructor() {
		super()

		this.day = 0
		this.week = 0
		this.month = 0

		this.history = []
		this.kingdoms = []
	}

	createKingdom(kingdomOpts) {
		const KingdomClass = game.kingdom.getClass(kingdomOpts.type)

		if (KingdomClass === null) {
			const msg = `[World][createKingdom] Kingdom type ${kingdomOpts.type} not found`

			console.error(msg)
			return Error(msg)
		}

		const kingdom = new KingdomClass(kingdomOpts)

		this.after('newDay', kingdom.newDay)
		this.after('newWeek', kingdom.newWeek)

		this.kingdoms.push(kingdom)

		return kingdom
	}

	removeKingdom(kingdomName) {
		if (!this.kingdoms.includes(kingdomName)) {
			return false
		}
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