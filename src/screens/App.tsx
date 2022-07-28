import './App.scss'

import { Outlet } from 'react-router-dom'

import Sidebar from '../components/Sidebar'
import ToastsContainer from '../components/ToastsContainer'

function App() {
  return (
    <>
      <main className='container'>
        <div className='sidebar-wrapper custom-scroll-bar'>
          <Sidebar />
        </div>
        <div className='content-wrapper custom-scroll-bar'>
          <Outlet />
        </div>
      </main>
      <ToastsContainer />
    </>
  )
}

export default App
