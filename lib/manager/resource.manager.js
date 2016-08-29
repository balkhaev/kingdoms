export default class ResourceManager {
	constructor({ resourcePath }) {
		this.resourcePath = resourcePath
	}

	init() {
		this.managers = this.loadManagers()
	}

	loadManagers() {
		return require(this.resourcePath).default
	}


}