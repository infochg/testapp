import './ToastsContainer.scss'

import React from 'react'
import { ToastContainer } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.min.css'
import ErrorBoundary from '../ErrorBoundary'

function ToastsContainer() {
  try {
    return (
      <ToastContainer
        hideProgressBar
        position='bottom-right'
        className='toastContainer'
        toastClassName='toast'
      />
    )
  } catch (e) {
    return <ErrorBoundary error={e} />
  }
}

export default ToastsContainer
