import Mapgame from './mapgame'

const kingdoms = ['Narkia', 'Heshelpek']

global.game = new Mapgame({
	daysLimit: 50
})

game.init({
	cards: require('./entities/cards').default,
	events: require('./entities/events').default,
	kingdoms: require('./entities/kingdoms').default
})

kingdoms.forEach(kingdomName => {
	game.world.createKingdom(kingdomName)
})

game.after('end', summary => {
	console.log(summary)
})

game.world.after('newWeek', week => {
	console.log(`[Hook][[World][newWeek] New week: ${week}`)
})

game.start()
