// import express from 'express'
// import consola from 'consola'
// import { Nuxt, Builder } from 'nuxt'
// const app = express()

// // Import and Set Nuxt.js options
// const config = require('../nuxt.config.js')
// config.dev = process.env.NODE_ENV !== 'production'

// async function start () {
//   // Init Nuxt.js
//   const nuxt = new Nuxt(config)

//   const { host, port } = nuxt.options.server

//   await nuxt.ready()
//   // Build only in dev mode
//   if (config.dev) {
//     const builder = new Builder(nuxt)
//     await builder.build()
//   }

//   // Give nuxt middleware to express
//   app.use(nuxt.render)

//   // Listen the server
//   app.listen(port, host)
//   consola.ready({
//     message: `Server listening on http://${host}:${port}`,
//     badge: true
//   })
// }
// start()

// import { NestFactory } from '@nestjs/core';
// import { AppModule } from './app.module.js';
// import { loadNuxt } from 'nuxt3';
// import { buildNuxt,  Resolver } from '@nuxt/kit';

// async function bootstrap() {
//   const app = await NestFactory.create(AppModule);

//   // Check if we need to run Nuxt in development mode
//   const isDev = process.env.NODE_ENV !== 'production'

//   // Get a ready to use Nuxt instance
//   const nuxt = await loadNuxt({ rootDir: 'src/client-app/' })

//   // Enable live build & reloading on dev
//   if (isDev) {
//     buildNuxt(nuxt)
//   }

//   await app.listen(3001);
// }
// bootstrap();