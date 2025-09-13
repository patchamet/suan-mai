import { Resolver, Query, Mutation, Args, ID, ResolveReference } from '@nestjs/graphql'
import { UserService } from './user.service'
import { User } from './entities/user.entity'
import { UpdateUserDto } from '@suan-mai/shared'

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => [User], { name: 'users' })
  findAll() {
    return this.userService.findAll()
  }

  @Query(() => User, { name: 'user' })
  findOne(@Args('id', { type: () => ID }) id: string) {
    return this.userService.findOne(id)
  }

  @Mutation(() => User)
  updateUser(
    @Args('id', { type: () => ID }) id: string,
    @Args('input') updateUserDto: UpdateUserDto,
  ) {
    return this.userService.update(id, updateUserDto)
  }

  @Mutation(() => Boolean)
  removeUser(@Args('id', { type: () => ID }) id: string) {
    return this.userService.remove(id)
  }

  @ResolveReference()
  resolveReference(reference: { __typename: string; id: string }) {
    return this.userService.findOne(reference.id)
  }
}
