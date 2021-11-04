// @ts-check

import routes from './routes';

/**@type {import('react-native-navigation').LayoutBottomTabs} */
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
                id: 'MakeupStack',
                children: [
                    {
                        component: {
                            name: routes.MAKEUP,
                        },
                    },
                ],
                options: {
                    bottomTab: {
                        text: routes.MAKEUP,
                        textColor: '#000',
                        fontSize: 16,
                        selectedTextColor: 'red',
                        selectedFontSize: 20,
                        iconHeight: 0,
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
/** @type {import('react-native-navigation').LayoutSideMenu}  */
export const sideMenu = {
    id: 'SIDE_MENU',
    center: {
        bottomTabs: bottomTabs,
    },
    left: {
        component: { name: routes.SIDE_MENU, passProps: { counter: false } },
    },
};
