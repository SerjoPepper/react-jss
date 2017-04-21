import React from 'react'
import PropTypes from 'prop-types'
import {CHANNEL} from './ThemeProvider'

const themify = fn => class extends React.Component {
  static contextTypes = {
    [CHANNEL]: PropTypes.func,
  };

  // state: { theme?: ?Object } = {};
  // unsubscribe: () => void;

  componentWillMount() {
    if (!this.context[CHANNEL]) {
      throw new Error('[themify] Please use ThemeProvider to be able to use themify')
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
    const Component = fn(theme)
    return <Component {...this.props} />
    // return fn(theme)
  }
}

export default themify
