import create from './createInjectSheet';

export { SheetsRegistry } from 'jss';
export { default as SheetsRegistryProvider } from './SheetsRegistryProvider';
export { default as jss } from './jss';
export { create };
export { ThemeProvider, withTheme } from 'theming';

import createDynamicInjectSheet from './createDynamicInjectSheet';
export const dynamicInjectSheet = createDynamicInjectSheet();

/**
 * Exports injectSheet function as default.
 * Returns a function which needs to be invoked with a Component.
 *
 * `injectSheet(styles, [options])(Component)`
 *
 * @param {Object} styles
 * @param {Object} [options]
 * @return {Function}
 * @api public
 */
export default create();
