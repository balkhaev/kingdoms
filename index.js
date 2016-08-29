import gameloop from 'node-gameloop'

import Mapgame from './mapgame'
import webServer from './web/server'

global.game = new Mapgame({
	daysLimit: 30,
	entities: {
		cardsPath: './entities/cards',
		eventsPath: './entities/events',
		kingdomsPath: './entities/kingdoms',
	}
})

game.init()

webServer(game)

game.after('end', game => {
	console.log(game.world.getState())
})

game.start()

export function start() {
	game.kingdom.entities.forEach(kingdom => {
		game.world.createKingdom(kingdom)
	})

	const gameId = gameloop.setGameLoop(game::game.loop, 1000 / 30)

	console.log(`[Mapgame][start] New game: ${this.gameId}`)
}