import Hookable from '../base/hookable.base'

export default class Kingdom extends Hookable {
	constructor({ name, type, residents = 1, coffer = 1000 } = {}) {
		super()

		this.history = []

		this.name = name
		this.type = type
		this.coffer = coffer
		this.residents = residents

		this.newDay = this.newDay.bind(this)
		this.newWeek = this.newWeek.bind(this)
	}

	newMonth(world) {
		this.callBefore('newMonth', this)

		this.events = game.event.getRandom(4)

		this.callAfter('newMonth', this)
	}

	newWeek(world) {
		this.callBefore('newWeek', this)

		this.callAfter('newWeek', this)
	}

	newDay(world) {
		this.callBefore('newDay', this)

		this.coffer += this.residents * 2

		this.callAfter('newDay', this)

		this.history.push(this.getSummaryDay())
	}

	getSummaryDay() {
		return `- Kingdom ${this.name} -
Residents: ${this.residents}
Coffer: ${this.coffer}`
	}
}