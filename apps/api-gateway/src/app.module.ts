import { Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import { ApolloGatewayDriver, ApolloGatewayDriverConfig } from '@nestjs/apollo'
import { IntrospectAndCompose } from '@apollo/gateway'

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloGatewayDriverConfig>({
      driver: ApolloGatewayDriver,
      gateway: {
        supergraphSdl: new IntrospectAndCompose({
          subgraphs: [
            { name: 'auth', url: process.env.AUTH_SERVICE_URL || 'http://localhost:3100/graphql' },
            { name: 'user', url: process.env.USER_SERVICE_URL || 'http://localhost:3101/graphql' },
            { name: 'schema', url: process.env.SCHEMA_SERVICE_URL || 'http://localhost:3102/graphql' },
            { name: 'data', url: process.env.DATA_SERVICE_URL || 'http://localhost:3103/graphql' },
            { name: 'publish', url: process.env.PUBLISH_SERVICE_URL || 'http://localhost:3104/graphql' },
          ],
        }),
      },
    }),
  ],
})
export class AppModule {}
