'use client'

import { useQuery, gql } from '@apollo/client'

const GET_USERS = gql`
  query GetUsers {
    users {
      id
      email
      name
    }
  }
`

const GET_SCHEMAS = gql`
  query GetSchemas {
    schemas {
      id
      name
      description
    }
  }
`

export default function Home() {
  const { data: usersData, loading: usersLoading, error: usersError } = useQuery(GET_USERS)
  const { data: schemasData, loading: schemasLoading, error: schemasError } = useQuery(GET_SCHEMAS)

  return (
    <main className="container mx-auto py-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">Welcome to Suan Mai</h1>
        <p className="text-lg text-gray-600">Your data garden awaits</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="card">
          <h2 className="text-2xl font-semibold mb-4">Users</h2>
          {usersLoading && <p>Loading users...</p>}
          {usersError && <p className="text-red-500">Error loading users: {usersError.message}</p>}
          {usersData && (
            <div className="space-y-2">
              {usersData.users.map((user: any) => (
                <div key={user.id} className="p-3 bg-gray-50 rounded">
                  <p className="font-medium">{user.name}</p>
                  <p className="text-sm text-gray-600">{user.email}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="card">
          <h2 className="text-2xl font-semibold mb-4">Schemas</h2>
          {schemasLoading && <p>Loading schemas...</p>}
          {schemasError && <p className="text-red-500">Error loading schemas: {schemasError.message}</p>}
          {schemasData && (
            <div className="space-y-2">
              {schemasData.schemas.map((schema: any) => (
                <div key={schema.id} className="p-3 bg-gray-50 rounded">
                  <p className="font-medium">{schema.name}</p>
                  <p className="text-sm text-gray-600">{schema.description}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="text-center mt-8">
        <button className="btn mr-4">
          Create New Schema
        </button>
        <button className="btn">
          Manage Users
        </button>
      </div>
    </main>
  )
}
