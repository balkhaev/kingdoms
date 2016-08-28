import Hookable from '../base/hookable.base'

export default class Kingdom extends Hookable {
	constructor({ name, type, residents = 1, coffer = 1000 } = {}) {
		super()

		this.events = []
		this.history = []

		this.name = name
		this.type = type
		this.coffer = coffer
		this.residents = residents

		this.newDay = this.newDay.bind(this)
		this.newWeek = this.newWeek.bind(this)
	}

	newWeek(week) {
		return 'lal'
	}

	newDay(day) {
		this.coffer += this.residents * 2

		this.history.push(this.getSummaryDay())
	}

	getSummaryDay() {
		return `- Kingdom ${this.name} -
Event: ${this.event}
Residents: ${this.residents}
Coffer: ${this.coffer}`
	}
}