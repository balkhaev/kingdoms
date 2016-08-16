import events from '../events/index'
import { getRandomKey } from '../utilities/random'
import hookManager from './hookManager'

export function registerEvents() {
	const probabilities = []
	const eventsTotalScore = Object.keys(events).map(eventKey => events[eventKey].score).reduce((sum, score) => {
		return sum + score
	})

	const eventsOnePercent = eventsTotalScore / 1000

	Object.keys(events).forEach(eventName => {
		const event = events[eventName]
		const eventChance = Math.floor(event.score / eventsOnePercent)
		console.log(event.score, eventsOnePercent, eventChance)

		probabilities.push({capability: event, chance: eventChance})
	})

	console.log(probabilities)
}

export function getRandomEvent() {
	return getRandomKey(events)
}

export default function eventGenerator(eventName = getRandomEvent()) {
	return events[eventName]
	/*
	const probability = getChance(chance)

	return probability ? event : false
	*/
}