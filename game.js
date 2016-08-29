import path from 'path'
import gameloop from 'node-gameloop'

import Hookable from './lib/base/hookable.base'
import Manager from './lib/base/manager.base'
import World from './lib/world.class'
import ResourceManager from './lib/manager/resource.manager'
import capitalize from './utilities/capitalize'

export default class Game extends Hookable {
	constructor({ daysLimit, resourcePath } = {}) {
		super()

		this.frame = 0

		this.base = {
			Hookable,
			Manager
		}

		this.daysLimit = daysLimit
		this.resourcePath = path.join(__dirname, resourcePath)

		this.resources = new ResourceManager({ resourcePath: this.resourcePath })
		this.world = new World(this.daysLimit)
	}

	init() {
		this.world.init()
		this.resources.init()

		this.initHooks()

		return this
	}

	initHooks() {
		// this.world.after('newWeek', this.event.newWeek)
	}

	start() {
		// this.kingdom.entities.forEach(kingdom => {
		// 	this.world.createKingdom(kingdom)
		// })

		this.gameId = gameloop.setGameLoop(::this.loop, 1000 / 30)

		console.log(`[Mapgame][start] New game: ${this.gameId}`)

		return this
	}

	loop(delta) {
		const isNewWeek = this.frame % 7 === 0
		const isNewMonth = this.frame % 30 === 0

		this.callBefore('loop', this.frame, this)

		if (isNewMonth) {
			this.newPeriod('month')
		}

		if (isNewWeek) {
			this.newPeriod('week')
		}

		this.newPeriod('day')

		this.frame++

		this.callAfter('loop', this.frame, this)

		if (this.frame >= this.daysLimit) {
			this.end()
		}
	}

	newPeriod(period) {
		const periodKey = 'new' + capitalize(period)

		this.world.callBefore(periodKey, this.world[period], this.world)

		switch(period) {
			case 'day':
				this.world.addDay()
				this.world.updateKingdoms(kingdom => {
					const kingdomResidents = kingdom.getResidents()

					kingdom.addCoffer(kingdomResidents * 2)
				})
				break
			case 'week':
				this.world.addWeek()
				break
			case 'month':
				this.world.addMonth()
				this.world.updateKingdoms(kingdom => {
					const monthEvents = Mapgame.event.getRandom(4)

					kingdom.setMonthEvents(monthEvents)
				})
				break
		}

		this.world.callAfter(periodKey, this.world[period], this.world)
	}

	end() {
		this.callBefore('end', this.gameId, this)

		gameloop.clearGameLoop(this.gameId)

		this.callAfter('end', this.gameId, this)

		return this
	}
}