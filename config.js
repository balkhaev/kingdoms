import path from 'path'

export const rootDir = __dirname

export const paths = {
	rootDir,
	resources: {
		card: path.join(rootDir, './resources/card'),
		event: path.join(rootDir, './resources/event'),
		kingdom: path.join(rootDir, './resources/kingdom')
	}
}

export const limit = {
	days: 300
}

export default {
	paths,
	limit
}