/**
 * Rotas da aplicação
 */

import { StackNavigator } from 'react-navigation';

// Pages
import Main from 'pages/Main';

// Rotas
const Routes = StackNavigator({
  Main: { screen: Main },
}, {
  initialRouteName: 'Main',
  navigationOptions: {
    header: null,
  },
});

export default Routes;
