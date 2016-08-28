import EventClass from './event.class'
import Accident from './types/accident'

import { getRandomKey, getProbability } from '../../utilities/random'
import Manager from '../base/manager.base'

export const eventTypes = {
	accident: Accident
}

export default class EventManager extends Manager {
	constructor({ entitiesPath }) {
		super({ type: 'event', Class: EventClass, classTypes: eventTypes, entitiesPath })
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
		if (typeof event === 'string' && event instanceof String) {
			event = this.get(event)
		}

		return {
			fn: event,
			score: event.score
		}
	}
}