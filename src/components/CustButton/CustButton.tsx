import { Button } from '@mui/material'

interface ButtonProps {
  onClick: () => void
  text: string
}

function CustButton({ onClick, text }: ButtonProps) {
  return <Button variant="contained" onClick={onClick}>{text}</Button>
}

export default CustButton
