import Hookable from '../base/hookable.class'
import eventGenerator, {registerEvents} from '../lib/eventGenerator'

registerEvents()

export default class Kingdom extends Hookable {
	constructor({ name, residents = 1, coffer = 1000 }) {
		super()

		this.name = name
		this.coffer = coffer
		this.residents = residents
		this.events = []
		this.history = []
		this.event = false
	}

	startEvent(world) {
		const event = eventGenerator()

		this.events.push(event)

		//event.loop(this, world)

		return event.name
	}

	newDay(world) {
		this.history.push(this.getSummaryDay())

		this.event = this.startEvent(world)
	}

	addResidents(residentsCount) {
		this.residents += residentsCount
	}

	removeResidents(residentsCount) {
		this.residents -= residentsCount
	}

	update() {
		this.call('kingdomPreLoop')

		this.coffer += this.residents * 2

		this.call('kingdomPostLoop')
	}

	getSummaryDay() {
		return `- Kingdom ${this.name} -
Event: ${this.event}
Residents: ${this.residents}
Coffer: ${this.coffer}`
	}
}