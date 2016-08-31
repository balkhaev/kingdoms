import Resource from './resource'

export class ResourceManager {
	constructor({ resources }) {
		this.resources = resources
	}

	set(resourceSlug, resource) {
		this.resources[resourceSlug] = new Resource(resource)
	}

	getAll() {
		return this.resources
	}

	exists(resourceSlug) {
		return resourceSlug in this.resources
	}

	add(resourceOpts) {
		if (this.exists(resourceOpts.slug)) {
			return Error('[ResourceManager][add]', {resourceOpts})
		}

		this.set(resourceOpts.slug, new Resource(resourceOpts))
	}

	get(resourceSlug) {
		if (this.exists(resourceSlug)) {
			return this.resources[resourceSlug]
		}

		return Error('[ResourceManager][get]', {resourceSlug})
	}
}

export default ResourceManager