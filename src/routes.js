import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import StartScreen from '~/pages/StartScreen';

const Routes = createAppContainer(createSwitchNavigator({
  StartScreen

}));

export default Routes;
