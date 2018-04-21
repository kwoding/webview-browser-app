import React from 'react';
import {StackNavigator} from 'react-navigation';

import UrlInputScreen from '../screens/UrlInputScreen';
import WebViewScreen from '../screens/WebViewScreen';

export const Root = StackNavigator({
        UrlInputScreen: {
            screen: UrlInputScreen,
        },
        WebViewScreen: {
            screen: WebViewScreen,
        },
    },
    {
        headerMode: 'none',
        navigationOptions: {
            headerVisible: false,
        }
    });