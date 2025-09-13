import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  
  app.enableCors({
    origin: process.env.CORS_ORIGIN || '*',
    credentials: true,
  })

  const port = process.env.PORT || 4000
  await app.listen(port)
  console.log(`🚀 API Gateway running on port ${port}`)
  console.log(`📊 GraphQL Playground: http://localhost:${port}/graphql`)
}

bootstrap()
