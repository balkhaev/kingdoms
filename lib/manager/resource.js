export class Resource {
	constructor({ types, Class }) {
		this.types = types
		this.Class = Class
	}

	setClass(Class) {
		this.Class = Class
	}

	getClass() {
		return this.Class
	}

	setTypes(types) {
		this.types = types
	}

	getTypes() {
		return this.types
	}
}

export default Resource