import Koa from 'koa'
import serve from 'koa-static'
import Router from 'koa-router'

import hookManager from './hookManager'

const app = new Koa()
const router = new Router({
	prefix: '/api'
})

app.use(serve('public'))

export default function(game) {
	hookManager(game, router)

	app
		.use(router.routes())
		.use(router.allowedMethods())
		.listen(3000)

	console.log('Server url: http://localhost:3000/')
}