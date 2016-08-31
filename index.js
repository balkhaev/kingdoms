import gameloop from 'node-gameloop'

import Game from './game'
import webServer from './web/server'
import logger from './logger'
import config from './config'

global.Mapgame = new Game(config)

Mapgame.init(require('./resources').default)
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