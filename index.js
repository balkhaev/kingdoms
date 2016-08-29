import gameloop from 'node-gameloop'

import Game from './game'
import webServer from './web/server'
import logger from './logger'

global.Mapgame = new Game({
	daysLimit: 30,
	resourcePath: './resources'
})

Mapgame.init()
webServer(Mapgame)

Mapgame.after('end', game => {
	console.log(Mapgame.world.getState())
})

logger(Mapgame, 'world')

Mapgame.start()

export function start() {
	Mapgame.kingdom.entities.forEach(kingdom => {
		Mapgame.world.createKingdom(kingdom)
	})

	const gameId = gameloop.setGameLoop(Mapgame::Mapgame.loop, 1000 / 30)

	console.log(`[Mapgame][start] New game: ${this.gameId}`)
}