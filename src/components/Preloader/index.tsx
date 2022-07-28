import './Preloader.scss'

import { CircularProgress } from '@mui/material'
import React from 'react'

import ErrorBoundary from '../ErrorBoundary'

const Preloader = () => {
  try {
    return (
      <div className='preloaderWrapper'>
        <CircularProgress color='inherit' />
      </div>
    )
  } catch (e) {
    return <ErrorBoundary error={e} />
  }
}

export default Preloader
