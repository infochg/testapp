import './Sidebar.scss'

import ErrorBoundary from '../ErrorBoundary'
import Search from '../Search'

function Sidebar() {
  try {
    return (
      <div className='sidebar'>
        <Search />
      </div>
    )
  } catch (e) {
    return <ErrorBoundary error={e} />
  }
}

export default Sidebar
