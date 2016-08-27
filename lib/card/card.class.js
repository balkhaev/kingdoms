import Hookable from '../base/hookable.base'

export default class Card extends Hookable {
	constructor({ type }) {
		super()

		this.cardType = type
	}
}