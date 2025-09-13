import { Injectable, UnauthorizedException } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { prisma } from '@suan-mai/db'
import { LoginDto, CreateUserDto } from '@suan-mai/shared'
import * as bcrypt from 'bcrypt'

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await prisma.user.findUnique({
      where: { email },
    })

    if (user && (await bcrypt.compare(password, user.password))) {
      const { password: _, ...result } = user
      return result
    }
    return null
  }

  async login(loginDto: LoginDto) {
    const user = await this.validateUser(loginDto.email, loginDto.password)
    if (!user) {
      throw new UnauthorizedException('Invalid credentials')
    }

    const payload = { email: user.email, sub: user.id, role: user.role }
    return {
      access_token: this.jwtService.sign(payload),
      user,
    }
  }

  async register(createUserDto: CreateUserDto) {
    const existingUser = await prisma.user.findUnique({
      where: { email: createUserDto.email },
    })

    if (existingUser) {
      throw new UnauthorizedException('User already exists')
    }

    const hashedPassword = await bcrypt.hash(createUserDto.password, 10)
    const user = await prisma.user.create({
      data: {
        ...createUserDto,
        password: hashedPassword,
      },
    })

    const { password: _, ...result } = user
    const payload = { email: user.email, sub: user.id, role: user.role }

    return {
      access_token: this.jwtService.sign(payload),
      user: result,
    }
  }

  async validateToken(token: string) {
    try {
      const payload = this.jwtService.verify(token)
      const user = await prisma.user.findUnique({
        where: { id: payload.sub },
      })

      if (!user) {
        throw new UnauthorizedException('User not found')
      }

      const { password: _, ...result } = user
      return result
    } catch (error) {
      throw new UnauthorizedException('Invalid token')
    }
  }
}
