import * as React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'

import reportWebVitals from './reportWebVitals'
import { App } from './screens/App'
import { store } from './store'

const container = document.getElementById('root')

if (container) {
  const root = createRoot(container)
  root.render(
    <Provider store={store}>
      <App />
    </Provider>,
  )
}
reportWebVitals()
