import './index.scss'

import * as React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { worker } from './api/mockServer'
import reportWebVitals from './reportWebVitals'
import App from './screens/App'
import Collection from './screens/Collection'
import NotFound from './screens/NotFound'
import { store } from './store'

const container = document.getElementById('root')

if (container) {
  const root = createRoot(container)

  if (process.env.NODE_ENV === 'development') {
    worker.start()
  }
  root.render(
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />}>
            <Route path='/collection/:slug' element={<Collection />} />
            <Route path='*' element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>,
  )
}
reportWebVitals()
