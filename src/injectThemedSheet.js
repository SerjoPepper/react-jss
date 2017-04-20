import React from 'react'
import PropTypes from 'prop-types'
import injectSheet from './'
import {CHANNEL} from './ThemeProvider'

const injectThemedSheet = sheetFn => Component => class extends React.Component {
  static contextTypes = {
    [CHANNEL]: PropTypes.func,
  };

  // state: { theme?: ?Object } = {};
  // unsubscribe: () => void;

  componentWillMount() {
    if (!this.context[CHANNEL]) {
      throw new Error('[injectThemedSheet] Please use ThemeProvider to be able to use injectThemedSheet')
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
    const sheet = sheetFn(theme)
    const JssComponent = injectSheet(sheet)(Component)

    return <JssComponent {...this.props} />
  }
}

export default injectThemedSheet
