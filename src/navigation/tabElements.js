import nav_comp from './nav_comp';
import nav_ids from './nav_ids';

/** @type {import('react-native-navigation').OptionsTopBar}*/
export const rightBtn_cart = {
    rightButtons: [
        {
            id: nav_ids.basket,
            component: { name: nav_comp.BASKET, passProps: { buy: 0 } },
        },
    ],
};
