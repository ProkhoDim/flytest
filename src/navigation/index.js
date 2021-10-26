import {Navigation} from 'react-native-navigation';
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';
import routes from './routes';
import {WrappedComponent} from '../redux/store';
import Counter from '../components/Counter';
import nav_comp from './nav_comp';
import Burger from '../components/Burger';

export default function registerScreens() {
  Navigation.registerComponent(
    routes.HOME,
    WrappedComponent(HomeScreen),
    () => HomeScreen,
  );
  Navigation.registerComponent(
    routes.SETTINGS,
    WrappedComponent(SettingsScreen),
    () => SettingsScreen,
  );
  Navigation.registerComponent(
    routes.SIDE_MENU,
    WrappedComponent(Counter),
    () => Counter,
  );
  Navigation.registerComponent(nav_comp.BURGER, () => Burger);
}
