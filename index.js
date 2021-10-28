/**
 * @format
 */
// @ts-check
import { Navigation } from 'react-native-navigation';
import registerScreens from './src/navigation/registerScreens';
import nav_ids from './src/navigation/nav_ids';
import { sideMenu } from './src/navigation/rootConfig';

Navigation.setDefaultOptions({
    topBar: {
        title: { color: 'black' },
        leftButtons: [
            {
                id: nav_ids.homeBurger,
                text: 'Burger',
            },
        ],
    },
    animations: {
        push: { enabled: false },
        pop: { enabled: false },
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
