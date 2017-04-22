import React from 'react'
import PropTypes from 'prop-types'
import {CHANNEL} from './ThemeProvider'

const onThemeUpdate = fn => class extends React.Component {
  static contextTypes = {
    [CHANNEL]: PropTypes.func,
  };

  // state: { theme?: ?Object } = {};
  // unsubscribe: () => void;

  componentWillMount() {
    if (!this.context[CHANNEL]) {
      throw new Error('[onThemeUpdate] Please use ThemeProvider to be able to use onThemeUpdate')
    }

    const subscribe = this.context[CHANNEL]
    this.unsubscribe = subscribe((theme) => {
      this.setState({theme})
    })
  }

  componentWillUnmount() {
    if (typeof this.unsubscribe === 'function') this.unsubscribe()
  }

  render() {
    const {theme} = this.state
    return fn(theme, this.props)
  }
}

export default onThemeUpdate
