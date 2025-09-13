export interface User {
  id: string
  email: string
  name?: string
  role: UserRole
  createdAt: Date
  updatedAt: Date
}

export interface Schema {
  id: string
  name: string
  description?: string
  fields: SchemaField[]
  version: number
  published: boolean
  createdAt: Date
  updatedAt: Date
  authorId: string
}

export interface Data {
  id: string
  content: Record<string, any>
  createdAt: Date
  updatedAt: Date
  schemaId: string
  authorId: string
}

export interface SchemaField {
  name: string
  type: FieldType
  required: boolean
  description?: string
  validation?: FieldValidation
}

export interface FieldValidation {
  min?: number
  max?: number
  pattern?: string
  options?: string[]
}

export enum UserRole {
  USER = 'USER',
  ADMIN = 'ADMIN',
  SUPER_ADMIN = 'SUPER_ADMIN',
}

export enum FieldType {
  STRING = 'string',
  NUMBER = 'number',
  BOOLEAN = 'boolean',
  DATE = 'date',
  TEXT = 'text',
  EMAIL = 'email',
  URL = 'url',
  JSON = 'json',
}

export interface ApiResponse<T = any> {
  success: boolean
  data?: T
  error?: string
  message?: string
}

export interface PaginationOptions {
  page?: number
  limit?: number
  sortBy?: string
  sortOrder?: 'asc' | 'desc'
}

export interface PaginatedResponse<T> {
  data: T[]
  total: number
  page: number
  limit: number
  totalPages: number
}
