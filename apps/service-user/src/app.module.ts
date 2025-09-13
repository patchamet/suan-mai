import { Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import { ApolloFederationDriver, ApolloFederationDriverConfig } from '@nestjs/apollo'
import { UserModule } from './user/user.module'

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloFederationDriverConfig>({
      driver: ApolloFederationDriver,
      autoSchemaFile: {
        federation: 2,
      },
    }),
    UserModule,
  ],
})
export class AppModule {}
