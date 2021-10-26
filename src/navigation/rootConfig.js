// @ts-check
import {LayoutBottomTabs, LayoutSideMenu} from 'react-native-navigation';
import routes from './routes';

/**@type LayoutBottomTabs */
export const bottomTabs = {
  id: 'BOTTOM_TABS',
  children: [
    {
      stack: {
        id: 'HomeStack',
        children: [
          {
            component: {
              name: routes.HOME,
            },
          },
        ],
        options: {
          bottomTab: {
            text: routes.HOME,
            textColor: '#000',
            fontSize: 16,
            selectedTextColor: 'red',
            selectedFontSize: 20,
            iconHeight: 100,
          },
        },
      },
    },
    {
      stack: {
        id: 'SettingsStack',
        children: [
          {
            component: {
              name: routes.SETTINGS,
            },
          },
        ],
        options: {
          bottomTab: {
            text: routes.SETTINGS,
            textColor: '#000',
            fontSize: 16,
            selectedTextColor: 'red',
            selectedFontSize: 20,
            iconHeight: 0,
          },
        },
      },
    },
  ],
};
/** @type LayoutSideMenu */
export const sideMenu = {
  center: {
    bottomTabs: bottomTabs,
  },
  left: {
    component: {name: routes.SIDE_MENU},
  },
  id: 'SIDE_MENU',
};
