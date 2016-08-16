export default {
	name: 'Plague',
	score: 200,

	kingdomPreLoop(kingdom) {
		kingdom.removeResidents(10)
	}
}