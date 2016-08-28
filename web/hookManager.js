import KingdomFace from './faces/kingdom.json'

export default function hookManager(game, router) {
	const kingdomFace = new KingdomFace()

	game.world.after('newDay', kingdomFace.update)

	router.get('/state', ctx => {
		ctx.body = kingdomFace.getState()
	})
}