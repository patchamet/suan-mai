import { Injectable, NotFoundException } from '@nestjs/common'
import { prisma } from '@suan-mai/db'
import { UpdateUserDto } from '@suan-mai/shared'

@Injectable()
export class UserService {
  async findAll() {
    return prisma.user.findMany({
      select: {
        id: true,
        email: true,
        name: true,
        role: true,
        createdAt: true,
        updatedAt: true,
      },
    })
  }

  async findOne(id: string) {
    const user = await prisma.user.findUnique({
      where: { id },
      select: {
        id: true,
        email: true,
        name: true,
        role: true,
        createdAt: true,
        updatedAt: true,
      },
    })

    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`)
    }

    return user
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const user = await prisma.user.update({
      where: { id },
      data: updateUserDto,
      select: {
        id: true,
        email: true,
        name: true,
        role: true,
        createdAt: true,
        updatedAt: true,
      },
    })

    return user
  }

  async remove(id: string) {
    await prisma.user.delete({
      where: { id },
    })
    return true
  }
}
