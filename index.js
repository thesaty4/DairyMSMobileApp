/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { Provider } from 'react-redux';
import Snackbar from './src/shared/components/view/Snackbar';
import { store } from './src/redux/store';

const AppWithProviders = () => (
    <Provider store={store}>
        <App />
        <Snackbar />
    </Provider>
);

AppRegistry.registerComponent(appName, () => AppWithProviders);