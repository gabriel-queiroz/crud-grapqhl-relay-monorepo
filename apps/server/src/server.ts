import Koa from 'koa'
import cors from 'kcors'
import Router from 'koa-router'
import logger from 'koa-logger'
import bodyParser from 'koa-bodyparser'
import koaPlayground from 'graphql-playground-middleware-koa'
import { graphqlHTTP } from 'koa-graphql'
import userSchema from './schema/userSchema'

const router = new Router()
const app = new Koa()

app.use(bodyParser())
app.use(logger())
app.use(cors())

router.get('/welcome', async ctx => {
  ctx.body = {
    date: 'abc',
    name: 'gabriel',
    lastName: 'queiroz'
  }
})

router.all(
  '/graphql',
  graphqlHTTP({
    schema: userSchema,
    graphiql: true
  })
)

router.all('/playground', koaPlayground({ endpoint: '/graphql' }))

app.use(router.routes())

app.on('error', err => {
  console.log('error:', err)
})
app.use(router.allowedMethods())
app.listen(3000)
