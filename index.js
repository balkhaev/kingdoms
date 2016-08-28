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

game.after('end', summary => {
	console.log(summary)
})

game.start()
