import React from 'react'
import ReactDOM from 'react-dom'
import Root from './components/root'
import configureStore from './store/store'
import * as sessionActions from './actions/session_actions'
import * as ApiUtil from './util/api_util'

document.addEventListener('DOMContentLoaded', () => {
  let store
  if (window.currentUser) {
    const preloadedState = { session: { user: window.currentUser } }
    store = configureStore(preloadedState)
    delete window.currentUser
  } else {
    store = configureStore()
  }

  window.store = store
  window.sessionActions = sessionActions
  window.ApiUtil = ApiUtil

  const root = document.getElementById('root')
  ReactDOM.render(<Root store={store}/>, root)
})
