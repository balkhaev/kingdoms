import Mapgame from './mapgame'

global.game = new Mapgame({
	daysLimit: 50,
	entities: {
		cardsPath: './entities/cards',
		eventsPath: './entities/events',
		kingdomsPath: './entities/kingdoms',
	}
})

game.init()

game.after('end', summary => {
	console.log(summary)
})

game.world.after('newWeek', week => {
	console.log(`[Index][Hook] -> [World][after][newWeek] New week: ${week}`)
})

game.start()
