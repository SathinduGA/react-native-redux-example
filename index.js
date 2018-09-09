import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux'; 

import {name as appName} from './app.json';
import Application from './src/app';
import configStore from './src/store/config_store';

const store = configStore();

const RNRedux = () => (
    <Provider store={ store }>
        <Application/>
    </Provider>
);

AppRegistry.registerComponent (appName, () => RNRedux);
