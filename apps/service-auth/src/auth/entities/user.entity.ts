import { ObjectType, Field, ID, registerEnumType } from '@nestjs/graphql'
import { Directive } from '@nestjs/graphql'

export enum UserRole {
  USER = 'USER',
  ADMIN = 'ADMIN',
  SUPER_ADMIN = 'SUPER_ADMIN',
}

registerEnumType(UserRole, {
  name: 'UserRole',
})

@ObjectType()
@Directive('@key(fields: "id")')
export class User {
  @Field(() => ID)
  id: string

  @Field()
  email: string

  @Field({ nullable: true })
  name?: string

  @Field(() => UserRole)
  role: UserRole

  @Field()
  createdAt: Date

  @Field()
  updatedAt: Date
}
