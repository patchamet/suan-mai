import { ExtractJwt, Strategy } from 'passport-jwt'
import { PassportStrategy } from '@nestjs/passport'
import { Injectable } from '@nestjs/common'
import { prisma } from '@suan-mai/db'

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET || 'your-secret-key',
    })
  }

  async validate(payload: any) {
    const user = await prisma.user.findUnique({
      where: { id: payload.sub },
    })

    if (!user) {
      return null
    }

    const { password: _, ...result } = user
    return result
  }
}
