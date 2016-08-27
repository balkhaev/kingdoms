export default class BaseCard extends game.class.Card {
	constructor({ title, health = 100 }) {
		super({ type: 'BaseCard' })

		this.title = title
		this.health = 100
	}
}