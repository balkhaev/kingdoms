export default class Event extends Mapgame.base.Hookable {
	constructor({ name, score }) {
		super()

		this.name = name
		this.score = score
	}
}