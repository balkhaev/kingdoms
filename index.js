import gameloop from 'node-gameloop'
import World from './entities/world.class'

const kingdoms = ['Narkia', 'Heshelpek']
const world = new World()

kingdoms.forEach(kingdomName => {
	world.create('kingdom', {
		name: kingdomName
	})
})

var id = gameloop.setGameLoop(world.loop, 1000 / 30)

setTimeout(function() {
	console.log(world.getSummary())
	gameloop.clearGameLoop(id)
}, 2000)