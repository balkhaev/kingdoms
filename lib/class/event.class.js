import Hookable from '../base/hookable.base'

export default class Event extends Hookable {
	constructor({ name, score }) {
		super()

		this.name = name
		this.score = score
	}
}