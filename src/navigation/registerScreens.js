import { Navigation } from 'react-native-navigation';
import routes from './routes';
import HomeScreen from '../screens/HomeScreen';
import MakeupScreen from '../screens/MakeupScreen';
import SettingsScreen from '../screens/SettingsScreen';
import { WrappedComponent } from '../redux/store';
import Counter from '../components/Counter';
import nav_comp from './nav_comp';
import Burger from '../components/Burger';
import Filters from '../components/Filters';
import LeftSideMenu from '../components/LeftSideMenu';

const screens = new Map();

screens.set(routes.HOME, HomeScreen);
screens.set(routes.MAKEUP, MakeupScreen);
screens.set(routes.SETTINGS, SettingsScreen);
screens.set(routes.SIDE_MENU, LeftSideMenu);
screens.set(nav_comp.BURGER, Burger);
screens.set(routes.FILTERS, Filters);

export default function registerScreens() {
    screens.forEach((Component, route) =>
        Navigation.registerComponent(
            route,
            WrappedComponent(Component),
            () => Component
        )
    );
}
