import Card from '../card.class'

export default class BaseCard extends Card {
	constructor({ title, health = 100 }) {
		super({ type: 'BaseCard' })

		this.title = title
		this.health = 100
	}
}