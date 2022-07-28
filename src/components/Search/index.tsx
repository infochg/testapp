import './Search.scss'

import { useNavigate } from 'react-router-dom'

import ErrorBoundary from '../ErrorBoundary'

import SearchForm from './SearchForm'

function Search() {
  const navigate = useNavigate()

  const submit = (data: { [key: string]: string | number }) => {
    if (data.collection && data.collection !== '') {
      navigate(`/collection/${data.collection}`)
    }
  }
  try {
    return <SearchForm onSubmit={submit} />
  } catch (e) {
    return <ErrorBoundary error={e} />
  }
}

export default Search
