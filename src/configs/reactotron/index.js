/**
 * Configuração do Reactotron para fins de debug
 */

import Reactotron, { overlay } from 'reactotron-react-native';

if (__DEV__) {
  const tron = Reactotron
    .configure()
    .useReactNative()
    .use(overlay())
    .connect();

  tron.clear(); // Limpa a tela do Reactotron a cada reload

  console.tron = tron;
}
