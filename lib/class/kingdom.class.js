import EventManager from '../manager/event.manager'
import Hookable from '../base/hookable.base'

export default class Kingdom extends Hookable {
	constructor({ name, residents = 1, coffer = 1000 } = {}) {
		super()

		this.name = name
		this.coffer = coffer
		this.residents = residents
		this.events = new EventManager()
		this.history = []
		this.event = false

		this.newDay = this.newDay.bind(this)
		this.newWeek = this.newWeek.bind(this)
	}

	addResidents(residentsCount) {
		this.residents += residentsCount
	}

	removeResidents(residentsCount) {
		this.residents -= residentsCount
	}

	newWeek() {

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