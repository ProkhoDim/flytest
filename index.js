/**
 * @format
 */
// @ts-check
import {Navigation} from 'react-native-navigation';
import registerScreens from './src/navigation';
import nav_comp from './src/navigation/nav_comp';
import nav_ids from './src/navigation/nav_ids';
import {bottomTabs, sideMenu} from './src/navigation/rootConfig';
import routes from './src/navigation/routes';

Navigation.setDefaultOptions({
  topBar: {
    title: {color: 'black'},
    leftButtons: [
      {
        id: nav_ids.homeBurger,
        component: {
          name: nav_comp.BURGER,
          id: nav_ids.homeBurger,
        },
        text: 'Burger',
      },
    ],
  },
  animations: {
    push: {enabled: false},
    pop: {enabled: false},
  },
});

registerScreens();
Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      sideMenu: sideMenu,
    },
  });
});
