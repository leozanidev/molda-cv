import { Outlet } from 'react-router-dom'
import PublicNavBar from './PublicNavBar'
import PublicFooter from './PublicFooter'

const PublicLayout = () => {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <PublicNavBar />
      <main className="flex-1">
        <Outlet />
      </main>
      <PublicFooter />
    </div>
  )
}

export default PublicLayout
