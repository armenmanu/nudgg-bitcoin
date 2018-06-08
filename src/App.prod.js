import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import router from 'router'
import store from 'store'

import 'styles/index.scss'

import injectTapEventPlugin from 'react-tap-event-plugin'

// Inject plugin for tap events
injectTapEventPlugin()

const mountNode = document.getElementById('root')

render(
  <Provider store={store}>
    {router}
  </Provider>,
  mountNode
)
