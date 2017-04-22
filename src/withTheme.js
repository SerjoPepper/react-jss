import React from 'react'
import onThemeUpdate from './onThemeUpdate'

const withTheme = Component => onThemeUpdate((theme, props) => {
  return <Component theme={theme} {...props} />
})

export default withTheme
