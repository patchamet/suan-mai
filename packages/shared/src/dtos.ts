import { IsEmail, IsNotEmpty, IsOptional, IsString, IsBoolean, IsEnum, IsArray, ValidateNested } from 'class-validator'
import { Type } from 'class-transformer'
import { UserRole, FieldType } from './types'

export class CreateUserDto {
  @IsEmail()
  email: string

  @IsString()
  @IsNotEmpty()
  name: string

  @IsString()
  @IsNotEmpty()
  password: string

  @IsEnum(UserRole)
  @IsOptional()
  role?: UserRole
}

export class UpdateUserDto {
  @IsString()
  @IsOptional()
  name?: string

  @IsEnum(UserRole)
  @IsOptional()
  role?: UserRole
}

export class LoginDto {
  @IsEmail()
  email: string

  @IsString()
  @IsNotEmpty()
  password: string
}

export class SchemaFieldDto {
  @IsString()
  @IsNotEmpty()
  name: string

  @IsEnum(FieldType)
  type: FieldType

  @IsBoolean()
  required: boolean

  @IsString()
  @IsOptional()
  description?: string
}

export class CreateSchemaDto {
  @IsString()
  @IsNotEmpty()
  name: string

  @IsString()
  @IsOptional()
  description?: string

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => SchemaFieldDto)
  fields: SchemaFieldDto[]
}

export class UpdateSchemaDto {
  @IsString()
  @IsOptional()
  name?: string

  @IsString()
  @IsOptional()
  description?: string

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => SchemaFieldDto)
  @IsOptional()
  fields?: SchemaFieldDto[]

  @IsBoolean()
  @IsOptional()
  published?: boolean
}

export class CreateDataDto {
  @IsString()
  @IsNotEmpty()
  schemaId: string

  @IsNotEmpty()
  content: Record<string, any>
}

export class UpdateDataDto {
  @IsNotEmpty()
  @IsOptional()
  content?: Record<string, any>
}
