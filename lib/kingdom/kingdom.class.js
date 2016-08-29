import Hookable from '../base/hookable.base'

export default class Kingdom extends Hookable {
	constructor({ name, type, residents = 1, coffer = 1000 } = {}) {
		super()

		this.history = []

		this.name = name
		this.type = type
		this.coffer = coffer
		this.residents = residents
	}

	addResidents(count = 0) {
		this.residents += count
	}

	removeResidents(count = 0) {
		this.residents -= count
	}

	newMonth(monthEvents) {
		this.callBefore('newMonth', this)

		this.setMonthEvents(monthEvents)

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
	}

	getMonthEvents() {
		return this.monthEvents
	}

	setMonthEvents(monthEvents) {
		this.monthEvents = monthEvents
	}

	setWeekEvent(event) {
		this.event = event
	}

	getState() {
		return {
			name: this.name,
			type: this.type,
			coffer: this.coffer,
			residents: this.residents
		}
	}
}