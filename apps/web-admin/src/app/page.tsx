'use client'

import { useQuery, gql } from '@apollo/client'

const GET_ADMIN_STATS = gql`
  query GetAdminStats {
    users {
      id
    }
    schemas {
      id
    }
  }
`

export default function AdminDashboard() {
  const { data, loading, error } = useQuery(GET_ADMIN_STATS)

  if (loading) return <div>Loading dashboard...</div>
  if (error) return <div className="text-red-500">Error: {error.message}</div>

  const userCount = data?.users?.length || 0
  const schemaCount = data?.schemas?.length || 0

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="admin-card">
          <h3 className="text-lg font-semibold mb-2">Total Users</h3>
          <p className="text-3xl font-bold text-blue-600">{userCount}</p>
        </div>
        
        <div className="admin-card">
          <h3 className="text-lg font-semibold mb-2">Total Schemas</h3>
          <p className="text-3xl font-bold text-green-600">{schemaCount}</p>
        </div>
        
        <div className="admin-card">
          <h3 className="text-lg font-semibold mb-2">System Status</h3>
          <p className="text-lg font-semibold text-green-600">Healthy</p>
        </div>
      </div>

      <div className="admin-card">
        <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
        <div className="flex flex-wrap gap-4">
          <button className="admin-btn">Create New User</button>
          <button className="admin-btn">Create New Schema</button>
          <button className="admin-btn">View System Logs</button>
          <button className="admin-btn">Backup Data</button>
        </div>
      </div>

      <div className="admin-card mt-6">
        <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
        <div className="space-y-2">
          <div className="flex justify-between items-center py-2 border-b">
            <span>New user registration</span>
            <span className="text-sm text-gray-500">2 minutes ago</span>
          </div>
          <div className="flex justify-between items-center py-2 border-b">
            <span>Schema updated: User Profile</span>
            <span className="text-sm text-gray-500">15 minutes ago</span>
          </div>
          <div className="flex justify-between items-center py-2">
            <span>Data published to API</span>
            <span className="text-sm text-gray-500">1 hour ago</span>
          </div>
        </div>
      </div>
    </div>
  )
}
