import { Resolver, Mutation, Args, Query, Context } from '@nestjs/graphql'
import { UseGuards } from '@nestjs/common'
import { AuthService } from './auth.service'
import { LoginDto, CreateUserDto } from '@suan-mai/shared'
import { JwtAuthGuard } from './guards/jwt-auth.guard'
import { AuthResponse } from './dto/auth-response.dto'
import { User } from './entities/user.entity'

@Resolver()
export class AuthResolver {
  constructor(private authService: AuthService) {}

  @Mutation(() => AuthResponse)
  async login(@Args('input') loginDto: LoginDto): Promise<AuthResponse> {
    return this.authService.login(loginDto)
  }

  @Mutation(() => AuthResponse)
  async register(@Args('input') createUserDto: CreateUserDto): Promise<AuthResponse> {
    return this.authService.register(createUserDto)
  }

  @Query(() => User)
  @UseGuards(JwtAuthGuard)
  async me(@Context() context): Promise<User> {
    return context.req.user
  }

  @Query(() => Boolean)
  async validateToken(@Args('token') token: string): Promise<boolean> {
    try {
      await this.authService.validateToken(token)
      return true
    } catch {
      return false
    }
  }
}
