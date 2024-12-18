import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { store } from './app/store.js'
import './assets/scss/_general.scss'

/*CSS*/
import "./assets/scss/_general.scss"

/*///////////////////////////////////*/

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}> {/*Donnent accés aux slices (du coup à App)*/}
      <App />
    </Provider>
  </React.StrictMode>,
)
