export class ResourceManager {
	constructor({ Class, types }) {
		this.Class = Class
		this.types = types
	}

	getClass() {
		return this.Class
	}

	getTypes() {
		return this.types
	}

	getType(typeName) {
		return this.types.get(typeName)
	}

	existsType(typeName) {
		return this.types.exists(typeName)
	}
}

export default ResourceManager