import './NotFound.scss'
import { Typography } from '@mui/material'

function NotFound() {
  return (
    <div className='not-found'>
      <Typography variant='h1' component='div' gutterBottom>
        404
      </Typography>
      <Typography variant='h2' component='div' gutterBottom>
        Page Not Found
      </Typography>
    </div>
  )
}

export default NotFound
