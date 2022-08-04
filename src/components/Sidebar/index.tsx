import './Sidebar.scss'

import ErrorBoundary from '../ErrorBoundary'
import Filter from '../Filter'
import Search from '../Search'

function Sidebar() {
  try {
    return (
      <div className='sidebar'>
        <Search />
        <Filter />
      </div>
    )
  } catch (e) {
    return <ErrorBoundary error={e} />
  }
}

export default Sidebar
