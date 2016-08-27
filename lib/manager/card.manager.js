export default class CardManager {
	constructor(cards = {}) {
		this.cards = cards
	}

	getCard(cardName) {
		return this.cards[cardName]
	}
}