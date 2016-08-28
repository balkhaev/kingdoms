import path from 'path'
import gameloop from 'node-gameloop'

import Hookable from './lib/base/hookable.base'

import World from './lib/world.class'

import CardManager from './lib/card/card.manager'
import EventManager from './lib/event/event.manager'
import KingdomManager from './lib/kingdom/kingdom.manager'

export default class Mapgame extends Hookable {
	constructor({ daysLimit = 365, entities: { cardsPath, eventsPath, kingdomsPath }  } = {}) {
		super()

		this.frame = 0

		this.daysLimit = daysLimit

		this.cardsPath = path.join(__dirname, cardsPath)
		this.eventsPath = path.join(__dirname, eventsPath)
		this.kingdomsPath = path.join(__dirname, kingdomsPath)

		this.card = new CardManager({ entitiesPath: this.cardsPath })
		this.event = new EventManager({ entitiesPath: this.eventsPath })
		this.kingdom = new KingdomManager({ entitiesPath: this.kingdomsPath })

		this.end = this.end.bind(this)
		this.loop = this.loop.bind(this)
	}

	init() {
		this.world = new World(this.daysLimit)

		this.card.init()
		this.event.init()
		this.kingdom.init()
	}

	start() {
		this.kingdom.entities.forEach(kingdom => {
			this.world.createKingdom(kingdom)
		})

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