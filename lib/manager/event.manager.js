import { getRandomKey, getProbability } from '../../utilities/random'

export default class EventManager {
	constructor(events = {}) {
		this.events = events

		this.getChance = this.getChance.bind(this)
	}

	getEvent(eventName) {
		if (!(eventName in this.events)) {
			return console.error(`[EventManager][getEvent] Event "${eventName}" not found`)
		}

		return this.events[eventName]
	}

	getRandom() {
		return getRandomKey(this.events)
	}

	getWeekEvents() {
		const chances = Object.keys(this.events).map(this.getChance)

		return getProbability(chances, 4)
	}

	getChance(eventName) {
		const event = this.getEvent(eventName)

		return {
			fn: event[eventName],
			score: event.score
		}
	}
}