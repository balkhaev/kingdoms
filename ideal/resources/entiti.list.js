export class EntityList extends Array {
	getAll() {
		return this
	}

	get(className) {
		return this.find(Item => Item.name === className)
	}

	exists(className) {
		return this.some(Item => Item.name === className)
	}
}

export default EntityList