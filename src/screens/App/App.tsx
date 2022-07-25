import './App.scss'

import { Typography } from '@mui/material'
import { useEffect } from 'react'

import { CustButton } from '../../components/CustButton'
import { useAppDispatch, useAppSelector } from '../../store'
import { setCollection } from '../../store/collectionSlice'
import { mockData } from '../../store/mock'
import { collectionSelector } from '../../store/selectors'

function App() {
  const dispatch = useAppDispatch()
  const collection = useAppSelector(collectionSelector)

  useEffect(() => {
    if (!collection || Object.keys(collection.traits).length === 0) {
      dispatch(setCollection(mockData))
    }
  }, [collection, dispatch])

  const goToPage = () => {
    window.location.href = collection.external_url as string
  }

  return (
    <div className='home-page'>
      <Typography className='home-page__name'>{collection.name}</Typography>
      <CustButton onClick={goToPage} text='Visit Website' />
    </div>
  )
}

export default App
