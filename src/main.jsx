// import { I18NProvider } from 'next/dist/server/future/helpers/i18n-provider.js'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
// import { I18nextProvider } from 'react-i18next'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import {store} from './redux'
// import i18n from './i18n.js'
import './style/style.css'
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>
 
)
