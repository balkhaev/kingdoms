import capitalize from '../../utilities/capitalize'
import fs from 'fs'

export default class Manager {
	constructor({ type, Class, classTypes, entitiesPath }) {
		this._type = type
		this._BaseClass = Class
		this._types = classTypes
		this._entitiesPath = entitiesPath

		this._name = capitalize(this._type)
		this._managerName = this._name + 'Manager'
	}

	init() {
		this.entities = this.loadEntities()

		return this
	}

	loadEntities() {
		const access = fs.accessSync(this._entitiesPath)

		return require(this._entitiesPath).default
	}

	get(entityName) {
		if (!(entityName in this.entities)) {
			console.error(`[${this._managerName}][get] ${this._name} "${entityName}" not found`)

			return null
		}

		return this.entities[entityName]
	}

	getClass(classType) {
		classType = classType.toLowerCase()

		if (!(classType in this._types)) {
			console.error(`[${this._managerName}][getClass] ${this._name} type "${classType}" not found`)

			return null
		}

		return this._types[classType]
	}
}