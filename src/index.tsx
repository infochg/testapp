import './index.scss'

import { MuiThemeProvider } from '@material-ui/core/styles'
import * as React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import reportWebVitals from './reportWebVitals'
import App from './screens/App'
import Collection from './screens/Collection'
import Item from './screens/Item'
import NotFound from './screens/NotFound'
import { store } from './store'
import theme from './styles/default-theme'

const container = document.getElementById('root')

if (container) {
  const root = createRoot(container)

  root.render(
    <Provider store={store}>
      <BrowserRouter>
        <MuiThemeProvider theme={theme}>
          <Routes>
            <Route path='/' element={<App />}>
              <Route path='/collection/:slug' element={<Collection />} />
              <Route path='/item' element={<Item />} />
              <Route path='*' element={<NotFound />} />
            </Route>
          </Routes>
        </MuiThemeProvider>
      </BrowserRouter>
    </Provider>,
  )
}
reportWebVitals()
