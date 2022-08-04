import { createTheme } from '@material-ui/core/styles'

const theme = createTheme({
  palette: {
    primary: {
      main: '#342472'
    },
    background: {
      default: 'transparent'
    },
    text: {
      primary: '#fff',
      secondary: '#FF9E2C',
      disabled: '#AFAABC'
    }
  },
  typography: {
    fontFamily: 'Montserrat',
    fontSize: 18,
    color: '#fff'
  },
})

export default theme
