import { createNavigationReducer } from './core';
import { ext } from '../const';

export const DRAWER_NAVIGATION_STACK = {
  name: ext('Drawer'),
  statePath: [ext(), 'drawer'],
};
export default createNavigationReducer(DRAWER_NAVIGATION_STACK.name);
