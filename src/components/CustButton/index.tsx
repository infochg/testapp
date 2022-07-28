import { Button } from '@mui/material'

import ErrorBoundary from '../ErrorBoundary'

interface ButtonProps {
  onClick?: () => void
  text: string
}

function CustButton({ onClick, text }: ButtonProps) {
  try {
    return (
      <Button variant='contained' onClick={onClick}>
        {text}
      </Button>
    )
  } catch (e) {
    return <ErrorBoundary error={e} />
  }
}

export default CustButton
