import React, { useEffect } from 'react'

interface ErrorBoundaryProps {
  error: any
}

const ErrorBoundary = ({ error }: ErrorBoundaryProps) => {
  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log(error)
  }, [error])

  return <h4>Oops!!! Something went wrong</h4>
}

export default ErrorBoundary
