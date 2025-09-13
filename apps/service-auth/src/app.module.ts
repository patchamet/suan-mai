import { Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import { ApolloFederationDriver, ApolloFederationDriverConfig } from '@nestjs/apollo'
import { JwtModule } from '@nestjs/jwt'
import { PassportModule } from '@nestjs/passport'
import { AuthModule } from './auth/auth.module'

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloFederationDriverConfig>({
      driver: ApolloFederationDriver,
      autoSchemaFile: {
        federation: 2,
      },
      context: ({ req }) => ({ req }),
    }),
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET || 'your-secret-key',
      signOptions: { expiresIn: '24h' },
    }),
    PassportModule,
    AuthModule,
  ],
})
export class AppModule {}
