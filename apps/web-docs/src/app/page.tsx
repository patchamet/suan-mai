export default function DocsHome() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="docs-card">
        <h1 className="text-4xl font-bold mb-6">Suan Mai API Documentation</h1>
        <p className="text-lg text-gray-600 mb-8">
          Welcome to the Suan Mai API documentation. Suan Mai is a data garden platform 
          that helps you design, grow, and nurture structured information.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-3">GraphQL API</h2>
            <p className="text-gray-600 mb-4">
              Flexible, powerful API using GraphQL for efficient data fetching.
            </p>
            <div className="endpoint">
              <span className="method-post">POST</span>
              <code className="ml-2">http://localhost:4000/graphql</code>
            </div>
            <a href="/graphql" className="text-blue-600 hover:text-blue-800">
              Explore GraphQL Schema →
            </a>
          </div>

          <div className="border rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-3">REST API</h2>
            <p className="text-gray-600 mb-4">
              Traditional REST endpoints for simple integrations.
            </p>
            <div className="endpoint">
              <span className="method-get">GET</span>
              <code className="ml-2">http://localhost:4000/api</code>
            </div>
            <a href="/rest" className="text-blue-600 hover:text-blue-800">
              View REST Endpoints →
            </a>
          </div>
        </div>
      </div>

      <div className="docs-card">
        <h2 className="text-2xl font-semibold mb-4">Quick Start</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-medium mb-2">1. Authentication</h3>
            <div className="code-block">
              <pre>{`curl -X POST http://localhost:4000/auth/login \\
  -H "Content-Type: application/json" \\
  -d '{"email": "user@example.com", "password": "password"}'`}</pre>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-2">2. Query Data with GraphQL</h3>
            <div className="code-block">
              <pre>{`query GetUsers {
  users {
    id
    email
    name
    createdAt
  }
}`}</pre>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-2">3. Create a Schema</h3>
            <div className="code-block">
              <pre>{`mutation CreateSchema {
  createSchema(input: {
    name: "User Profile"
    description: "Schema for user profile data"
    fields: [
      { name: "name", type: "string", required: true }
      { name: "age", type: "number", required: false }
    ]
  }) {
    id
    name
    description
  }
}`}</pre>
            </div>
          </div>
        </div>
      </div>

      <div className="docs-card">
        <h2 className="text-2xl font-semibold mb-4">Services Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="border rounded p-4">
            <h3 className="font-semibold">Auth Service</h3>
            <p className="text-sm text-gray-600">User authentication and authorization</p>
          </div>
          <div className="border rounded p-4">
            <h3 className="font-semibold">User Service</h3>
            <p className="text-sm text-gray-600">User management and profiles</p>
          </div>
          <div className="border rounded p-4">
            <h3 className="font-semibold">Schema Service</h3>
            <p className="text-sm text-gray-600">Data schema definition and validation</p>
          </div>
          <div className="border rounded p-4">
            <h3 className="font-semibold">Data Service</h3>
            <p className="text-sm text-gray-600">Data storage and retrieval</p>
          </div>
          <div className="border rounded p-4">
            <h3 className="font-semibold">Publish Service</h3>
            <p className="text-sm text-gray-600">API publishing with Redis caching</p>
          </div>
          <div className="border rounded p-4">
            <h3 className="font-semibold">API Gateway</h3>
            <p className="text-sm text-gray-600">Unified GraphQL federation</p>
          </div>
        </div>
      </div>
    </div>
  )
}
