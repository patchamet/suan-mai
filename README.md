# Suan Mai - Data Garden Platform

Suan Mai is a comprehensive data garden platform built with modern technologies. It provides a microservices architecture with Next.js frontends, NestJS GraphQL services, and a unified API gateway.

## 🏗️ Architecture

This project uses **Turborepo** to manage a monorepo containing:

### Frontend Applications
- **web-main** (Port 3000) - Main user-facing application
- **web-admin** (Port 3001) - Admin panel for system management
- **web-docs** (Port 3002) - API documentation with Swagger UI

### Backend Services
- **service-auth** (Port 3100) - Authentication & authorization service
- **service-user** (Port 3101) - User management service
- **service-schema** (Port 3102) - Schema definition & validation service
- **service-data** (Port 3103) - Data storage & retrieval service
- **service-publish** (Port 3104) - API publishing service with Redis caching
- **api-gateway** (Port 4000) - Apollo Federation Gateway

### Infrastructure
- **PostgreSQL** - Primary database
- **Redis** - Caching layer for publish service

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- Docker & Docker Compose
- npm or yarn

### 1. Clone and Install Dependencies

```bash
git clone <repository-url>
cd suan-mai
npm install
```

### 2. Environment Setup

Create a `.env` file in the root directory:

```env
# Database
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/suanmai"

# JWT
JWT_SECRET="your-super-secret-jwt-key"

# Redis
REDIS_URL="redis://localhost:6379"

# CORS
CORS_ORIGIN="*"

# Service URLs (for development)
AUTH_SERVICE_URL="http://localhost:3100/graphql"
USER_SERVICE_URL="http://localhost:3101/graphql"
SCHEMA_SERVICE_URL="http://localhost:3102/graphql"
DATA_SERVICE_URL="http://localhost:3103/graphql"
PUBLISH_SERVICE_URL="http://localhost:3104/graphql"

# Frontend
NEXT_PUBLIC_GRAPHQL_URL="http://localhost:4000/graphql"
```

### 3. Run with Docker (Recommended)

```bash
# Build and start all services
npm run docker:up

# Or manually with docker-compose
docker-compose up --build
```

### 4. Database Setup

```bash
# Generate Prisma client
cd packages/db
npx prisma generate

# Run migrations
npx prisma db push

# Seed the database
npm run db:seed
```

### 5. Development Mode

For development, you can run services individually:

```bash
# Start infrastructure
docker-compose up postgres redis

# Run all services in development mode
npm run dev

# Or run specific services
cd apps/service-auth && npm run dev
cd apps/web-main && npm run dev
```

## 📱 Applications

### Main Web App (http://localhost:3000)
- User-facing application
- Data visualization and management
- Schema interaction

### Admin Panel (http://localhost:3001)
- System administration
- User management
- Schema management
- System monitoring

### API Documentation (http://localhost:3002)
- Interactive API documentation
- GraphQL schema explorer
- Usage examples

### GraphQL Playground (http://localhost:4000/graphql)
- Interactive GraphQL IDE
- Query testing
- Schema introspection

## 🛠️ Development

### Project Structure

```
suan-mai/
├── apps/
│   ├── web-main/           # Next.js main app
│   ├── web-admin/          # Next.js admin app
│   ├── web-docs/           # Next.js docs app
│   ├── service-auth/       # NestJS auth service
│   ├── service-user/       # NestJS user service
│   ├── service-schema/     # NestJS schema service
│   ├── service-data/       # NestJS data service
│   ├── service-publish/    # NestJS publish service
│   └── api-gateway/        # Apollo Federation Gateway
├── packages/
│   ├── db/                 # Prisma database package
│   └── shared/             # Shared types and utilities
├── docker-compose.yml      # Docker services configuration
├── turbo.json             # Turborepo configuration
└── package.json           # Root package configuration
```

### Available Scripts

```bash
# Development
npm run dev              # Start all services in development mode
npm run build           # Build all applications
npm run lint            # Lint all applications
npm run test            # Run tests

# Docker
npm run docker:up       # Start all services with Docker
npm run docker:down     # Stop all Docker services
npm run docker:build    # Build Docker images

# Database
cd packages/db
npm run db:generate     # Generate Prisma client
npm run db:push         # Push schema to database
npm run db:migrate      # Run database migrations
npm run db:seed         # Seed database with sample data
npm run db:studio       # Open Prisma Studio
```

### Adding New Services

1. Create a new NestJS application in `apps/`
2. Add GraphQL federation support
3. Update `api-gateway/src/app.module.ts` with the new service
4. Add service to `docker-compose.yml`
5. Update this README

## 🔧 Configuration

### Environment Variables

Each service can be configured using environment variables:

- `DATABASE_URL` - PostgreSQL connection string
- `REDIS_URL` - Redis connection string  
- `JWT_SECRET` - Secret key for JWT tokens
- `PORT` - Service port number
- `CORS_ORIGIN` - Allowed CORS origins

### GraphQL Federation

Services are federated using Apollo Gateway. Each service exposes its own GraphQL schema, and the gateway combines them into a unified API.

## 🧪 Testing

```bash
# Run all tests
npm run test

# Run tests for specific service
cd apps/service-auth
npm run test

# Run e2e tests
npm run test:e2e
```

## 📦 Deployment

### Production Build

```bash
# Build all applications
npm run build

# Build Docker images for production
docker-compose -f docker-compose.prod.yml build
```

### Environment-specific Configurations

Create environment-specific docker-compose files:
- `docker-compose.dev.yml` - Development
- `docker-compose.staging.yml` - Staging  
- `docker-compose.prod.yml` - Production

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## 🆘 Troubleshooting

### Common Issues

1. **Port conflicts**: Make sure ports 3000-3104 and 4000 are available
2. **Database connection**: Ensure PostgreSQL is running and accessible
3. **Redis connection**: Verify Redis is running for the publish service
4. **Docker issues**: Try `docker-compose down -v` to reset volumes

### Getting Help

- Check the [Issues](https://github.com/patchamet/suan-mai/issues) page
- Review service logs: `docker-compose logs [service-name]`
- Ensure all environment variables are properly set

## 🎯 Roadmap

- [ ] Add comprehensive test coverage
- [ ] Implement real-time subscriptions
- [ ] Add monitoring and logging
- [ ] Create deployment automation
- [ ] Add API rate limiting
- [ ] Implement data export/import features
Suan Mai is a garden for your data, configurations, and schemas. Design, grow, and nurture structured information like plants in a well-tended garden. Manage your data, maintain reusable structures, and publish APIs for other applications effortlessly.
