import gameloop from 'node-gameloop'

import Hookable from './lib/base/hookable.base'

import Card from './lib/class/card.class'
import Event from './lib/class/event.class'
import World from './lib/class/world.class'
import Kingdom from './lib/class/kingdom.class'

import DateManager from './lib/manager/date.manager'
import CardManager from './lib/manager/card.manager'
import EventManager from './lib/manager/event.manager'
import KingdomManager from './lib/manager/kingdom.manager'

export default class Mapgame extends Hookable {
	constructor({ daysLimit = 365 } = {}) {
		super()

		this.frame = 0

		this.daysLimit = daysLimit

		this.class = {
			Card,
			Event,
			Kingdom
		}

		this.end = this.end.bind(this)
		this.loop = this.loop.bind(this)
	}

	init({ cards = {}, events = {}, kingdoms = {} } = {}) {
		this.world = new World(this.daysLimit)

		this.date = new DateManager()
		this.card = new CardManager(cards)
		this.event = new EventManager(events)
		this.kingdom = new KingdomManager(kingdoms)

		console.log(this.event.getWeekEvents())
	}

	start() {
		this.gameId = gameloop.setGameLoop(this.loop, 1000 / 30)

		console.log(`[Mapgame][start] New game: ${this.gameId}`)
	}

	loop(delta) {
		const isNewWeek = this.frame % 7 === 0

		this.callBefore('loop', this)

		this.world.newDay()

		if (isNewWeek) {
			this.world.newWeek()
		}

		this.frame++

		this.callAfter('loop', this)

		if (this.frame >= this.daysLimit) {
			this.end()
		}
	}

	end() {
		gameloop.clearGameLoop(this.gameId)

		this.callAfter('end', this.getSummary())
	}

	getSummary() {
		return `Frames: ${this.frame}
======================
${this.world.history.join("\n\n")}`
	}
}