import ResourceManager from './resources/resource.manager'
import KingdomClass from './resources/kingdom/kingdom.class'
import EntityList from './resources/entiti.list'
import ClassList from './resources/class.list'
import World from './resources/world'

const kingdomTypes = new ClassList()

const resources = new ResourceManager({ Class: KingdomClass, types: kingdomTypes })

const kingdoms = new EntityList()

const kingdomService = new KingdomService({ resources, kingdoms })

const world = new World(kingdomService)