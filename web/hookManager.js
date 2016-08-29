import KingdomFace from './faces/kingdom.json'

export default function hookManager(game, router) {
	const kingdomFace = new KingdomFace()

	game.world.after('newDay', (day, world) => {
		const state = world.getState()

		kingdomFace.pushHistory(state)

		kingdomFace.setState(state)
	})

	router.get('/history', ctx => {
		ctx.body = kingdomFace.getHistory()
	})
}