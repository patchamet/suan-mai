import { NestFactory } from '@nestjs/core'
import { ValidationPipe } from '@nestjs/common'
import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    transform: true,
  }))

  app.enableCors({
    origin: process.env.CORS_ORIGIN || '*',
    credentials: true,
  })

  const port = process.env.PORT || 3101
  await app.listen(port)
  console.log(`🚀 User Service running on port ${port}`)
}

bootstrap()
