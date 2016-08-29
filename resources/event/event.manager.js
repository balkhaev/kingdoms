import EventClass from './event.class'
import Accident from './types/accident'

import { getRandomKey, getRandomElement, getProbability } from '../../utilities/random'

export const eventTypes = {
	accident: Accident
}

export default class EventManager extends Mapgame.base.Manager {
	constructor({ entitiesPath }) {
		super({ type: 'event', Class: EventClass, classTypes: eventTypes, entitiesPath })

		this.newWeek = this.newWeek.bind(this)
		this.getChance = this.getChance.bind(this)
	}

	getRandom(limit) {
		if (typeof limit === 'undefined') {
			return getRandomKey(this.entities)
		}

		return this.getRandoms(limit)
	}

	getRandoms(limit) {
		const chances = Object.keys(this.entities).map(this.getChance)

		return getProbability(chances, limit)
	}

	getChance(event) {
		if (typeof event === 'string' || event instanceof String) {
			event = this.get(event)
		}

		return {
			fn: event,
			score: event.score
		}
	}

	newWeek(world) {
		world.getKingdoms().forEach(kingdom => {
			kingdom.resetHooks()

			const monthEvents = kingdom.getMonthEvents()
			const randomEvent = getRandomElement(monthEvents)

			kingdom.setWeekEvent(randomEvent)

			randomEvent.hooks(kingdom)
		})

		console.log(`[${this._managerName}][Hook] -> [World][after][newWeek] New week: ${world.week}`)
	}

	newMonth(world) {

	}
}